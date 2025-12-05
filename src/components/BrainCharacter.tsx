'use client';

import { useEffect, useRef } from 'react';

export default function BrainCharacter() {
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!brainRef.current || !leftPupilRef.current || !rightPupilRef.current) return;
      
      const rect = brainRef.current.getBoundingClientRect();
      const brainCenterX = rect.left + rect.width / 2;
      const brainCenterY = rect.top + rect.height / 2;
      
      // Calculate the angle from brain center to mouse position
      const deltaX = e.clientX - brainCenterX;
      const deltaY = e.clientY - brainCenterY;
      const angle = Math.atan2(deltaY, deltaX);
      
      // Calculate distance with proper clamping
      const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxPupilMovement = 6;
      const movementDistance = Math.min(maxPupilMovement, distanceFromCenter / 80);
      
      const translateX = Math.cos(angle) * movementDistance;
      const translateY = Math.sin(angle) * movementDistance;
      
      leftPupilRef.current.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`;
      rightPupilRef.current.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
      <div 
        ref={brainRef}
        className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative animate-brain-bounce"
      >
        {/* Crosshair Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-[3px] border-[#6B4E9B]/20 rounded-full" />
          <div className="absolute w-full h-[3px] bg-[#6B4E9B]/30 top-1/2 left-0 -translate-y-1/2" />
          <div className="absolute w-[3px] h-full bg-[#6B4E9B]/30 left-1/2 top-0 -translate-x-1/2" />
        </div>

        {/* Main Brain Body */}
        <div 
          className="w-full h-full relative"
          style={{
            background: 'linear-gradient(135deg, #F0C0D8 0%, #E8B4D8 20%, #D4A5C9 40%, #C490B8 70%, #B080A8 100%)',
            borderRadius: '45% 52% 48% 55% / 55% 48% 52% 45%',
            boxShadow: `
              inset -25px -25px 50px rgba(150, 100, 130, 0.4),
              inset 25px 25px 50px rgba(255, 220, 240, 0.5),
              0 40px 80px rgba(107, 78, 155, 0.35)
            `
          }}
        >
          {/* Brain Gyri - Realistic Wavy Folds */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" style={{ opacity: 0.5 }}>
            {/* Left Hemisphere - Wavy Lines */}
            <path 
              d="M20 30 Q25 25, 30 30 T40 30 T50 30 T60 30" 
              fill="none" 
              stroke="#9060A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M15 45 Q20 40, 25 45 T35 45 T45 45 T55 45 T65 45" 
              fill="none" 
              stroke="#A070A8" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path 
              d="M20 60 Q25 55, 30 60 T40 60 T50 60 T60 60 T70 60" 
              fill="none" 
              stroke="#9060A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M15 75 Q20 70, 25 75 T35 75 T45 75 T55 75" 
              fill="none" 
              stroke="#A870B0" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path 
              d="M10 90 Q15 85, 20 90 T30 90 T40 90 T50 90 T60 90" 
              fill="none" 
              stroke="#9060A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M15 105 Q20 100, 25 105 T35 105 T45 105 T55 105" 
              fill="none" 
              stroke="#A070A8" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path 
              d="M20 120 Q25 115, 30 120 T40 120 T50 120 T60 120" 
              fill="none" 
              stroke="#9868A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M25 135 Q30 130, 35 135 T45 135 T55 135 T65 135" 
              fill="none" 
              stroke="#A070A8" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path 
              d="M30 150 Q35 145, 40 150 T50 150 T60 150 T70 150" 
              fill="none" 
              stroke="#9060A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M40 165 Q45 160, 50 165 T60 165 T70 165" 
              fill="none" 
              stroke="#A870B0" 
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Right Hemisphere - Wavy Lines */}
            <path 
              d="M140 30 Q145 25, 150 30 T160 30 T170 30 T180 30" 
              fill="none" 
              stroke="#9060A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M135 45 Q140 40, 145 45 T155 45 T165 45 T175 45 T185 45" 
              fill="none" 
              stroke="#A070A8" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path 
              d="M130 60 Q135 55, 140 60 T150 60 T160 60 T170 60 T180 60" 
              fill="none" 
              stroke="#9060A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M145 75 Q150 70, 155 75 T165 75 T175 75 T185 75" 
              fill="none" 
              stroke="#A870B0" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path 
              d="M140 90 Q145 85, 150 90 T160 90 T170 90 T180 90 T190 90" 
              fill="none" 
              stroke="#9060A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M145 105 Q150 100, 155 105 T165 105 T175 105 T185 105" 
              fill="none" 
              stroke="#A070A8" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path 
              d="M140 120 Q145 115, 150 120 T160 120 T170 120 T180 120" 
              fill="none" 
              stroke="#9868A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M135 135 Q140 130, 145 135 T155 135 T165 135 T175 135" 
              fill="none" 
              stroke="#A070A8" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path 
              d="M130 150 Q135 145, 140 150 T150 150 T160 150 T170 150" 
              fill="none" 
              stroke="#9060A0" 
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path 
              d="M130 165 Q135 160, 140 165 T150 165 T160 165" 
              fill="none" 
              stroke="#A870B0" 
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Central Sulcus - Vertical Division */}
            <path 
              d="M100 20 Q98 40, 100 60 T100 80 T100 100 T100 120 T100 140 T100 160" 
              fill="none" 
              stroke="#8050A0" 
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* Additional 3D depth shadows for gyri */}
          <div 
            className="absolute inset-0 rounded-[45%_52%_48%_55%/55%_48%_52%_45%]"
            style={{
              background: `
                radial-gradient(ellipse 30% 20% at 25% 30%, rgba(160, 112, 160, 0.3) 0%, transparent 70%),
                radial-gradient(ellipse 25% 18% at 70% 25%, rgba(160, 112, 160, 0.25) 0%, transparent 70%),
                radial-gradient(ellipse 28% 22% at 40% 60%, rgba(160, 112, 160, 0.2) 0%, transparent 70%),
                radial-gradient(ellipse 22% 16% at 75% 65%, rgba(160, 112, 160, 0.25) 0%, transparent 70%)
              `
            }}
          />

          {/* Highlight on top */}
          <div 
            className="absolute top-[5%] left-[15%] w-[30%] h-[20%] rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 70%)',
              filter: 'blur(10px)'
            }}
          />

          {/* Eyes Container */}
          <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 flex gap-4 md:gap-6 lg:gap-8">
            {/* Left Eye */}
            <div 
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full relative"
              style={{
                boxShadow: 'inset 0 -5px 15px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <div 
                ref={leftPupilRef}
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #4A3A3A, #1A1A1A)'
                }}
              >
                <div className="absolute top-1 left-1 md:top-1.5 md:left-1.5 w-2 h-2 md:w-3 md:h-3 bg-white/80 rounded-full" />
              </div>
            </div>
            
            {/* Right Eye */}
            <div 
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-full relative"
              style={{
                boxShadow: 'inset 0 -5px 15px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <div 
                ref={rightPupilRef}
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #4A3A3A, #1A1A1A)'
                }}
              >
                <div className="absolute top-1 left-1 md:top-1.5 md:left-1.5 w-2 h-2 md:w-3 md:h-3 bg-white/80 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Legs */}
        <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex gap-12 md:gap-16 lg:gap-20">
          <div 
            className="w-2.5 h-10 md:w-3 md:h-12 lg:w-3.5 lg:h-14 rounded-b-lg animate-leg-walk"
            style={{
              background: 'linear-gradient(180deg, #E8A0B0, #D080A0)'
            }}
          />
          <div 
            className="w-2.5 h-10 md:w-3 md:h-12 lg:w-3.5 lg:h-14 rounded-b-lg animate-leg-walk"
            style={{
              background: 'linear-gradient(180deg, #E8A0B0, #D080A0)',
              animationDelay: '0.5s'
            }}
          />
        </div>
      </div>
    </div>
  );
}
