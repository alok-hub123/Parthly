import React, { useState, useEffect, useRef } from 'react';
import { BsPerson } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FiClipboard } from "react-icons/fi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HowItWorks = () => {

  const [steps, setSteps] = useState("step1");
  const [src, setSrc] = useState("user.svg");
  const [alt, setAlt] = useState("Profile Creation");

  const sectionRef = useRef(null); 
  const headingRef = useRef(null); 
  const paragraphRef = useRef(null); 
  const stepsContainerRef = useRef(null); 
  const imageContainerRef = useRef(null); 

  useEffect(() => {
    switch (steps) {
      case "step1":
        setSrc("user.svg");
        setAlt("Profile Creation");
        break;
      case "step2":
        setSrc("data.svg");
        setAlt("Data Analysis");
        break;
      case "step3":
        setSrc("matching.svg");
        setAlt("Career Matching");
        break;
      case "step4":
        setSrc("roadmap.svg");
        setAlt("Personalized Roadmap");
        break;
      default:
        break;
    }
  }, [steps]);

  useGSAP(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const stepsContainer = stepsContainerRef.current;
    const imageContainer = imageContainerRef.current;

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

    gsap.from(stepsContainer, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%', 
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(imageContainer, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%', 
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(imageContainer.querySelector('img'), {
         opacity: 0,
         duration: 0.5,
         ease: 'power2.out'
    });


  }, { scope: sectionRef, dependencies: [steps] });

  return (
    <div ref={sectionRef} className="bg-white py-16"> 
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 ref={headingRef} className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2> {/* Assign ref */}
          <p ref={paragraphRef} className="mt-3 text-lg text-gray-500">Follow these simple steps to get your personalized career guidance</p> {/* Assign ref */}
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div ref={stepsContainerRef} className="lg:col-span-2 space-y-4"> 
              <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg cursor-pointer ${steps == "step1" && "ring-2 ring-blue-700"}`} onClick={() => setSteps("step1")}>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${steps == "step1" ? "bg-blue-700 text-white" : "bg-blue-700/10 text-blue-700"}`}>
                      <BsPerson className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold text-blue-700">Step 1: Profile Creation</h3>
                    <p className="mt-2 text-base text-gray-500">Create your profile by sharing your skills, interests, and career goals. This helps us understand your unique background and aspirations.</p>
                  </div>
                </div>
              </div>
              <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg cursor-pointer ${steps == "step2" && "ring-2 ring-blue-700"}`} onClick={() => setSteps("step2")}>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${steps == "step2" ? "bg-blue-700 text-white" : "bg-blue-700/10 text-blue-700"}`}>
                      <BsBarChart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold text-gray-900">Step 2: Data Analysis</h3>
                    <p className="mt-2 text-base text-gray-500">Our AI analyzes your profile data along with current market trends to identify the best career paths for you.</p>
                  </div>
                </div>
              </div>
              <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg cursor-pointer ${steps == "step3" && "ring-2 ring-blue-700"}`} onClick={() => setSteps("step3")}>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${steps == "step3" ? "bg-blue-700 text-white" : "bg-blue-700/10 text-blue-700"}`}>
                      <CiSearch className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold text-gray-900">Step 3: Career Matching</h3>
                    <p className="mt-2 text-base text-gray-500">We match your profile with the most suitable career paths based on your skills, interests, and market demand.</p>
                  </div>
                </div>
              </div>
              <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg cursor-pointer ${steps == "step4" && "ring-2 ring-blue-700"}`} onClick={() => setSteps("step4")}>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${steps == "step4" ? "bg-blue-700 text-white" : "bg-blue-700/10 text-blue-700"}`}>
                      <FiClipboard className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold text-gray-900">Step 4: Personalized Roadmap</h3>
                    <p className="mt-2 text-base text-gray-500">Receive a detailed career roadmap with actionable steps, resources, and milestones to help you achieve your career goals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={imageContainerRef} className="lg:col-span-1 flex items-center">
              <div className="w-full h-full min-h-[400px]">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                  <div className="w-full h-full rounded-xl">
                    <img src={src} alt={alt} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;