"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ResumeRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeRequestModal({ isOpen, onClose }: ResumeRequestModalProps) {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(false);

        try {
            // sending form data to API endpoint
            const response = await fetch('/api/resume-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)  // Send all form data
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                
                setTimeout(() => {
                    onClose();
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '' });
                }, 2000);
            } 
            else
                throw new Error(result.message);
        }
        catch (error) {
            console.error('Failed to submit request:', error);
            setIsSubmitted(false);
            setSubmitError(true);

            setTimeout(() => {
                setSubmitError(false);
            }, 2000);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>
                    {language === 'en' ? 'Request Resume' : 'Lebenslauf anfordern'}
                </h3>
                    {isSubmitted && (
                        <div className="modal-status-card success">
                            <span className="status-icon">✅</span>
                            <p className="status-title">
                                {language === 'en' 
                                    ? 'Request submitted successfully!' 
                                    : 'Anfrage erfolgreich gesendet!'}
                            </p>
                            <p className="status-subtitle">
                                {language === 'en'
                                    ? 'I\'ll get back to you soon!'
                                    : 'Ich melde mich bald bei Ihnen!'}
                            </p>
                        </div>
                    )}

                    {submitError && (
                        <div className="modal-status-card error">
                            <span className="status-icon">❌</span>
                            <p className="status-title error">
                                {language === 'en'
                                ? 'Submission failed!'
                                : 'Übertragung fehlgeschlagen!'}
                            </p>
                            <p className="status-subtitle">
                                {language === 'en'
                                ? 'Please try again or contact me directly.'
                                : 'Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.'}
                            </p>
                        </div>
                    )}
                
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder={language === 'en' ? 'Your Name' : 'Ihr Name'}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                    />
                    
                    <input
                        type="email"
                        placeholder={language === 'en' ? 'Your Email' : 'Ihre E-Mail'}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                    
                    <input
                        type="text"
                        placeholder={language === 'en' ? 'Company (optional)' : 'Unternehmen (optional)'}
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                    
                    <textarea
                        placeholder={language === 'en' ? 'Tell me about the opportunity...' : 'Erzählen Sie mir von der Gelegenheit...'}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        required
                    />
                    
                    <div className="form-buttons">
                        <button type="button" onClick={onClose}>
                            {language === 'en' ? 'Cancel' : 'Abbrechen'}
                        </button>
                        <button type="submit">
                            {language === 'en' ? 'Send Request' : 'Anfrage senden'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}