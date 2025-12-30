import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  MousePointer2, 
  Cog, 
  Code2, 
  Globe, 
  Database, 
  Users 
} from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: MousePointer2,
      title: t('skills.manual'),
      description: t('skills.manualDesc'),
      level: 95,
    },
    {
      icon: Cog,
      title: t('skills.automation'),
      description: t('skills.automationDesc'),
      level: 90,
    },
    {
      icon: Code2,
      title: t('skills.javascript'),
      description: t('skills.javascriptDesc'),
      level: 85,
    },
    {
      icon: Globe,
      title: t('skills.api'),
      description: t('skills.apiDesc'),
      level: 92,
    },
    {
      icon: Database,
      title: t('skills.sql'),
      description: t('skills.sqlDesc'),
      level: 80,
    },
    {
      icon: Users,
      title: t('skills.agile'),
      description: t('skills.agileDesc'),
      level: 88,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-2">
            <span className="text-primary">&lt;</span>
            {t('about.title')}
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <p className="text-lg leading-relaxed mb-4">
                {t('about.description1')}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('about.description2')}
              </p>
            </div>

            {/* Fun Code Block */}
            <div className="code-block">
              <pre className="text-sm overflow-x-auto">
                <code>
                  <span className="text-muted-foreground">{t('about.funFact')}</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-mono mb-4">
              {t('skills.title')}
              <span className="text-muted-foreground text-sm ml-2">{t('skills.subtitle')}</span>
            </h3>
            
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="glass-card rounded-xl p-4 hover-lift group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-mono font-semibold">{skill.title}</h4>
                        <span className="text-sm text-primary font-mono">{skill.level}%</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
