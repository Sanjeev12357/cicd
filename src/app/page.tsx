'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-200 p-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-bold text-pink-600 mb-6"
      >
        🎉 Happy Birthday ! 🎂
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8"
      >
        Wishing you a day filled with love, laughter, and everything that makes you smile. May your year ahead be as amazing as you are!
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mb-8"
      >
        
      </motion.div>

      <motion.a
        href="https://www.instagram.com/" // Or any link
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold transition"
      >
        Send Pradeep Some Love 💌
      </motion.a>
    </div>
  );
}
