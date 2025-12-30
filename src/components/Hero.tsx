import React, { useEffect, useState } from 'react';
import { Download, Mail, Facebook, Linkedin, Youtube, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const fullText = t('hero.title');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  // Easter egg
  useEffect(() => {
    console.log('%c🎯 Hero section loaded!', 'color: #00bfa5; font-weight: bold;');
    console.log('%c// assert(hero.isAwesome === true); ✓', 'color: #4ade80;');
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Code Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <pre className="font-mono text-xs leading-relaxed">
{`describe('Portfolio', () => {
  it('should impress visitors', () => {
    expect(skills).toBeGreat();
    expect(experience).toBeRelevant();
    expect(bugs).toHaveLength(0);
  });
});`}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-block mb-6 animate-fade-up">
            <div className="code-block text-left inline-block">
              <span className="text-muted-foreground">$</span>
              <span className="text-terminal-green ml-2">echo</span>
              <span className="text-primary ml-2">"{t('hero.greeting')}"</span>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4 animate-fade-up stagger-1">
            <span className="gradient-text">{t('hero.name')}</span>
          </h1>

          {/* Typed Title */}
          <div className="h-12 md:h-16 mb-6 animate-fade-up stagger-2">
            <p className="text-lg md:text-2xl text-muted-foreground font-mono">
              {typedText}
              <span className="terminal-cursor" />
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up stagger-3">
            {t('hero.description')}
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8 animate-fade-up stagger-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover-lift hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover-lift hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover-lift hover:text-primary transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up stagger-5">
            <Button
              size="lg"
              className="gradient-bg text-primary-foreground font-mono group animate-pulse-glow"
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              {t('hero.downloadCV')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-mono border-primary/50 hover:bg-primary/10"
              onClick={scrollToContact}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
