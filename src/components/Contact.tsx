'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-[#1E293B] text-center mb-4">
        Contact Us
      </h2>
      <p className="text-center text-[#E91E8C] text-lg font-semibold tracking-tight mb-20 px-4">
        Get in Touch
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-2xl text-[#1E293B] mb-6">
            Let&apos;s Connect
          </h3>
          <p className="text-[#6B4E9B] leading-relaxed mb-10">
            Have questions about our research or interested in collaboration? We&apos;d love to hear from you. 
            Reach out to our team for inquiries, feedback, or partnership opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 flex items-center justify-center text-xl bg-[#FFD700] border-3 border-black brutal-shadow-sm"
              >
                📧
              </div>
              <span className="text-[#1E293B] font-medium">focus.research@sliit.lk</span>
            </div>
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 flex items-center justify-center text-xl bg-[#E91E8C] border-3 border-black brutal-shadow-sm"
              >
                📍
              </div>
              <span className="text-[#1E293B] font-medium">SLIIT, Malabe, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 flex items-center justify-center text-xl bg-[#C490B8] border-3 border-black brutal-shadow-sm"
              >
                📱
              </div>
              <span className="text-[#1E293B] font-medium">+94 11 754 4801</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white p-10 border-4 border-black brutal-shadow-lg"
        >
          <div className="mb-8">
            <label className="block text-[#1E293B] font-bold mb-2 uppercase text-sm">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required
              className="w-full px-5 py-4 border-3 border-black font-poppins text-base transition-all focus:outline-none focus:ring-4 focus:ring-[#FFD700]"
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#1E293B] font-bold mb-2 uppercase text-sm">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              required
              className="w-full px-5 py-4 border-3 border-black font-poppins text-base transition-all focus:outline-none focus:ring-4 focus:ring-[#FFD700]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#1E293B] font-bold mb-2 uppercase text-sm">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your message..."
              rows={4}
              className="w-full px-5 py-4 border-3 border-black font-poppins text-base transition-all resize-none focus:outline-none focus:ring-4 focus:ring-[#FFD700]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 font-bebas text-xl tracking-wider text-white transition-all bg-[#E91E8C] border-3 border-black brutal-shadow hover:brutal-shadow-hover hover:-translate-x-1 hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
