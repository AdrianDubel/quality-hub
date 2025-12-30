import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pl: {
    // Navigation
    'nav.home': 'Strona główna',
    'nav.about': 'O mnie',
    'nav.projects': 'Projekty',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.greeting': 'Cześć, jestem',
    'hero.name': 'Jan Kowalski',
    'hero.title': 'Software Tester | Quality Advocate | Automation Enthusiast',
    'hero.description': 'Pasjonat jakości oprogramowania z 5+ letnim doświadczeniem w testowaniu manualnym i automatycznym. Pomagam zespołom dostarczać bezbłędne produkty.',
    'hero.downloadCV': 'Pobierz CV',
    'hero.contact': 'Skontaktuj się',
    
    // About
    'about.title': 'O mnie',
    'about.subtitle': '// kim jestem i co robię',
    'about.description1': 'Jestem pasjonatem jakości oprogramowania z ponad 5-letnim doświadczeniem w branży IT. Specjalizuję się w testowaniu manualnym i automatycznym, ze szczególnym naciskiem na testy API i E2E.',
    'about.description2': 'Moje podejście łączy dokładność analityczną z kreatywnością w znajdowaniu bugów. Wierzę, że dobry tester to nie tylko osoba znajdująca błędy, ale partner w procesie tworzenia wysokiej jakości oprogramowania.',
    'about.funFact': '// console.log("Lubię znajdować bugi zanim znajdą je użytkownicy! 🐛");',
    
    // Skills
    'skills.title': 'Umiejętności',
    'skills.subtitle': '// mój stack technologiczny',
    'skills.manual': 'Testy manualne',
    'skills.manualDesc': 'Eksploracyjne, funkcjonalne, regresyjne',
    'skills.automation': 'Testy automatyczne',
    'skills.automationDesc': 'Playwright, Cypress, Selenium',
    'skills.javascript': 'JavaScript/TypeScript',
    'skills.javascriptDesc': 'Frameworki testowe, Node.js',
    'skills.api': 'API Testing',
    'skills.apiDesc': 'Postman, REST Assured, Newman',
    'skills.sql': 'SQL',
    'skills.sqlDesc': 'PostgreSQL, MySQL, weryfikacja danych',
    'skills.agile': 'Agile / Scrum',
    'skills.agileDesc': 'Jira, planowanie sprintów, refinement',
    
    // Projects
    'projects.title': 'Projekty',
    'projects.subtitle': '// case studies z moich projektów',
    'projects.viewMore': 'Zobacz więcej',
    'projects.technologies': 'Technologie',
    'projects.scope': 'Zakres testów',
    
    'project1.title': 'E-commerce Platform Testing',
    'project1.description': 'Kompleksowe testy platformy e-commerce obsługującej 100k+ użytkowników dziennie. Wdrożenie automatyzacji testów E2E oraz API.',
    'project1.technologies': 'Playwright, TypeScript, GitHub Actions',
    'project1.scope': 'Testy E2E, API, wydajnościowe, regresyjne',
    
    'project2.title': 'Banking App QA',
    'project2.description': 'Testowanie aplikacji mobilnej banku z naciskiem na bezpieczeństwo i zgodność z regulacjami. Integracja z systemami płatności.',
    'project2.technologies': 'Appium, Cypress, Postman',
    'project2.scope': 'Testy bezpieczeństwa, integracyjne, UX',
    
    'project3.title': 'Healthcare System Testing',
    'project3.description': 'QA dla systemu zarządzania danymi pacjentów. Kluczowe znaczenie miała walidacja danych i zgodność z RODO.',
    'project3.technologies': 'Selenium, JMeter, SQL',
    'project3.scope': 'Testy zgodności, wydajnościowe, bazodanowe',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': '// porozmawiajmy o jakości',
    'contact.name': 'Imię i nazwisko',
    'contact.email': 'Email',
    'contact.message': 'Wiadomość',
    'contact.send': 'Wyślij wiadomość',
    'contact.sending': 'Wysyłanie...',
    'contact.success': 'Wiadomość wysłana!',
    'contact.info': 'Dane kontaktowe',
    'contact.location': 'Warszawa, Polska',
    'contact.availability': 'Dostępny na projekty freelance i współpracę stałą.',
    
    // Footer
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.madeWith': 'Zrobione z',
    'footer.and': 'i dużą ilością',
    'footer.coffee': 'kawy',
    'footer.easterEgg': '// TODO: Dodać więcej easter eggów 🥚',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Jan Kowalski',
    'hero.title': 'Software Tester | Quality Advocate | Automation Enthusiast',
    'hero.description': 'Quality assurance enthusiast with 5+ years of experience in manual and automated testing. I help teams deliver flawless products.',
    'hero.downloadCV': 'Download CV',
    'hero.contact': 'Get in touch',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': '// who I am and what I do',
    'about.description1': 'I\'m a software quality enthusiast with over 5 years of experience in the IT industry. I specialize in manual and automated testing, with a strong focus on API and E2E tests.',
    'about.description2': 'My approach combines analytical precision with creativity in bug hunting. I believe a good tester is not just someone who finds bugs, but a partner in creating high-quality software.',
    'about.funFact': '// console.log("I love finding bugs before users do! 🐛");',
    
    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': '// my tech stack',
    'skills.manual': 'Manual Testing',
    'skills.manualDesc': 'Exploratory, functional, regression',
    'skills.automation': 'Test Automation',
    'skills.automationDesc': 'Playwright, Cypress, Selenium',
    'skills.javascript': 'JavaScript/TypeScript',
    'skills.javascriptDesc': 'Testing frameworks, Node.js',
    'skills.api': 'API Testing',
    'skills.apiDesc': 'Postman, REST Assured, Newman',
    'skills.sql': 'SQL',
    'skills.sqlDesc': 'PostgreSQL, MySQL, data verification',
    'skills.agile': 'Agile / Scrum',
    'skills.agileDesc': 'Jira, sprint planning, refinement',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': '// case studies from my work',
    'projects.viewMore': 'View more',
    'projects.technologies': 'Technologies',
    'projects.scope': 'Test scope',
    
    'project1.title': 'E-commerce Platform Testing',
    'project1.description': 'Comprehensive testing of an e-commerce platform serving 100k+ daily users. Implementation of E2E and API test automation.',
    'project1.technologies': 'Playwright, TypeScript, GitHub Actions',
    'project1.scope': 'E2E, API, performance, regression testing',
    
    'project2.title': 'Banking App QA',
    'project2.description': 'Mobile banking app testing with focus on security and regulatory compliance. Payment systems integration.',
    'project2.technologies': 'Appium, Cypress, Postman',
    'project2.scope': 'Security, integration, UX testing',
    
    'project3.title': 'Healthcare System Testing',
    'project3.description': 'QA for patient data management system. Critical focus on data validation and GDPR compliance.',
    'project3.technologies': 'Selenium, JMeter, SQL',
    'project3.scope': 'Compliance, performance, database testing',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': '// let\'s talk about quality',
    'contact.name': 'Full name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent!',
    'contact.info': 'Contact info',
    'contact.location': 'Warsaw, Poland',
    'contact.availability': 'Available for freelance projects and permanent collaboration.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.and': 'and lots of',
    'footer.coffee': 'coffee',
    'footer.easterEgg': '// TODO: Add more easter eggs 🥚',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pl']] || key;
  };

  // Easter egg in console
  console.log('%c🔍 Widzę, że lubisz zaglądać do konsoli!', 'color: #00bfa5; font-size: 14px; font-weight: bold;');
  console.log('%c// Jako tester, to jest dokładnie to, co powinieneś robić! 👏', 'color: #666; font-style: italic;');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
