import { motion } from "framer-motion";


export default function Hero() {
    return (
        <motion.section id="home" className="hero-section hero-animation">
            <div className="container-width">
                <motion.h1 className="heading-1 hero-title-animation">
                    <span className="gradient-text">Hi, I&apos;m Dilara</span>
                </motion.h1>

                <motion.p className="heading-2 hero-subtitle-animation">
                    Student at 42 Heilbronn | Software Developer
                </motion.p>

                {/* buttons*/}
                <motion.div className="hero-button hero-button-animation">
                    <a href="#about" className="btn-primary">
                        About Me
                    </a>
                    <a href="https://github.com/dubu13" target="_blank" className="btn-primary">
                        GitHub
                    </a>
                    <a className="btn-primary">Resume</a>
                </motion.div>
            </div>
        </motion.section>
    );
}