"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the video only renders on the client side
  }, []);

  return (
    <div className="relative min-h-screen">
      {isClient && (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="contact.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div
          className="bg-black bg-opacity-60 p-8 rounded-xl text-white text-center w-4/5 sm:w-3/5 md:w-1/2"
          style={{ maxWidth: '600px' }}
        >
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg mb-8 opacity-80">
            1106 [dot] sharma [at] gmail [dot] com
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:1106.sharma@gmail.com"
              className="text-white hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/sukritisharma02/"
              className="text-white hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/suxxmjz"
              className="text-white hover:text-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full text-white text-center py-4 text-sm">
        <p>&copy; 2025 Sukriti Sharma. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
