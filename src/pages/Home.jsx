import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 4,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 8,
    opacity: 0.15 + Math.random() * 0.25,
}));

export default function Home() {
    return (
        <>
            {/* === HERO === */}
            <section className="hero">
                <div className="hero-particles">
                    {particles.map((p) => (
                        <div
                            key={p.id}
                            className="hero-particle"
                            style={{
                                left: p.left,
                                width: p.size,
                                height: p.size,
                                animationDuration: `${p.duration}s`,
                                animationDelay: `${p.delay}s`,
                                opacity: p.opacity,
                            }}
                        />
                    ))}
                </div>

                <div className="hero-content">
                    <div className="hero-badge">🌿 Regenerative Agriculture</div>
                    <h1>
                        Rebuilding South Africa's <span className="highlight">Soil & Future</span>
                    </h1>
                    <p className="hero-subtitle">
                        Our mission is to educate South African farmers about the importance of soil health,
                        shifting away from heavy chemical usage destroying the soil, to promote high quality,
                        regenerative soil to rebuild the land and produce higher quality crops.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Start Your Trial →
                        </Link>
                        <Link to="/education" className="btn btn-outline btn-lg">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* === STATS BAR === */}
            <section className="stats-bar">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>15%</h3>
                            <p>Arable Land in SA</p>
                        </div>
                        <div className="stat-item">
                            <h3>40%</h3>
                            <p>Soil Degradation</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Natural Solutions</p>
                        </div>
                        <div className="stat-item">
                            <h3>3-Step</h3>
                            <p>Proven Approach</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* === 3-STEP APPROACH === */}
            <section className="section approach-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-badge">🌱 Our Methodology</span>
                            <h2 className="section-title">Our 3-Step Approach</h2>
                            <p className="section-subtitle">
                                A proven framework to transform South African agriculture — from education to
                                rejuvenation to responsible recycling.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="approach-grid">
                        <ScrollReveal delay={0}>
                            <Link to="/education" className="approach-card educate">
                                <span className="approach-step-number">1</span>
                                <span className="approach-icon">📚</span>
                                <h3>Educate</h3>
                                <p>
                                    Did you know that only 15% of South Africa's land is arable, and soil quality
                                    has been declining steadily over the past two decades? Years of heavy chemical
                                    usage have stripped the soil of essential nutrients and microorganisms. We believe
                                    that education is the first step — empowering farmers with the knowledge to
                                    understand why their soil matters and how regenerative practices can reverse
                                    decades of damage.
                                </p>
                                <span className="approach-link">Explore Education →</span>
                            </Link>
                        </ScrollReveal>

                        <ScrollReveal delay={150}>
                            <Link to="/solutions/land-rejuvenation" className="approach-card rejuvenate">
                                <span className="approach-step-number">2</span>
                                <span className="approach-icon">🔄</span>
                                <h3>Rejuvenate</h3>
                                <p>
                                    Once farmers understand the crisis, we provide cutting-edge solutions to breathe
                                    new life into degraded land. From our proprietary soil rejuvenation treatments to
                                    anti-flooding systems and nursery support, our solutions are designed to restore
                                    soil biology, improve water retention, and create the foundation for higher-yield,
                                    chemical-free crop production.
                                </p>
                                <span className="approach-link">View Solutions →</span>
                            </Link>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <Link to="/solutions/waste-management" className="approach-card recycle">
                                <span className="approach-step-number">3</span>
                                <span className="approach-icon">♻️</span>
                                <h3>Recycle</h3>
                                <p>
                                    The final pillar of our approach closes the loop. Our waste management solutions
                                    transform agricultural by-products and farm waste into valuable resources. By
                                    converting organic waste into nutrient-rich compost and bio-inputs, we help
                                    farmers reduce costs, minimise their environmental footprint, and create a truly
                                    sustainable farming cycle.
                                </p>
                                <span className="approach-link">Waste Solutions →</span>
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* === CTA === */}
            <section className="section cta-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-content">
                            <h2>Ready to Transform Your Farm?</h2>
                            <p>
                                If you are interested in managing your waste or trialling our products for your
                                soil, we'd love to hear from you. Our team of specialists will work with you to
                                design a customised solution for your farm.
                            </p>
                            <div className="cta-actions">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    Contact Us for Trials →
                                </Link>
                                <Link to="/solutions/land-rejuvenation" className="btn btn-outline btn-lg">
                                    Browse Solutions
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
