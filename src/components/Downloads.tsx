'use client';

import { useEffect, useRef } from 'react';

const downloads = [
  {
    icon: '📋',
    title: 'Project Proposal',
    description: 'Complete project proposal with research objectives and methodology',
    buttonText: 'Download PDF',
    link: '#'
  },
  {
    icon: '📊',
    title: 'Progress Reports',
    description: 'Milestone reports and presentation slides',
    buttonText: 'Download ZIP',
    link: '#'
  },
  {
    icon: '📄',
    title: 'Research Paper',
    description: 'Published research findings and analysis',
    buttonText: 'Download PDF',
    link: '#'
  },
  {
    icon: '📱',
    title: 'App Demo',
    description: 'Interactive prototype demonstration',
    buttonText: 'View Demo',
    link: '#'
  }
];

export default function Downloads() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="downloads" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-[#1E293B] text-center mb-4">
        Downloads
      </h2>
      <p className="text-center text-[#E91E8C] text-lg font-semibold tracking-tight mb-20 px-4">
        Access Our Research Documents
      </p>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {downloads.map((item, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="w-64 rounded-2xl p-8 text-center transition-all duration-700 ease-out opacity-0 translate-y-8 hover:shadow-lg hover:border-[#E91E8C] border border-gray-200 bg-white"
            style={{
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div 
              className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl mx-auto mb-6 bg-[#F0C0D8]/30"
            >
              {item.icon}
            </div>

            <h3 className="font-bold text-xl text-[#1E293B] mb-3">
              {item.title}
            </h3>
            
            <p className="text-[#64748B] text-sm mb-8 leading-relaxed">
              {item.description}
            </p>

            <a 
              href={item.link}
              className="inline-block px-6 py-3 bg-[#E91E8C] text-white rounded-lg font-semibold hover:bg-[#D01675] transition-all shadow-sm hover:shadow-md"
            >
              {item.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
