"use client"
import { useState } from 'react';
import Image from 'next/image'; //image

export const HeaderNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="flex items-center justify-between p-2 bg-white shadow-lg sticky top-0 z-40">
                <div className="flex items-center">
                    <Image
                        src="/silver-star-logo.png"
                        alt="Logo"
                        width={200}
                        height={100}
                        className='mx-4 my-1 w-auto h-auto'
                        priority
                    />
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden lg:flex items-center space-x-6 mx-6">
                    <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-bold tracking-wider">
                        PRODUCTS
                        <Image src="/icons/products.png" alt="Icon" width={20} height={20} className="ml-4" />
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-bold">
                        SOLUTIONS
                        <Image src="/icons/solutions.png" alt="Icon" width={30} height={30} className="ml-4" />
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-bold">
                        SEARCH
                        <Image src="/icons/search.png" alt="Icon" width={20} height={20} className="ml-4" />
                    </a>
                    <div className="h-12 w-px bg-gray-300 mx-4"></div>
                    <button 
                        onClick={toggleMenu}
                        className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-bold focus:outline-none"
                    >
                        MENU
                        <Image src="/icons/icon-menu.svg" alt='Menu' width={20} height={20} className='ml-4' />
                    </button>
                </div>

                {/* Mobile Menu Trigger - Visible only on mobile */}
                <div className="lg:hidden mx-6">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <Image src="/icons/icon-menu.svg" alt='Menu' width={30} height={30} />
                    </button>
                </div>
            </nav>

            {/* --- SIDE MENU (DRAWER) --- */}
            {/* Dark Overlay */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-30 visible' : 'opacity-0 invisible'}`}
                onClick={toggleMenu}
            ></div>

            {/* Sidebar Panel */}
            <div className={`fixed top-0 right-0 h-full w-[85%] md:w-[600px] bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                {/* Header of Sidebar */}
                <div className="flex justify-end items-center p-6">
                        <button onClick={toggleMenu} className="text-3xl text-gray-400 hover:text-gray-600">&times;</button>
                </div>
            </div>
        </>
    );
};