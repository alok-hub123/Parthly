import React, { useRef } from 'react';
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsBarChart } from "react-icons/bs";
import { FiClipboard } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WhyChooseParthly = () => {

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const cardsContainer = cardsContainerRef.current;

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power3.out' }
    });

    textTimeline.from(heading, { y: 30, opacity: 0, duration: 0.8 });
    textTimeline.from(paragraph, { y: 20, opacity: 0, duration: 0.7 }, '-=0.5');

    gsap.from(cardsContainer.children, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: cardsContainer,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 ref={headingRef} className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Choose Parthly</h2>
          <p ref={paragraphRef} className="mt-4 text-lg text-gray-500">We provide the tools and guidance you need to make informed career decisions</p>
        </div>
        <div ref={cardsContainerRef} className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
              <HiOutlineLightBulb className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Personalized Guidance</h3>
            <p className="mt-2 text-base text-gray-500">Get career advice tailored specifically to your skills, interests, and goals.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
              <BsBarChart className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Data-Driven Insights</h3>
            <p className="mt-2 text-base text-gray-500">Our AI analyzes market trends and your profile to provide accurate career recommendations.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
              <FiClipboard className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Actionable Roadmap</h3>
            <p className="mt-2 text-base text-gray-500">Receive a clear, step-by-step plan with milestones and resources to achieve your career goals.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
              <HiOutlineSupport className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Continuous Support</h3>
            <p className="mt-2 text-base text-gray-500">Get ongoing guidance and updates as you progress through your career journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseParthly;