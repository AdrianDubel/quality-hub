import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Coffee, Terminal } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Easter egg on mount
  React.useEffect(() => {
    console.log('%c' + t('footer.easterEgg'), 'color: #fbbf24; font-style: italic;');
    console.log('%c// You found all the easter eggs! You are a true QA! 🏆', 'color: #a855f7;');
  }, [t]);

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">
              <span className="text-primary">&lt;</span>
              QA Portfolio
              <span className="text-primary">/&gt;</span>
            </span>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
            {t('footer.madeWith')} 
            <Heart className="w-4 h-4 text-destructive inline animate-pulse" /> 
            {t('footer.and')} 
            <Coffee className="w-4 h-4 text-warning-yellow inline" /> 
            {t('footer.coffee')}
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © {currentYear} {t('footer.rights')}
          </p>
        </div>

        {/* Hidden Easter Egg Comment */}
        {/* 
          // Hey there, curious developer! 👀
          // You found the hidden comment!
          // Here's a virtual high-five: ✋
          // console.log("Achievement unlocked: Code Explorer!");
        */}
      </div>
    </footer>
  );
};

export default Footer;
