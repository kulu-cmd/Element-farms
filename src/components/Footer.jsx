import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="navbar-logo" style={{ marginBottom: 8 }}>
                            <img src="/logo.png" alt="Element Farm Solutions" style={{ height: 44, width: 44 }} />
                            <span className="navbar-logo-text" style={{ color: '#fff' }}>
                                Element <span style={{ color: 'var(--green-light)' }}>Farm</span>
                            </span>
                        </Link>
                        <p>
                            Empowering South African farmers with regenerative solutions for healthier soil,
                            sustainable livestock management, and responsible waste recycling.
                        </p>
                    </div>

                    <div>
                        <h4>Solutions</h4>
                        <ul className="footer-links">
                            <li><Link to="/solutions/land-rejuvenation">Land Rejuvenation</Link></li>
                            <li><Link to="/solutions/anti-flooding">Anti-Flooding Systems</Link></li>
                            <li><Link to="/solutions/nursery-support">Nursery Support</Link></li>
                            <li><Link to="/solutions/pest-sunburn">Pest & Sunburn</Link></li>
                            <li><Link to="/solutions/poultry">Poultry</Link></li>
                            <li><Link to="/solutions/dairy-cattle">Dairy / Cattle</Link></li>
                            <li><Link to="/solutions/waste-management">Waste Management</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Resources</h4>
                        <ul className="footer-links">
                            <li><Link to="/education">Farmer Education</Link></li>
                            <li><Link to="/contact">Contact for Trials</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Get in Touch</h4>
                        <div className="footer-contact-item">
                            <span className="icon">📍</span>
                            <div>
                                <p>South Africa</p>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <span className="icon">📧</span>
                            <div>
                                <p>info@elementfarm.co.za</p>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <span className="icon">📞</span>
                            <div>
                                <p>+27 (0) 12 345 6789</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Element Farm Solutions. All rights reserved.</span>
                    <div className="footer-socials">
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                        <a href="#" aria-label="Instagram">ig</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
