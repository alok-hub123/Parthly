import React, { useRef } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Contact() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const formRef = useRef(null);
  const contactBlocksRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const textContainer = textContainerRef.current;
    const form = formRef.current;
    const contactBlocks = contactBlocksRef.current.children;

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power3.out', duration: 0.8 }
    });
    textTimeline.from(textContainer.children, { y: 30, opacity: 0, stagger: 0.2 });

    gsap.from(form, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: form,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(contactBlocks, {
      y: 50,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: contactBlocksRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef}>
      <div className="bg-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div ref={textContainerRef} className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-500">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
            <form ref={formRef} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-700 focus:border-blue-700 sm:text-sm" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-700 focus:border-blue-700 sm:text-sm" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" name="subject" id="subject" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-700 focus:border-blue-700 sm:text-sm" placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-700 focus:border-blue-700 sm:text-sm" placeholder="Your message"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-700 hover:bg-blue-700/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Send Message</button>
              </div>
            </form>
          </div>
          <div ref={contactBlocksRef} className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white mx-auto">
                <CiMail className="h-6 w-6" fill="currentColor" strokeWidth={1} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">parthindustries000@gmail.com</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white mx-auto">
                <CiLocationOn className="h-6 w-6" fill="currentColor" strokeWidth={1}/>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Location</h3>
              <p className="mt-2 text-base text-gray-500">Mumbai, Maharashtra, India</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white mx-auto">
                <IoShareSocialOutline className="h-6 w-6 " fill="currentColor" strokeWidth={1}/>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Follow Us</h3>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-700">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-6 w-6" fill="currentColor" />
                </a>
                <a href="https://x.com/ParthlyIn" className="text-gray-400 hover:text-black">
                  <span className="sr-only">Twitter</span>
                  <FaSquareXTwitter className="h-6 w-6" fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/parthly.in/" className="text-gray-400 hover:text-pink-600">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;