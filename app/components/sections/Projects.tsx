import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="container-width">
                <h2 className="heading-2 text-center">My Projects</h2>

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
                                        View Code
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