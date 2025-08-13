import { projects } from "../../../data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslations";

export default function Projects() {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];

    return (
        <section id="projects" className="section-padding">
            <div className="container-width">
                <div className="section-header">
                    <h2 className="heading-2 gradient-text">{t.projects.title}</h2>
                    <div className="section-underline"></div>
                </div>

                <div className="project-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h3 className="heading-3">{project.title}</h3>

                            <p className="text-muted project-spacing">
                                {project.description}
                            </p>

                            <div className="skills-container project-spacing">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="project-link"
                                    >
                                        {t.projects.viewCode}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}