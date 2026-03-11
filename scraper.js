const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const OUTPUT_JSON = './src/app/data/products.json';
const IMAGE_DIR = './public/products';

// Entry point from your shared link
const crawlerQueue = [
  { 
    url: 'https://www.mapei.com/ae/en/renovation-green-building-and-restoration-of-historic-buildings/category/restoration-and-green-building/surface-consolidation-of-bricks--stones--mortar-joints-and-renders', 
    line: 'renovation-green-building-restoration-historic-buildings' 
  }
];

const visitedUrls = new Set();

async function scrapeProductDetail(browser, productUrl, line) {
  const page = await browser.newPage();
  try {
    await page.goto(productUrl, { waitUntil: 'networkidle', timeout: 60000 });
    
    const name = await page.$eval('h1', el => el.innerText.trim());
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    const description = await page.$eval('.product-detail__description, .product-excerpt', el => el.innerText.trim()).catch(() => '');
    
    // Grabbing the top two technical specs for your UI
    const specs = {
      color: await page.$eval('.technical-data__table-row:has-text("Color") .value', el => el.innerText).catch(() => 'Standard'),
      packaging: await page.$eval('.technical-data__table-row:has-text("Packaging") .value', el => el.innerText).catch(() => 'Consult TDS')
    };

    const imageUrl = await page.$eval('.product-detail__image img', el => el.src).catch(() => '');
    const localImagePath = `/products/${id}.png`;

    if (imageUrl) {
      const response = await axios({ url: imageUrl, method: 'GET', responseType: 'stream' });
      response.data.pipe(fs.createWriteStream(path.join(IMAGE_DIR, `${id}.png`)));
    }

    return { id, name, line, imageUrl: localImagePath, description, specs };
  } finally {
    await page.close();
  }
}

async function runScraper() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  let allProducts = JSON.parse(fs.readFileSync(OUTPUT_JSON, 'utf8'));

  while (crawlerQueue.length > 0) {
    const { url, line } = crawlerQueue.shift();
    if (visitedUrls.has(url)) continue;
    visitedUrls.add(url);

    console.log(`\n🔍 Exploring: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });

    // 1. Check for Product Cards (The actual items)
    const productLinks = await page.$$eval('.product-category-detail__products-list-item-title-link', links => links.map(a => a.href));
    
    // 2. Check for deeper Subcategories (The folder icons/grids)
    const subCategoryLinks = await page.$$eval('a.category-item__link', links => links.map(a => a.href));

    console.log(`   Found ${productLinks.length} products and ${subCategoryLinks.length} sub-paths.`);

    // Add new subcategories to the queue
    subCategoryLinks.forEach(link => crawlerQueue.push({ url: link, line }));

    // Scrape the products found on this level
    for (const pUrl of productLinks) {
      if (!visitedUrls.has(pUrl)) {
        visitedUrls.add(pUrl);
        try {
          const productData = await scrapeProductDetail(browser, pUrl, line);
          allProducts.push(productData);
          console.log(`   ✅ Saved: ${productData.name}`);
          fs.writeFileSync(OUTPUT_JSON, JSON.stringify(allProducts, null, 2));
        } catch (e) {
          console.error(`   ❌ Failed: ${pUrl}`);
        }
      }
    }
  }
  await browser.close();
  console.log('\n✨ Task complete.');
}

runScraper();