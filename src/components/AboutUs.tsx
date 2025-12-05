'use client';

import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    emoji: '👨‍🔬',
    name: 'Team Member 1',
    role: 'Project Lead & ML Engineer',
    bio: 'Specializing in machine learning algorithms for behavioral prediction and cognitive modeling.'
  },
  {
    emoji: '👩‍💻',
    name: 'Team Member 2',
    role: 'Full Stack Developer',
    bio: 'Expert in building scalable applications with React Native and cloud infrastructure.'
  },
  {
    emoji: '👨‍🎨',
    name: 'Team Member 3',
    role: 'UX/UI Designer',
    bio: 'Creating intuitive and engaging user experiences backed by cognitive psychology principles.'
  },
  {
    emoji: '👩‍🔬',
    name: 'Team Member 4',
    role: 'Research Analyst',
    bio: 'Conducting user studies and analyzing behavioral data to validate our hypotheses.'
  }
];

export default function AboutUs() {
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
    <section 
      id="about" 
      className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50"
    >
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-[#1E293B] text-center mb-4">
        About Us
      </h2>
      <p className="text-center text-[#E91E8C] text-lg font-semibold tracking-tight mb-20 px-4">
        Meet Our Team
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="bg-white border-4 border-black p-8 text-center transition-all duration-700 ease-out opacity-0 translate-y-8 brutal-shadow hover:brutal-shadow-hover hover:-translate-x-1 hover:-translate-y-1 relative overflow-hidden"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-[#E91E8C]" />

            {/* Avatar */}
            <div 
              className="w-28 h-28 mx-auto mb-6 flex items-center justify-center text-5xl relative z-10 border-4 border-black bg-[#FFD700]"
            >
              {member.emoji}
            </div>

            <h3 className="font-bebas text-xl text-[#1E293B] mb-2 uppercase">
              {member.name}
            </h3>
            
            <p className="text-[#E91E8C] text-sm font-bold mb-5 uppercase">
              {member.role}
            </p>

            <p className="text-[#64748B] text-sm leading-relaxed font-medium">
              {member.bio}
            </p>
          </div>
        ))}
      </div>

      {/* Supervisor */}
      <div className="text-center mt-20 px-4">
        <div className="inline-block bg-[#FFD700] border-4 border-black brutal-shadow px-12 py-8">
          <h3 className="font-bebas text-2xl text-[#1E293B] mb-3 uppercase">
            Supervisor
          </h3>
          <p className="text-[#1E293B] mb-2 font-bold">Dr. [Supervisor Name]</p>
          <p className="text-[#E91E8C] text-sm font-bold uppercase">Department of Computer Science, SLIIT</p>
        </div>
      </div>
    </section>
  );
}
