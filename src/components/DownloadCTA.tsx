'use client';

export default function DownloadCTA() {
  return (
    <section 
      className="py-32 px-4 md:px-8 lg:px-16 text-white text-center relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]"
    >
      {/* Decorative circles */}
      <div className="absolute w-96 h-96 bg-white/5 rounded-full -top-24 -right-24" />
      <div className="absolute w-72 h-72 bg-white/5 rounded-full -bottom-12 -left-12" />

      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white mb-6 relative z-10">
        Download Now
      </h2>
      <p className="text-lg max-w-2xl mx-auto opacity-90 mb-12 relative z-10 px-6 leading-relaxed">
        Start your journey to peak productivity. Available on iOS, Android, and Web.
      </p>

      <div className="flex flex-wrap gap-6 justify-center relative z-10">
        <a 
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#2563EB] font-bold text-lg transition-all border-4 border-black brutal-shadow-lg hover:brutal-shadow-hover hover:-translate-x-1 hover:-translate-y-1"
        >
          <span className="text-2xl">🍎</span> App Store
        </a>
        <a 
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFD700] text-black font-bold text-lg transition-all border-4 border-black brutal-shadow-lg hover:brutal-shadow-hover hover:-translate-x-1 hover:-translate-y-1"
        >
          <span className="text-2xl">🤖</span> Google Play
        </a>
        <a 
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#E91E8C] text-white font-bold text-lg transition-all border-4 border-white brutal-shadow-lg hover:translate-x-1 hover:translate-y-1"
          style={{ boxShadow: '8px 8px 0px #fff' }}
        >
          <span className="text-2xl">🌐</span> Web App
        </a>
      </div>
    </section>
  );
}
