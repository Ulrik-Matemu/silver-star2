"use client"
import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  Youtube, 
  Instagram, 
  ChevronDown, 
  Phone,
  X
} from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  const menuSections = [
    {
      title: "PRODUCTS",
      hasDropdown: true,
      links: [],
    },
    {
      title: "SOLUTIONS",
      hasDropdown: true,
      links: [],
    },
    {
      title: "REALTÀ MAGAZINE",
      hasDropdown: false,
      links: [],
    },
    {
      title: "TRAINING AND TECHNICAL SUPPORT",
      hasDropdown: true,
      links: [],
    },
    {
      title: "TOOLS & DOWNLOADS",
      hasDropdown: true,
      links: [],
    },
    {
      title: "FAQ",
      hasDropdown: false,
      links: [],
    },
  ];

  const rightSections = [
    { title: "PROJECTS", hasDropdown: true },
    { title: "ABOUT US", hasDropdown: true },
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
             {/* Replace with actual MAPEI Logo */}
            <Image src="/silver-star-logo.png" alt="Silver Star Logo" width={150} height={50} className="w-auto h-auto" />
            
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-400">Follow us</p>
            <div className="flex space-x-3">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<X size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
            </div>
          </div>

          

          <div className="space-y-4 pt-4">
            <p className="text-sm font-medium text-gray-400">Contact us</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <p>Technical Services at  +255 787 788 288</p>
              </div>
              <div className="pl-6">
                <p>General Enquiries at  +255 713 484 175 / +255 764 009 008</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Primary Links */}
        <div className="md:col-span-4 space-y-0">
          {menuSections.map((section, idx) => (
            <div key={idx} className="border-b border-gray-700 py-4 flex justify-between items-center cursor-pointer hover:text-white transition-colors">
              <span className="text-sm font-bold tracking-wide uppercase">{section.title}</span>
              {section.hasDropdown && <ChevronDown size={20} className="text-gray-500" />}
            </div>
          ))}
        </div>

        {/* Right Column: Secondary Links */}
        <div className="md:col-span-4 space-y-0">
          {rightSections.map((section, idx) => (
            <div key={idx} className="border-b border-gray-700 py-4 flex justify-between items-center cursor-pointer hover:text-white transition-colors">
              <span className="text-sm font-bold tracking-wide uppercase">{section.title}</span>
              {section.hasDropdown && <ChevronDown size={20} className="text-gray-500" />}
            </div>
          ))}
        </div>

      </div>
      <div className="pt-8">
        <p className="text-right text-sm text-gray-300">Copyright © 2026 Silverstar Resources Company Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-300 cursor-pointer transition-colors">
    {icon}
  </div>
);