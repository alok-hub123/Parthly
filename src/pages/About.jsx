import React, { useRef } from 'react';
import { RxLightningBolt } from "react-icons/rx";
import { CgEye } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function About() {
  const sectionRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const mainParagraphRef = useRef(null);
  const missionCardRef = useRef(null);
  const visionCardRef = useRef(null);
  const valuesHeadingRef = useRef(null);
  const valuesCardsContainerRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const mainHeading = mainHeadingRef.current;
    const mainParagraph = mainParagraphRef.current;
    const missionCard = missionCardRef.current;
    const visionCard = visionCardRef.current;
    const valuesHeading = valuesHeadingRef.current;
    const valuesCards = valuesCardsContainerRef.current.children;

    const mainTextTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power3.out', duration: 0.8 }
    });
    mainTextTimeline.from(mainHeading, { y: 50, opacity: 0 });
    mainTextTimeline.from(mainParagraph, { y: 30, opacity: 0 }, '-=0.6');

    gsap.from([missionCard, visionCard], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: missionCard,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(valuesHeading, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: valuesHeading,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(valuesCards, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: valuesCardsContainerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="max-w-7xl mt-4 mb-4 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 ref={mainHeadingRef} className="text-3xl font-extrabold text-gray-900 sm:text-4xl" >About Parthly</h2>
        <p ref={mainParagraphRef} className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto" >We're on a mission to revolutionize career guidance through AI-powered personalized roadmaps.</p>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div ref={missionCardRef} className="bg-white rounded-2xl shadow-lg p-8" >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <RxLightningBolt className="h-6 w-6 " />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
              </div>
            </div>
            <p className="mt-4 text-base text-gray-500">To empower individuals with personalized career guidance that helps them discover their true potential and achieve their professional goals through AI-driven insights and actionable roadmaps.</p>
          </div>
          <div ref={visionCardRef} className="bg-white rounded-2xl shadow-lg p-8" >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                  <CgEye className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
              </div>
            </div>
            <p className="mt-4 text-base text-gray-500">To become the world's leading career guidance platform, where every individual can access personalized, data-driven career advice that helps them build fulfilling and successful professional lives.</p>
          </div>
        </div>
        <div className="mt-16">
          <h3 ref={valuesHeadingRef} className="text-2xl font-bold text-gray-900 text-center" >Our Core Values</h3>
          <div ref={valuesCardsContainerRef} className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md p-6" >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                    <BsPerson className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Personalization</h4>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-500">We believe in tailored solutions that address individual needs and aspirations.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6" >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                    <RxLightningBolt className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Innovation</h4>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-500">We continuously evolve our technology to provide cutting-edge career guidance solutions.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6" >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                    <IoShieldCheckmarkOutline className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Empowerment</h4>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-500">We equip individuals with the tools and knowledge they need to take control of their careers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;