import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Github, ShoppingCart, Building2, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { t } = useLanguage();

  // Easter egg
  React.useEffect(() => {
    console.log('%c📦 Projects loaded!', 'color: #00bfa5;');
    console.log('%c// expect(projects.length).toBeGreaterThan(0); ✓', 'color: #4ade80;');
    console.log('%c// All tests passed! No bugs found... yet 🔍', 'color: #666; font-style: italic;');
  }, []);

  const projects = [
    {
      icon: ShoppingCart,
      title: t('project1.title'),
      description: t('project1.description'),
      technologies: t('project1.technologies'),
      scope: t('project1.scope'),
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Building2,
      title: t('project2.title'),
      description: t('project2.description'),
      technologies: t('project2.technologies'),
      scope: t('project2.scope'),
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: HeartPulse,
      title: t('project3.title'),
      description: t('project3.description'),
      technologies: t('project3.technologies'),
      scope: t('project3.scope'),
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-2">
            <span className="text-primary">{'{'}</span>
            {t('projects.title')}
            <span className="text-primary">{'}'}</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-mono mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    {t('projects.technologies')}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.split(', ').map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scope */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    {t('projects.scope')}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.scope}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="font-mono text-xs">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="font-mono text-xs">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    {t('projects.viewMore')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
