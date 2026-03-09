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
  Twitter
} from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  // State to track which dropdown is open
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  const menuSections = [
    {
      title: "PRODUCTS",
      hasDropdown: true,
      links: ["Products", "Technical Data Sheets", "Safety Data Sheets"],
    },
    {
      title: "SOLUTIONS",
      hasDropdown: true,
      links: ["Industrial Solutions", "Commercial Projects", "Residential Systems"],
    },
    {
      title: "REALTÀ MAGAZINE",
      hasDropdown: false,
    },
    {
      title: "TRAINING AND TECHNICAL SUPPORT",
      hasDropdown: true,
      links: ["Training Programs", "Technical Seminars", "Expert Support"],
    },
    {
      title: "TOOLS & DOWNLOADS",
      hasDropdown: true,
      links: ["Product Catalogues", "Project Estimators", "Software Tools"],
    },
    {
      title: "FAQ",
      hasDropdown: false,
    },
  ];

  const rightSections = [
    { title: "PROJECTS", hasDropdown: true, links: ["Completed Projects", "Ongoing Projects"] },
    { title: "ABOUT US", hasDropdown: true, links: ["Our Story", "Team", "Vision & Mission"] },
    { title: "WHERE TO BUY", hasDropdown: false },
    { title: "NEWS & EVENTS", hasDropdown: false },
    { title: "CAREERS", hasDropdown: false },
    { title: "CONTACT US", hasDropdown: false },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-12 px-6 md:px-16 lg:px-24 font-sans border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Branding & Contact */}
        <div className="md:col-span-4 space-y-8">
          <div className="space-y-2">
            <Image 
              src="/silver-star-logo.png" 
              alt="Silver Star Logo" 
              width={150} 
              height={50} 
              className="w-auto h-auto" 
            />
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

          <div className="space-y-4 pt-4">
            <p className="text-sm font-medium text-gray-400">Contact us</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-white" />
                <p>Technical Services at +255 787 788 288</p>
              </div>
              <div className="pl-6">
                <p>General Enquiries at +255 713 484 175 / +255 764 009 008</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Primary Links */}
        <div className="md:col-span-4">
          {menuSections.map((section) => (
            <div key={section.title} className="border-b border-gray-700">
              <button 
                onClick={() => section.hasDropdown && toggleSection(section.title)}
                className="w-full py-4 flex justify-between items-center hover:text-white transition-colors text-left"
              >
                <span className="text-sm font-bold tracking-wide uppercase">{section.title}</span>
                {section.hasDropdown && (
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-500 transition-transform duration-300 ${openSection === section.title ? 'rotate-180' : ''}`} 
                  />
                )}
              </button>
              {section.hasDropdown && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === section.title ? 'max-h-48 pb-4' : 'max-h-0'}`}>
                  {section.links?.map((link) => (
                    <a key={link} href="#" className="block py-1.5 text-xs text-gray-400 hover:text-white pl-2">
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Secondary Links */}
        <div className="md:col-span-4">
          {rightSections.map((section) => (
            <div key={section.title} className="border-b border-gray-700">
              <button 
                onClick={() => section.hasDropdown && toggleSection(section.title)}
                className="w-full py-4 flex justify-between items-center hover:text-white transition-colors text-left"
              >
                <span className="text-sm font-bold tracking-wide uppercase">{section.title}</span>
                {section.hasDropdown && (
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-500 transition-transform duration-300 ${openSection === section.title ? 'rotate-180' : ''}`} 
                  />
                )}
              </button>
              {section.hasDropdown && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === section.title ? 'max-h-48 pb-4' : 'max-h-0'}`}>
                  {section.links?.map((link) => (
                    <a key={link} href="#" className="block py-1.5 text-xs text-gray-400 hover:text-white pl-2">
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      <div className="mt-12 pt-8">
        <p className="text-center md:text-right text-xs text-gray-500 tracking-wide">
          Copyright © 2026 Silverstar Resources Company Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-9 h-9 rounded-full  flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white cursor-pointer transition-all">
    {icon}
  </div>
);