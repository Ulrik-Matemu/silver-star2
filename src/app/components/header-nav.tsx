"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Briefcase, Home, Lightbulb, Menu, PackageSearch, Phone, Search, X } from 'lucide-react';
import { SearchBar } from './search-bar';
import { AnimatePresence, motion } from 'framer-motion';

export const HeaderNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }

    const navLinks = [
        { href: "/", text: "HOME", icon: <Home size={20} /> },
        { href: "/products", text: "PRODUCTS", icon: <PackageSearch size={20} /> },
        { href: "/solutions", text: "SOLUTIONS", icon: <Lightbulb size={20} /> },
        { href: "/careers", text: "CAREERS", icon: <Briefcase size={20} /> },
        { href: "/contact-us", text: "CONTACT US", icon: <Phone size={20} /> },
    ];

    return (
        <>
            <AnimatePresence>
                {isSearchOpen && <SearchBar onClose={toggleSearch} />}
            </AnimatePresence>

            <header className="sticky top-0 z-40 bg-white shadow-md">
                <nav className="flex items-center justify-between p-2 max-w-7xl mx-auto">
                    <div className="flex items-center">
                        <a href="/" className="block">
                            <Image
                                src="/silver-star-logo.png"
                                alt="Logo"
                                width={180}
                                height={90}
                                className='w-auto h-auto p-2'
                                priority
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="flex items-center text-gray-600 hover:text-blue-600 text-sm font-bold tracking-wider transition-colors">
                                {link.text}
                                <span className="ml-3">{link.icon}</span>
                            </a>
                        ))}
                        <button onClick={toggleSearch} className="flex items-center text-gray-600 hover:text-blue-600">
                            <Search size={22} />
                        </button>
                        <div className="h-12 bg-gray-200 border border-gray-300"></div>
                        <button
                            onClick={toggleMenu}
                            className="flex items-center text-gray-600 hover:text-blue-600 text-sm font-bold"
                        >
                            MENU
                            <Menu size={22} className="ml-3" />
                        </button>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="p-2 focus:outline-none">
                            <Menu size={28} className="text-gray-700" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* --- SIDE MENU (DRAWER) --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop with blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50"
                            style={{ backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.45)' }}
                            onClick={toggleMenu}
                        />

                        {/* Sidebar panel */}
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 340, damping: 32 }}
                            className="fixed top-0 right-0 h-full z-[60] flex flex-col"
                            style={{
                                width: 'clamp(300px, 85vw, 420px)',
                                background: 'linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(248,249,255,0.97) 100%)',
                                boxShadow: '-8px 0 40px rgba(0,0,0,0.12), -1px 0 0 rgba(255,255,255,0.8)',
                                borderLeft: '1px solid rgba(255,255,255,0.6)',
                            }}
                        >
                            {/* Header */}
                            <div
                                className="flex justify-between items-center px-7 py-6"
                                style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
                            >
                                <motion.h2
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-xs font-semibold tracking-[0.2em] uppercase pl-6"
                                    style={{ color: '#94a3b8', letterSpacing: '0.18em' }}
                                >
                                    Silverstar 
                                </motion.h2>
                                <motion.button
                                    onClick={toggleMenu}
                                    whileHover={{ scale: 1.05, rotate: 90 }}
                                    whileTap={{ scale: 0.92 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl"
                                    style={{
                                        background: 'rgba(0,0,0,0.05)',
                                        color: '#64748b',
                                        border: '1px solid rgba(0,0,0,0.06)',
                                    }}
                                >
                                    <X size={16} strokeWidth={2.5} />
                                </motion.button>
                            </div>

                            {/* Body */}
                            <div className="flex-grow px-5 py-6 overflow-y-auto space-y-2">

                                {/* Search */}
                                <motion.button
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.13 }}
                                    onClick={toggleSearch}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left"
                                    style={{
                                        background: 'rgba(241,245,249,0.8)',
                                        border: '1px solid rgba(226,232,240,0.8)',
                                        color: '#94a3b8',
                                        fontSize: '0.875rem',
                                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
                                    }}
                                >
                                    <Search size={16} strokeWidth={2} />
                                    <span>Search anything…</span>
                                    <span
                                        className="ml-auto text-xs px-2 py-0.5 rounded-md"
                                        style={{ background: 'rgba(0,0,0,0.06)', color: '#cbd5e1', fontFamily: 'monospace' }}
                                    >
                                        
                                    </span>
                                </motion.button>

                                {/* Nav links */}
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.16 + i * 0.055, type: 'spring', stiffness: 280, damping: 24 }}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center gap-4 px-4 py-3.5 rounded-2xl group"
                                        style={{
                                            color: '#374151',
                                            textDecoration: 'none',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* Hover fill */}
                                        <motion.div
                                            className="absolute inset-0 rounded-2xl"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            style={{
                                                background: 'linear-gradient(120deg, rgba(59,130,246,0.07), rgba(99,102,241,0.07))',
                                                border: '1px solid rgba(99,102,241,0.1)',
                                            }}
                                        />

                                        {/* Icon */}
                                        <span
                                            className="relative w-9 h-9 flex items-center justify-center rounded-xl flex-shrink-0"
                                            style={{
                                                background: 'rgba(241,245,249,0.9)',
                                                border: '1px solid rgba(226,232,240,0.7)',
                                                color: '#6366f1',
                                            }}
                                        >
                                            {link.icon}
                                        </span>

                                        <span className="relative font-medium text-[0.925rem]" style={{ color: '#1e293b' }}>
                                            {link.text}
                                        </span>

                                        {/* Arrow */}
                                        <motion.span
                                            className="relative ml-auto opacity-0 group-hover:opacity-100"
                                            style={{ color: '#a5b4fc' }}
                                            initial={{ x: -4 }}
                                            whileHover={{ x: 0 }}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </motion.span>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Footer */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                                className="px-7 py-5 flex items-center justify-between"
                                style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
                            >
                                <span className="text-xs" style={{ color: '#cbd5e1', letterSpacing: '0.04em' }}>
                                    Silver Star &copy; {new Date().getFullYear()}
                                </span>
                                <div className="flex gap-1">
                                    {[0.3, 0.5, 0.7].map((d, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1 h-1 rounded-full"
                                            style={{ background: '#e2e8f0' }}
                                            animate={{ scale: [1, 1.4, 1] }}
                                            transition={{ duration: 2, delay: d, repeat: Infinity }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
