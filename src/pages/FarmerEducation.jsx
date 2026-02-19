import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const articles = [
    {
        title: 'Understanding Soil Health: Why It Matters',
        excerpt: 'Healthy soil is the foundation of productive farming. Learn about soil biology, microbial activity, and why moving away from synthetic chemicals is essential for long-term agricultural success in South Africa.',
        tag: 'Soil Health',
        imageClass: 'soil',
        icon: '🌍',
    },
    {
        title: 'Water Conservation for South African Farms',
        excerpt: 'With South Africa being a water-scarce country, learn smart irrigation techniques, rainwater harvesting, and anti-flooding systems that protect your crops while conserving precious water resources.',
        tag: 'Water',
        imageClass: 'water',
        icon: '💧',
    },
    {
        title: 'The Benefits of Going Organic',
        excerpt: 'Discover how transitioning from chemical-heavy farming to organic and regenerative practices can improve crop quality, boost profits, and create healthier food for South African consumers.',
        tag: 'Organic',
        imageClass: 'organic',
        icon: '🌿',
    },
    {
        title: 'Crop Rotation and Cover Cropping',
        excerpt: 'Explore centuries-old farming wisdom backed by modern science. Crop rotation and cover cropping can restore essential nutrients, break pest cycles, and dramatically improve soil structure.',
        tag: 'Techniques',
        imageClass: 'crop',
        icon: '🌾',
    },
    {
        title: 'Regenerative Agriculture: A New Era',
        excerpt: 'South Africa stands at a crossroads. With only 15% of land being arable and soil quality declining, regenerative agriculture offers a path forward to rebuild our farming heritage for future generations.',
        tag: 'Regenerative',
        imageClass: 'regen',
        icon: '🔄',
    },
    {
        title: 'Natural Pest Management Strategies',
        excerpt: 'Chemical pesticides are destroying our soil ecosystems. Discover natural, effective alternatives for pest and sunburn protection that work with nature rather than against it.',
        tag: 'Pest Control',
        imageClass: 'pest',
        icon: '🛡️',
    },
];

export default function FarmerEducation() {
    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>Farmer Education</h1>
                        <p>
                            Knowledge is power. We provide South African farmers with the education and resources
                            needed to transform their farming practices and build a sustainable future.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--cream-pale)' }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-badge">📚 Learn & Grow</span>
                            <h2 className="section-title">Educational Resources</h2>
                            <p className="section-subtitle">
                                Practical guides, research-backed insights, and real-world knowledge to help
                                South African farmers embrace regenerative agriculture.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="education-grid">
                        {articles.map((article, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="education-card">
                                    <div className={`education-card-image ${article.imageClass}`}>
                                        <span>{article.icon}</span>
                                        <span className="education-tag">{article.tag}</span>
                                    </div>
                                    <div className="education-card-body">
                                        <h3>{article.title}</h3>
                                        <p>{article.excerpt}</p>
                                        <span className="education-read-more">Read More →</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-content">
                            <h2>Want to Learn More?</h2>
                            <p>
                                Reach out to our team for workshops, farm visits, and personalised educational sessions
                                tailored to your crops and region.
                            </p>
                            <div className="cta-actions">
                                <Link to="/contact" className="btn btn-primary btn-lg">Contact Us →</Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
