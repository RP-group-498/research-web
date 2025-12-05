'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500 ${
        loading ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{ background: '#6B4E9B' }}
    >
      <div 
        className="w-24 h-24 animate-preloader-pulse"
        style={{
          background: 'linear-gradient(135deg, #D4A5C9, #E91E8C)',
          borderRadius: '45% 52% 48% 55% / 55% 48% 52% 45%'
        }}
      />
    </div>
  );
}
