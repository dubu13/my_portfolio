import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslations";
import ResumeRequestModal from "../ResumeRequestModal";


export default function Hero() {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.section id="home" className="hero-section hero-animation">
                <div className="container-width">
                    <motion.h1 className="heading-1 hero-title-animation">
                        <span className="gradient-text">{t.hero.title}</span>
                    </motion.h1>

                    <motion.p className="heading-2 hero-subtitle-animation">
                        {t.hero.subtitle}
                    </motion.p>

                    {/* buttons*/}
                    <motion.div className="hero-button hero-button-animation">
                        <a href="#about" className="btn-primary">
                            {t.hero.aboutBtn}
                        </a>
                        <a href="https://github.com/dubu13" target="_blank" className="btn-primary">
                            GitHub
                        </a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary"
                        >
                            {t.hero.resumeBtn}
                        </button>
                    </motion.div>
                </div>
            </motion.section>

            <ResumeRequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}