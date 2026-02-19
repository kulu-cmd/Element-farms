import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
    const [form, setForm] = useState({
        name: '', email: '', farm: '', phone: '', interest: '', message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your enquiry! Our team will contact you shortly.');
        setForm({ name: '', email: '', farm: '', phone: '', interest: '', message: '' });
    };

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <h1>Contact Us for Trials</h1>
                        <p>
                            Interested in managing your waste or trialling our products for your soil?
                            Get in touch and our specialists will design a customised solution for your farm.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--cream-pale)' }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="contact-grid">
                            <div className="contact-info">
                                <h2>Let's Work Together</h2>
                                <p>
                                    Whether you're looking to rejuvenate your soil, protect your crops, manage
                                    livestock operations, or recycle farm waste — we're here to help. Fill out
                                    the form and our team will get back to you within 24 hours.
                                </p>

                                <div className="contact-details">
                                    <div className="contact-detail-item">
                                        <div className="contact-detail-icon">📍</div>
                                        <div>
                                            <h4>Location</h4>
                                            <p>South Africa</p>
                                        </div>
                                    </div>
                                    <div className="contact-detail-item">
                                        <div className="contact-detail-icon">📧</div>
                                        <div>
                                            <h4>Email</h4>
                                            <p>info@elementfarm.co.za</p>
                                        </div>
                                    </div>
                                    <div className="contact-detail-item">
                                        <div className="contact-detail-icon">📞</div>
                                        <div>
                                            <h4>Phone</h4>
                                            <p>+27 (0) 12 345 6789</p>
                                        </div>
                                    </div>
                                    <div className="contact-detail-item">
                                        <div className="contact-detail-icon">⏰</div>
                                        <div>
                                            <h4>Business Hours</h4>
                                            <p>Mon – Fri: 8:00 AM – 5:00 PM (SAST)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3>Request a Trial</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@farm.co.za" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="farm">Farm Name</label>
                                        <input id="farm" name="farm" value={form.farm} onChange={handleChange} placeholder="Your farm name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+27..." />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="interest">Area of Interest *</label>
                                    <select id="interest" name="interest" value={form.interest} onChange={handleChange} required>
                                        <option value="">Select an option...</option>
                                        <option value="land-rejuvenation">Land Rejuvenation</option>
                                        <option value="anti-flooding">Anti-Flooding Systems</option>
                                        <option value="nursery-support">Nursery Support</option>
                                        <option value="pest-sunburn">Pest & Sunburn Protection</option>
                                        <option value="poultry">Poultry Solutions</option>
                                        <option value="dairy-cattle">Dairy / Cattle Solutions</option>
                                        <option value="waste-management">Waste Management</option>
                                        <option value="general">General Enquiry</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message *</label>
                                    <textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your farm and what you're looking for..." />
                                </div>
                                <button type="submit" className="btn btn-primary form-submit">
                                    Send Enquiry →
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
