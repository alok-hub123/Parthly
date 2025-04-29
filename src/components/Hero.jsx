import React, { useRef } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroContainer = useRef(null); 

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(".new-button", { y: -50, opacity: 0, duration: 0.6 });

    tl.from(".main-heading span", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2, 
    }, "-=0.4"); 

    tl.from(".hero-paragraph", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6"); 
    tl.from(".hero-form", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5"); 
    tl.from(".hero-image", { scale: 0.95, opacity: 0, duration: 1 }, "-=0.7"); 

  }, { scope: heroContainer }); 

  return (
    <main ref={heroContainer}>
      <div className='realative min-h-screen flex flex-col items-center justify-center'>
        <div className="absolute top-20 z-20 ">
          <button className="new-button flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full shadow-sm hover:shadow-md border border-blue-100">
            <span className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">New</span>
            <span className="text-sm font-medium text-gray-700">See what's new in Parthly</span>
            <MdKeyboardArrowRight className="text-gray-500" size={20} />
          </button>
        </div>

        <div className="relative z-10 max-w-[98%] xl:max-w-[98%] mx-auto mt-8 px-4 sm:px-4 lg:px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1 text-center lg:text-left xl:me-44 max-w-lg">
              <h1 className="main-heading text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Personalized</span><span className="block text-blue-700">Career Guidance Roadmap</span>
              </h1>
              <p className="hero-paragraph mt-6 text-lg text-gray-500 md:text-xl">Get tailored career advice based on your skills, interests, and goals. Let Parthly guide you to your dream career.</p>
              <div className="hero-form mt-8">
                <form className="sm:flex justify-center lg:justify-start">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input id="email-address" name="email" type="email" autoComplete="email" required="" className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-700 focus:border-primary rounded-md bg-white/80 backdrop-blur-sm" placeholder="Enter your email" />
                  <button type="submit" className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Subscribe</button>
                </form>
                <p className="mt-3 text-sm text-gray-500">Subscribe to our newsletter for career tips and updates.</p>
              </div>
            </div>
            <div className="flex-1 w-full mt-0 lg:w-auto">
              <div className="relative w-full mt-2 rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm">
                <img src="/hero.png" alt="Career Guidance Illustration" className="hero-image w-full max-h-[600px] object-contain" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Hero;