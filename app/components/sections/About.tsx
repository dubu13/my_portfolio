import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslations";

export default function About() {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];
    
    const skills = ["C", "C++", "Git", "Docker", "Linux", "HTML/CSS", "JavaScript"];
    const softSkills = language === 'en' 
        ? ["Problem Solving", "Team Collaboration", "Communication", "Adaptability"]
        : ["Problemlösung", "Teamarbeit", "Kommunikation", "Anpassungsfähigkeit"];

    return (
        <section id="about" className="section-padding">
            <div className="container-width">
                <div className="section-header">
                    <h2 className="heading-2 gradient-text">{t.about.title}</h2>
                    <div className="section-underline"></div>
                </div>
            
                <div className="about-content">
                    <div className="about-text">
                        <p className="text-body">
                            {t.about.text1}
                        </p>
                        <p className="text-body">
                            {t.about.text2}
                        </p>
                        <p className="text-body">
                            {t.about.text3}
                        </p>
                    </div>
                </div>

                <div className="achievements-grid">
                    <div className="achievement-card">
                        <div className="achievement-icon">🎓</div>
                        <h4>{t.about.achievements.student.title}</h4>
                        <p>{t.about.achievements.student.desc}</p>
                    </div>
                    <div className="achievement-card">
                        <div className="achievement-icon">💼</div>
                        <h4>{t.about.achievements.work.title}</h4>
                        <p>{t.about.achievements.work.desc}</p>
                    </div>
                    <div className="achievement-card">
                        <div className="achievement-icon">🌍</div>
                        <h4>{t.about.achievements.multilingual.title}</h4>
                        <p>{t.about.achievements.multilingual.desc}</p>
                    </div>
                </div>

                <div className="skill-section">
                    <h3 className="heading-3">{t.about.technicalSkills}</h3>
                    <div className="skills-container">
                        {skills.map(skill => (
                            <span key={skill} className="skill-badge skill-badge-enhanced">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="skill-section">
                    <h3 className="heading-3">{t.about.softSkills}</h3>
                    <div className="skills-container">
                        {softSkills.map(skill => (
                            <span key={skill} className="skill-badge skill-badge-enhanced">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}