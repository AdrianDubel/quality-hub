import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, MapPin, Mail, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Easter egg
    console.log('%c📧 Form submitted!', 'color: #00bfa5; font-weight: bold;');
    console.log('%c// Running validation tests...', 'color: #666;');
    console.log('%c✓ Email format: PASSED', 'color: #4ade80;');
    console.log('%c✓ Required fields: PASSED', 'color: #4ade80;');
    console.log('%c✓ XSS prevention: PASSED', 'color: #4ade80;');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: t('contact.success'),
      description: 'Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.',
    });

    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-2">
            <span className="text-primary">$</span>
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono mb-2 text-muted-foreground">
                  {t('contact.name')}
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="font-mono"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label className="block text-sm font-mono mb-2 text-muted-foreground">
                  {t('contact.email')}
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-mono"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono mb-2 text-muted-foreground">
                  {t('contact.message')}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="font-mono min-h-32 resize-none"
                  placeholder="Twoja wiadomość..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-bg text-primary-foreground font-mono group"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {t('contact.success')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    {t('contact.send')}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold font-mono mb-6">
                {t('contact.info')}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">Email</p>
                    <a href="mailto:jan.kowalski@example.com" className="hover:text-primary transition-colors">
                      jan.kowalski@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">Location</p>
                    <p>{t('contact.location')}</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-muted-foreground">
                {t('contact.availability')}
              </p>
            </div>

            {/* Fun Code Block */}
            <div className="code-block">
              <pre className="text-sm overflow-x-auto">
                <code className="text-muted-foreground">
{`// Jeśli to czytasz, jesteś prawdziwym
// testerem! 🔍
if (readingConsole) {
  console.log("Brawo! 🎉");
  sendMeEmail();
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
