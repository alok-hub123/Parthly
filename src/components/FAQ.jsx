import React, { useState, useRef } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqSectionRef = useRef(null); 
  const faqItemsRef = useRef([]); 

  const faqData = [
    {
      question: "How does Parthly work?",
      answer: "Parthly uses AI to analyze your skills, interests, and career goals to create a personalized career roadmap. We combine your profile data with current market trends to provide accurate career recommendations.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security seriously. All your personal information is encrypted and stored securely. We never share your data with third parties without your consent.",
    },
    {
      question: "How often is the career guidance updated?",
      answer: "Our career guidance is continuously updated based on market trends and your progress. You'll receive regular updates and recommendations to keep you on track with your career goals.",
    },
    {
      question: "Can I change my career path later?",
      answer: "Absolutely! Parthly is designed to be flexible. You can update your profile and preferences at any time, and we'll adjust your career roadmap accordingly.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including personalized career guidance, skill development resources, and regular progress tracking. Our team is also available to answer any questions you may have.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useGSAP(() => {
    const section = faqSectionRef.current;
    const heading = section.querySelector('.faq-heading'); 
    const paragraph = section.querySelector('.faq-paragraph'); 
    const items = faqItemsRef.current; 

    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', 
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'power3.out' }
    });

    tl.from(heading, { opacity: 0, y: 30, duration: 0.6 });
    tl.from(paragraph, { opacity: 0, y: 20, duration: 0.5 }, '-=0.4'); // Overlap with heading animation

    // Animation for FAQ items with stagger
    gsap.from(items, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out',
      stagger: 0.15, // Stagger the animation for each FAQ item
      scrollTrigger: {
        trigger: section, 
        start: 'top 75%', 
        toggleActions: 'play none none reverse',
      },
    });

  }, { scope: faqSectionRef }); 

  return (
    <div ref={faqSectionRef} className="bg-white py-16"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="faq-heading text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="faq-paragraph mt-4 text-lg text-gray-500">Find answers to common questions about Parthly</p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqItemsRef.current[index] = el)}
              >
                <button
                  className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-700 focus-visible:ring-opacity-75"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <MdKeyboardArrowUp className="h-5 w-5 text-blue-700" />
                  ) : (
                    <MdKeyboardArrowDown className="h-5 w-5 text-blue-700" />
                  )}
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-content-${index}`}
                    className="px-4 pt-4 pb-2 text-sm text-gray-500"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;