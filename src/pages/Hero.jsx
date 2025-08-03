import React from 'react';

const Hero = () => (
  <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 text-center">
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      Разработка мобильных приложений на Flutter
    </h1>
    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
      Создаю быстрые, современные и нативные приложения для Android и iOS. Без шаблонов. Под ключ.
    </p>
    <a
      href="https://t.me/yourtelegram"
      className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white hover:scale-105 transition"
    >
      Оставить заявку
    </a>
  </section>
);

export default Hero;
