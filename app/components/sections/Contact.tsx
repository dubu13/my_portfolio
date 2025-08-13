import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslations";

export default function Contact() {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];

    return (
        <section id="contact" className="section-padding">
            <div className="container-width text-center">
                <div className="section-header">
                    <h2 className="heading-2 gradient-text">{t.contact.title}</h2>
                </div>
            
                <p className="text-muted contact-description">
                    {t.contact.description}
                </p>

                <div className="contact-links">
                    <a href="mailto:dilarahsn13@gmail.com" className="btn-primary">
                        ✉️ {t.contact.emailBtn}
                    </a>
                    <a href="https://github.com/dubu13" target="_blank" className="btn-primary">
                        🐙 {t.contact.githubBtn}
                    </a>
                    <a href="https://www.linkedin.com/in/dilara-hasan/" target="_blank" className="btn-primary">
                        💼 {t.contact.linkedinBtn}
                    </a>
                </div>
            </div>
        </section>
    );
}