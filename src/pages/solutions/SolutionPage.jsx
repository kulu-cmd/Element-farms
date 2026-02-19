import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';

export default function SolutionPage({ title, subtitle, icon, description, benefits, ctaText }) {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </section>

            <section className="solution-overview">
                <div className="container">
                    <ScrollReveal>
                        <div className="solution-content">
                            <div className="solution-text">
                                <span className="section-badge">{icon} Element Farm Solutions</span>
                                <h2>{title}</h2>
                                {description.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                            <div className="solution-visual">{icon}</div>
                        </div>
                    </ScrollReveal>

                    {benefits && benefits.length > 0 && (
                        <ScrollReveal>
                            <div style={{ marginTop: 60 }}>
                                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 36 }}>
                                    Key Benefits
                                </h2>
                                <div className="benefits-grid">
                                    {benefits.map((b, i) => (
                                        <div key={i} className="benefit-card">
                                            <div className="benefit-icon">{b.icon}</div>
                                            <h3>{b.title}</h3>
                                            <p>{b.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    )}
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-content">
                            <h2>{ctaText || 'Interested in This Solution?'}</h2>
                            <p>Contact our team to discuss how we can tailor this solution for your farm's specific needs.</p>
                            <div className="cta-actions">
                                <Link to="/contact" className="btn btn-primary btn-lg">Request a Trial →</Link>
                                <Link to="/education" className="btn btn-outline btn-lg">Learn More</Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
