import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState, useEffect} from "react";
import { Link } from 'react-router-dom'; 

const Header = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const [isScroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('nav a', {
            y: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }, []);

    return (
        <nav className={`sticky top-0 z-50 w-full ${isScroll ? 'shadow-lg bg-white' : 'shadow-none bg-transparent'}`}>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link className="flex items-center space-x-3" to="/" onClick={() => setCurrentPage('home')}>
                            <img src="/logo.jpeg" alt="Parthly Logo" className="h-12 w-auto" />
                            <span className="text-2xl font-bold text-blue-700">Parthly</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link className={` ${currentPage=="home" ? "text-blue-700 underline underline-offset-2" : "text-gray-700"}`} to="/" onClick={() => setCurrentPage('home')}>Home</Link>
                        <Link className={` ${currentPage=="about" ? "text-blue-700 underline" : "text-gray-700"}`} to="/about" onClick={() => setCurrentPage('about')}>About Us</Link>
                        <Link className={` ${currentPage=="contact" ? "text-blue-700 underline" : "text-gray-700"}`} to="/contact" onClick={() => setCurrentPage('contact')}>Contact Us</Link>
                        <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600">Get Started</button>
                    </div>
                    <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <button>
                            {isOpen ? <RxCross1 className="h-6 w-6 text-blue-700" /> : <GiHamburgerMenu className="h-6 w-6 text-blue-700" />}
                        </button>
                    </div>
                </div>
                <div className={`bg-white ${isOpen ? 'block' : 'hidden'} md:hidden shadow-lg w-full`}>
                    <div className="pt-2 pb-4 space-y-2">
                        <Link className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-lg " to="/" data-discover="true">Home</Link>
                        <Link className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-lg bg-gray-50" to="/about" data-discover="true">About Us</Link>
                        <Link className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-lg " to="/contact" data-discover="true">Contact Us</Link>
                        <div className="pt-4">
                            <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-700/90">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header