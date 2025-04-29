import React, { useRef } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Footer = () => {
  const footerRef = useRef(null);
  const parthlyRef = useRef(null);
  const quickLinksRef = useRef(null);
  const contactRef = useRef(null);
  const copyrightRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "footer",
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power2.out', duration: 0.7 }
    });

    tl.from(parthlyRef.current, { y: 50, opacity: 0 });
    tl.from(quickLinksRef.current, { y: 50, opacity: 0 }, '-=0.5');
    tl.from(contactRef.current, { y: 50, opacity: 0 }, '-=0.5');
    tl.from(copyrightRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');

  },[]);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 " ref={parthlyRef}>
            <h3 className="text-2xl font-bold">Parthly</h3>
            <p className="mt-4 text-gray-400">Your personalized career guidance roadmap powered by AI.</p>
          </div>
          <div className="col-span-1 " ref={quickLinksRef}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 " ref={contactRef}>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: parthindustries000@gmail.com</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.instagram.com/parthly.in/" className="text-gray-400 hover:text-pink-600">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" fill="currentColor" />
              </a>
              <a href="https://x.com/ParthlyIn" className="text-gray-400 hover:text-black">
                <span className="sr-only">Twitter</span>
                <FaSquareXTwitter className="h-6 w-6" fill="currentColor" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-900">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" fill="currentColor" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p ref={copyrightRef} className="text-center text-gray-400 fitems">© 2025 Parthly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;