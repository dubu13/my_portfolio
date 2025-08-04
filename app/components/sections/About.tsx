export default function About() {
    const skills = ["C", "C++", "Git", "Docker", "Linux"];

    return (
        <section id="about" className="section-padding">
            <div className="container-width">
                <div className="about-header">
                    <h2 className="heading-2 gradient-text">About Me</h2>
                    <div className="about-underline"></div>
                </div>
            
                <div className="about-content">
                    <div className="about-text">
                        <p className="text-body">
                            I'm a programming student at <span className="highlight-text">42 Heilbronn</span>, 
                            diving deep into systems programming and software development through hands-on 
                            projects and peer-to-peer learning.
                        </p>
                        <p className="text-body">
                            Currently, I'm focused on mastering <span className="highlight-text">C and C++</span>, 
                            while also exploring web development with modern frameworks like React and Next.js. 
                            I love solving complex problems and building efficient, clean code.
                        </p>
                    </div>
                </div>

                <div className="about-stats">
                    <div className="stat-item">
                        <div className="stat-number">42</div>
                        <div className="stat-label">School Projects</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">3+</div>
                        <div className="stat-label">Languages</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">2023</div>
                        <div className="stat-label">Started Journey</div>
                    </div>
                </div>

                <div className="skill-section">
                    <h3 className="heading-3">Technical Skills</h3>

                    <div className="skills-container">
                        {skills.map(skill => (
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