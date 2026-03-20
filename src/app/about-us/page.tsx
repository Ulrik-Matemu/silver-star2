"use client"
import { useEffect, useRef } from "react"

const solutions = [
  { title: "Concrete Admixtures", desc: "Improving strength, workability, and durability of concrete." },
  { title: "Flooring Systems", desc: "Epoxy flooring, polyurethane flooring, and sports surfaces." },
  { title: "Tile Adhesives & Installation", desc: "Reliable solutions for durable tile installation." },
  { title: "Waterproofing Solutions", desc: "Protecting structures against water infiltration." },
  { title: "Concrete Repair & Strengthening", desc: "Restoring and reinforcing damaged structures." },
  { title: "Sealants & Bonding Agents", desc: "Ensuring strong, durable joints for every application." },
]

const whyUs = [
  { num: "01", title: "Industry Experience", desc: "Over a decade in construction materials — we understand the practical needs of contractors, engineers, and developers." },
  { num: "02", title: "Trusted Global Products", desc: "As an authorized MAPEI distributor, we supply internationally recognized solutions known for performance and reliability." },
  { num: "03", title: "Technical Support", desc: "Professional guidance to help clients choose the right materials and application systems for every project." },
  { num: "04", title: "Complete Solutions", desc: "From concrete works to finishing systems, we support projects from groundbreaking to final finish." },
  { num: "05", title: "Reliability & Quality", desc: "Our commitment is to supply high-quality products that improve the durability and sustainability of modern buildings." },
]

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useCountUp() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>("[data-count]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          if (entry.isIntersecting && !target.dataset.done) {
            target.dataset.done = "1"
            const countStr = target.dataset.count
            const isNum = !!countStr && !isNaN(Number(countStr))
            if (!isNum || !countStr) return
            const end = parseInt(countStr, 10)
            const duration = 1400
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              target.textContent = Math.round(eased * end) + "+"
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 }
    )
    counters.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function AboutUs() {
  useScrollReveal()
  useCountUp()

  return (
    <>
      <style>{`
       

        :root {
          --blue: #005892;
          --blue-light: #007bc2;
          --blue-pale: #e6f2ff;
          --dark: #181c20;
          --dark-mid: #22292f;
          --white: #ffffff;
          --bg: #f5f7f9;
          --muted: #5a6670;
          --border: rgba(0,88,146,0.13);
          --transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

      

        .ap {
          // font-family: 'DM Sans', sans-serif;
          background: var(--white);
          color: var(--dark);
          overflow-x: hidden;
        }

        /* ─── REVEAL SYSTEM ─── */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s var(--transition), transform 0.7s var(--transition);
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.7s var(--transition), transform 0.7s var(--transition);
        }
        .reveal-left.is-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.7s var(--transition), transform 0.7s var(--transition);
        }
        .reveal-right.is-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal.delay-1 { transition-delay: 0.1s; }
        .reveal.delay-2 { transition-delay: 0.2s; }
        .reveal.delay-3 { transition-delay: 0.3s; }
        .reveal.delay-4 { transition-delay: 0.4s; }
        .reveal.delay-5 { transition-delay: 0.5s; }

        /* ─── INTRO ─── */
        .intro {
          padding: clamp(64px, 10vw, 104px) clamp(20px, 5vw, 40px);
          max-width: 1140px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 88px);
          align-items: center;
        }

        .intro-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 20px;
          position: relative;
          padding-left: 20px;
        }
        .intro-tag::before {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          width: 12px; height: 1.5px;
          background: var(--blue);
          transform: translateY(-50%);
        }

        .intro-heading {
          // font-family: 'Crimson Pro', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 600;
          line-height: 1.15;
          color: var(--dark);
          margin-bottom: 24px;
        }
        .intro-heading em {
          font-style: italic;
          color: var(--blue-light);
        }

        .intro-sub {
          font-size: clamp(14px, 1.6vw, 16px);
          font-weight: 300;
          color: black;
          line-height: 1.9;
          margin-bottom: 40px;
        }

        .stat-row {
          display: flex;
          gap: clamp(24px, 4vw, 48px);
          flex-wrap: wrap;
        }

        .stat {
          border-left: 2.5px solid var(--blue);
          padding-left: 16px;
        }
        .stat-num {
          // font-family: 'Crimson Pro', serif;
          font-size: clamp(2rem, 3vw, 2.6rem);
          font-weight: 600;
          color: var(--blue);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 10.5px;
          font-weight: 500;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* ─── SPEC CARD ─── */
        .spec-card {
          background: var(--dark-mid);
          border-radius: 4px;
          padding: clamp(28px, 4vw, 48px) clamp(24px, 4vw, 42px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 48px rgba(0,0,0,0.12);
        }
        .spec-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--blue-light));
        }
        /* subtle shimmer on hover */
        .spec-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%);
          pointer-events: none;
          transition: opacity 0.4s;
        }
        .spec-card:hover::after { opacity: 0; }

        .spec-card-label {
          font-size: 9.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--blue-light);
          margin-bottom: 24px;
          font-weight: 600;
        }

        .spec-list {
          list-style: none;
        }
        .spec-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: clamp(13px, 1.4vw, 14.5px);
          font-weight: 300;
          color: rgba(255,255,255,0.88);
          line-height: 1.55;
          opacity: 0;
          transform: translateX(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .spec-list li:last-child { border-bottom: none; }

        .spec-card.is-visible .spec-list li {
          opacity: 1;
          transform: translateX(0);
        }
        .spec-list li:nth-child(1) { transition-delay: 0.05s; }
        .spec-list li:nth-child(2) { transition-delay: 0.12s; }
        .spec-list li:nth-child(3) { transition-delay: 0.19s; }
        .spec-list li:nth-child(4) { transition-delay: 0.26s; }
        .spec-list li:nth-child(5) { transition-delay: 0.33s; }
        .spec-list li:nth-child(6) { transition-delay: 0.4s; }

        .spec-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--blue-light);
          flex-shrink: 0;
          margin-top: 6px;
        }

        .spec-tagline {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          // font-family: 'Crimson Pro', serif;
          font-style: italic;
          font-size: 13.5px;
          color: rgba(255,255,255,0.42);
          text-align: center;
        }

        /* ─── MISSION / VISION ─── */
        .mv-section {
          background: var(--blue);
          padding: clamp(56px, 8vw, 88px) clamp(20px, 5vw, 40px);
          overflow: hidden;
        }

        .mv-inner {
          max-width: 1140px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .mv-block {
          padding: clamp(36px, 5vw, 56px) clamp(28px, 5vw, 60px);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.4s ease;
        }
        .mv-block:hover { background: rgba(255,255,255,0.07); }

        .mv-line {
          width: 28px; height: 2.5px;
          background: rgba(255,255,255,0.7);
          margin-bottom: 24px;
          transition: width 0.5s ease;
        }
        .mv-block:hover .mv-line { width: 48px; }

        .mv-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 14px;
          font-weight: 600;
        }
        .mv-title {
          // font-family: 'Crimson Pro', serif;
          font-size: clamp(1.6rem, 2.5vw, 2rem);
          font-weight: 500;
          color: #fff;
          margin-bottom: 18px;
        }
        .mv-body {
          font-size: clamp(14px, 1.5vw, 15px);
          font-weight: 300;
          color: rgba(255,255,255,0.82);
          line-height: 1.9;
        }

        /* ─── STORY ─── */
        .story-section {
          padding: clamp(72px, 10vw, 112px) clamp(20px, 5vw, 40px);
          max-width: 820px;
          margin: 0 auto;
        }

        .section-tag {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--blue);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .section-tag::before {
          content: '';
          width: 12px; height: 1.5px;
          background: var(--blue);
          flex-shrink: 0;
        }

        .section-heading {
          // font-family: 'Crimson Pro', serif;
          font-size: clamp(1.9rem, 3.5vw, 2.9rem);
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 36px;
        }

        .story-lead {
          font-size: clamp(15.5px, 1.8vw, 17.5px);
          font-weight: 500;
          color: var(--blue);
          line-height: 1.75;
          margin-bottom: 0;
        }

        .story-divider {
          width: 36px; height: 2px;
          background: var(--blue-light);
          margin: 24px 0;
        }

        .story-body p {
          font-size: clamp(14.5px, 1.6vw, 16px);
          font-weight: 300;
          color: black;
          line-height: 1.9;
          margin-bottom: 16px;
        }
        .story-body p:last-child { margin-bottom: 0; }

        /* ─── WHY US ─── */
        .why-section {
          background: var(--bg);
          padding: clamp(72px, 10vw, 104px) clamp(20px, 5vw, 40px);
        }
        .why-inner {
          max-width: 1140px;
          margin: 0 auto;
        }
        .why-header {
          margin-bottom: clamp(36px, 5vw, 56px);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .why-card {
          background: #fff;
          padding: clamp(24px, 3vw, 40px) clamp(20px, 3vw, 36px);
          border: 1px solid #e8edf0;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s var(--transition), box-shadow 0.35s ease, border-color 0.3s ease;
          cursor: default;
        }
        .why-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2.5px;
          background: var(--blue);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s var(--transition);
        }
        .why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0,88,146,0.08);
          border-color: var(--border);
        }
        .why-card:hover::after { transform: scaleX(1); }

        .why-num {
          // font-family: 'Crimson Pro', serif;
          font-size: clamp(2.4rem, 3.5vw, 3.2rem);
          font-weight: 600;
          color: var(--blue-pale);
          line-height: 1;
          margin-bottom: 18px;
          transition: color 0.3s ease;
        }
        .why-card:hover .why-num { color: #cce1f2; }

        .why-title {
          font-size: clamp(13px, 1.5vw, 15px);
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 10px;
        }
        .why-desc {
          font-size: clamp(12.5px, 1.4vw, 14px);
          font-weight: 300;
          color: var(--muted);
          line-height: 1.75;
        }

        /* ─── SOLUTIONS ─── */
        .solutions-section {
          padding: clamp(72px, 10vw, 112px) clamp(20px, 5vw, 40px);
          max-width: 1140px;
          margin: 0 auto;
        }

        .solutions-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: clamp(36px, 5vw, 56px);
        }

        .solutions-sub {
          font-size: clamp(13px, 1.5vw, 15px);
          font-weight: 300;
          color: var(--muted);
          max-width: 280px;
          line-height: 1.75;
          text-align: right;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .sol-item {
          background: #f7f9fa;
          border: 1px solid #e4eaed;
          padding: clamp(20px, 3vw, 36px) clamp(18px, 3vw, 30px);
          position: relative;
          overflow: hidden;
          transition: background 0.35s ease, border-color 0.35s ease, transform 0.35s var(--transition);
          cursor: default;
        }
        .sol-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--blue);
          transform: translateY(100%);
          transition: transform 0.4s var(--transition);
          z-index: 0;
        }
        .sol-item:hover { transform: translateY(-2px); }
        .sol-item:hover::before { transform: translateY(0); }

        .sol-num, .sol-title, .sol-desc {
          position: relative;
          z-index: 1;
          transition: color 0.35s ease;
        }

        .sol-num {
          display: block;
          font-size: 10.5px;
          font-weight: 700;
          color: var(--blue);
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }
        .sol-title {
          font-size: clamp(13px, 1.5vw, 15px);
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .sol-desc {
          font-size: clamp(12px, 1.3vw, 13.5px);
          font-weight: 300;
          color: var(--muted);
          line-height: 1.7;
        }

        .sol-item:hover .sol-num,
        .sol-item:hover .sol-title,
        .sol-item:hover .sol-desc {
          color: rgba(255,255,255,0.95);
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 900px) {
          .intro {
            grid-template-columns: 1fr;
          }
          .mv-inner {
            grid-template-columns: 1fr;
          }
          .mv-block:first-child {
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .why-grid {
            grid-template-columns: 1fr 1fr;
          }
          .solutions-grid {
            grid-template-columns: 1fr 1fr;
          }
          .solutions-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .solutions-sub { text-align: left; max-width: 100%; }
        }

        @media (max-width: 580px) {
          .why-grid { grid-template-columns: 1fr; }
          .solutions-grid { grid-template-columns: 1fr; }
          .stat-row { gap: 20px; }
          .mv-block { padding: 32px 24px; }
        }
      `}</style>

      <div className="ap">

        {/* ── INTRO ── */}
        <section className="intro">
          <div>
            <span className="about-tag reveal">Est. 2011 · Dar es Salaam, Tanzania</span>
            <h1 className="intro-heading reveal delay-1">
              Building with <em>confidence</em>,<br />backed by expertise.
            </h1>
            <p className="intro-sub reveal delay-2">
              A trusted construction solutions provider and authorized distributor of MAPEI products,
              with over 15 years of experience delivering quality, innovation, and reliability across the region.
            </p>
            <div className="stat-row reveal delay-3">
              <div className="stat">
                <div className="stat-num" data-count="15">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-num" data-count="6">6</div>
                <div className="stat-label">Solution Categories</div>
              </div>
              <div className="stat">
                <div className="stat-num">MAPEI</div>
                <div className="stat-label">Authorized Distributor</div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-right delay-2">
            <div className="spec-card reveal">
              <div className="spec-card-label">Specializations</div>
              <ul className="spec-list">
                {[
                  "Concrete admixtures for enhanced performance",
                  "Flooring systems, including sports surfaces",
                  "Tile adhesives and installation systems",
                  "Waterproofing solutions",
                  "Concrete repair and structural strengthening",
                  "Sealants and bonding solutions",
                ].map((item, i) => (
                  <li key={i}><span className="spec-dot" />{item}</li>
                ))}
              </ul>
              <p className="spec-tagline">From the foundation to the final finish.</p>
            </div>
          </div>
        </section>

        {/* ── MISSION / VISION ── */}
        <section className="mv-section">
          <div className="mv-inner">
            <div className="mv-block reveal reveal-left">
              <div className="mv-line" />
              <div className="mv-label">Mission</div>
              <h3 className="mv-title">What We're Here to Do</h3>
              <p className="mv-body">
                To provide world-class construction materials and technical expertise that empower our
                clients to build durable, sustainable, and high-quality structures.
              </p>
            </div>
            <div className="mv-block reveal reveal-right delay-2">
              <div className="mv-line" />
              <div className="mv-label">Vision</div>
              <h3 className="mv-title">Where We're Going</h3>
              <p className="mv-body">
                To be a leading supplier of construction solutions in the region, recognized for
                excellence, reliability, and innovation in every project we support.
              </p>
            </div>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="story-section">
          <span className="section-tag reveal">Our Journey</span>
          <h2 className="section-heading reveal delay-1">A Foundation Built on Trust</h2>
          <div className="story-body">
            <p className="story-lead reveal delay-2">
              Silverstar Resources Company Limited was established in 2011 with the goal of providing
              reliable and innovative construction solutions.
            </p>
            <div className="story-divider reveal delay-3" />
            <p className="reveal delay-3">
              From the beginning, our focus has been to support engineers, contractors, architects, and
              developers with high-quality materials and professional technical guidance.
            </p>
            <p className="reveal delay-4">
              Over the years, we have grown into a trusted construction solutions provider and an
              authorized distributor of MAPEI products.
            </p>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="why-section">
          <div className="why-inner">
            <div className="why-header">
              <span className="section-tag reveal">Why Choose Us</span>
              <h2 className="section-heading reveal delay-1">The Silverstar Difference</h2>
            </div>
            <div className="why-grid">
              {whyUs.map((item, i) => (
                <div key={item.num} className={`why-card reveal delay-${Math.min(i + 1, 5)}`}>
                  <div className="why-num">{item.num}</div>
                  <div className="why-title">{item.title}</div>
                  <div className="why-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="solutions-section">
          <div className="solutions-header">
            <div>
              <span className="section-tag reveal">What We Offer</span>
              <h2 className="section-heading reveal delay-1" style={{ marginBottom: 0 }}>Our Solutions</h2>
            </div>
            <p className="solutions-sub reveal delay-2">
              Tailored to different project needs — from structural works to finishing systems.
            </p>
          </div>
          <div className="solutions-grid">
            {solutions.map((s, i) => (
              <div key={i} className={`sol-item reveal delay-${Math.min(i + 1, 5)}`}>
                <span className="sol-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="sol-title">{s.title}</div>
                <div className="sol-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}