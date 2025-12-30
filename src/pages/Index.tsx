import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Welcome easter egg in console
    console.log('%c' + `
    ╔═══════════════════════════════════════════════════╗
    ║                                                   ║
    ║   👋 Witaj w moim portfolio!                     ║
    ║                                                   ║
    ║   Widzę, że lubisz zaglądać do konsoli...        ║
    ║   Jako tester, doceniam to! 🔍                   ║
    ║                                                   ║
    ║   // expect(you).toBe('curious');                ║
    ║   // assert.isTrue(exploringConsole);            ║
    ║                                                   ║
    ║   Znajdziesz tu więcej easter eggów!              ║
    ║   Happy bug hunting! 🐛                          ║
    ║                                                   ║
    ╚═══════════════════════════════════════════════════╝
    `, 'color: #00bfa5; font-family: monospace;');

    console.log('%c⚠️ UWAGA: To jest środowisko produkcyjne!', 'color: #f59e0b; font-size: 14px; font-weight: bold;');
    console.log('%c// Żartuję! Testuj ile chcesz 😄', 'color: #666; font-style: italic;');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
