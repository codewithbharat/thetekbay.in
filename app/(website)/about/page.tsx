import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center md:p-8">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 md:p-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-indigo-600">The Tekno Times</span>, your premier destination for the latest in technology, innovation, and digital trends. Our mission is simple: to keep you informed, inspired, and ahead in the fast-paced world of tech.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          At <span className="font-semibold text-indigo-600">The Tekno Times</span>, we are a passionate team of tech enthusiasts, storytellers, and analysts who live and breathe technology. Whether it’s the newest gadgets, groundbreaking software, or the future of artificial intelligence, we bring you stories that matter.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
        <ul className="list-disc list-inside text-gray-700 text-base mb-6 space-y-2">
          <li>Breaking Tech News: Stay updated on the latest innovations and announcements from the tech world.</li>
          <li>In-Depth Reviews: Honest, detailed reviews of gadgets, apps, and software to help you make informed decisions.</li>
          <li>How-To Guides: Simplified tutorials and guides to navigate the complexities of technology.</li>
          <li>Tech Trends & Insights: Analysis of emerging trends shaping the future of industries and everyday life.</li>
          <li>Podcasts & Videos: Engage with our multimedia content for a deeper dive into tech stories.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          In a world flooded with information, <span className="font-semibold text-indigo-600">The Tekno Times</span> stands out by delivering reliable, engaging, and well-researched content. Our goal is not just to report news but to make technology meaningful and relevant to your life.
        </p>
        <div className="text-center mt-8">
        </div>
      </div>
    </div>
  );
};

export default About;
