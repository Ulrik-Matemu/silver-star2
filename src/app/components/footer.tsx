"use client"
import React, { useState } from 'react';
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  ChevronDown,
  Phone,
  X,
  Twitter,
  MapPin,
  Mailbox
} from 'lucide-react';
import Image from 'next/image';


export const Footer = () => {
  // State to track which dropdown is open
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  // helper to create simple URL slugs
  const toSlug = (s: string) =>
    s
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const menuSections = [
    {
      title: "PRODUCTS",
      hasDropdown: false,
    },
    {
      title: "SOLUTIONS",
      hasDropdown: false,
    },
    {
      title: "FAQS",
      hasDropdown: false,
    },
  ];

  const rightSections = [
    { title: "ABOUT US", hasDropdown: false },
    { title: "CAREERS", hasDropdown: false },
    { title: "CONTACT US", hasDropdown: false },
  ];

  return (
    <>
      <footer className="bg-[#1a1a1a] text-gray-300 py-12 px-6 md:px-16 lg:px-24 font-sans border-t border-gray-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:flex gap-12">

          {/* Left Column: Branding & Contact */}
          <div className="md:col-span-4 space-y-4 md:w-1/2">
            <div className="space-y-2">
              <Image
                src="/new-silverstar-logo.png"
                alt="Silver Star Logo"
                width={150}
                height={50}
                className="w-auto h-auto"
              />
            </div>

            <div className='md:flex items-center gap-4'>
              <div className='space-y-4'>
              <p className='text-sm font-medium text-gray-400'>Our Office</p>
              <div className="space-x-2">
                <MapPin size={16} className="mb-2 flex-shrink-0 text-white" />
                <p>Coca-cola Road, Mwenge, Dar es Salaam, Tanzania</p>
                <p>P. O. Box 11451</p>
                <p><b>Email:</b> info@silverstars.co.tz</p>
              </div>

              <div className="space-x-2">

              </div>
            </div>

            

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-400">Contact us</p>
              <div className="space-y-3 text-sm">
                <div className="space-x-2">
                  <Phone size={16} className="mb-2 flex-shrink-0 text-white" />
                  <p>Technical Services at <a href='tel:+255787788288' className='font-bold'>+255 787 788 288</a></p>
                </div>
                <div className="flex items-start space-x-2">
                  <p>Engineer at <a href='tel:+255716733283' className='font-bold'>+255 716 733 283</a></p>
                </div>
                <div className="flex items-start space-x-2">
                  <p>General Enquiries at <a href='tel:+255713484175' className='font-bold'>+255 713 484 175</a> / <a href='tel:+255764009008' className='font-bold'>+255 764 009 008</a></p>
                </div>
              </div>
            </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-400">Follow us</p>
              <div className="flex space-x-3">
                <a href='https://www.facebook.com/share/1HP4SuTDfp/'>
                  <SocialIcon icon={<Facebook size={18} />} />
                </a>
                <a href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.silverstar.co.tz%2F&text=Check%20out%20Silver%20Star%20Resources%20Company%20Limited!'>
                  <SocialIcon icon={<Twitter size={18} />} />
                </a>
                <a href='https://www.linkedin.com/in/silverstar-company-tz-81045b3b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                  <SocialIcon icon={<Linkedin size={18} />} />
                </a>
                <a href='https://www.youtube.com/'>
                  <SocialIcon icon={<Youtube size={18} />} />
                </a>
                <a href='https://www.instagram.com/silverstarcompanytz?igsh=M243d250Z3ExMjJh'>
                  <SocialIcon icon={<Instagram size={18} />} />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: Primary Links */}
          <div className="md:col-span-4 md:w-1/4">
            {menuSections.map((section) => {
              const baseHref = `/${toSlug(section.title)}`;
              return (
                <div key={section.title} className="border-b border-gray-700">
                  {section.hasDropdown ? (
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="w-full py-4 flex justify-between items-center hover:text-white transition-colors text-left"
                    >
                      <span className="text-sm font-bold tracking-wide uppercase">{section.title}</span>
                      <ChevronDown
                        size={20}
                        className={`text-gray-500 transition-transform duration-300 ${openSection === section.title ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : (
                    // non-dropdown sections are direct links
                    <a
                      href={baseHref}
                      className="w-full block py-4 flex justify-between items-center hover:text-white transition-colors text-left"
                    >
                      <span className="text-sm font-bold tracking-wide uppercase">{section.title}</span>
                    </a>
                  )}



                </div>
              );
            })}
          </div>

          {/* Right Column: Secondary Links */}
          <div className="md:col-span-4 md:w-1/4">
            {rightSections.map((section) => {
              const baseHref = `/${toSlug(section.title)}`;
              return (
                <div key={section.title} className="border-b border-gray-700">
                  {section.hasDropdown ? (
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="w-full py-4 flex justify-between items-center hover:text-white transition-colors text-left"
                    >
                      <span className="text-sm font-bold tracking-wide uppercase">{section.title}</span>
                      <ChevronDown
                        size={20}
                        className={`text-gray-500 transition-transform duration-300 ${openSection === section.title ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : (
                    <a
                      href={baseHref}
                      className="w-full block py-4 flex justify-between items-center hover:text-white transition-colors text-left"
                    >
                      <span className="text-sm font-bold tracking-wide uppercase">{section.title}</span>
                    </a>
                  )}
                </div>
              );
            })}
          </div>

        </div>
        <div className="copyright-text">
          <p className="text-sm text-gray-300">Copyright © 2026 Silverstar Resources Company Limited. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-9 h-9 rounded-full  flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white cursor-pointer transition-all">
    {icon}
  </div>
);