import SolutionPage from './SolutionPage';

export default function LandRejuvenation() {
    return (
        <SolutionPage
            title="Land Rejuvenation"
            subtitle="Restore your soil's natural vitality and rebuild the foundation for productive, sustainable farming."
            icon="🌱"
            description={[
                "South Africa's arable land is a precious and finite resource. Decades of intensive farming and heavy chemical usage have depleted soil organic matter, disrupted microbial ecosystems, and reduced the land's natural ability to sustain healthy crops.",
                "Our land rejuvenation programme takes a science-backed approach to restoring soil health. Using proprietary bio-inputs, microbial inoculants, and regenerative techniques, we help farmers rebuild soil structure, improve nutrient cycling, and create the conditions for long-term agricultural productivity.",
                "Whether you're dealing with compacted soil, erosion damage, or declining yields, our team will assess your land and develop a tailored rejuvenation plan that delivers measurable results."
            ]}
            benefits={[
                { icon: '🧬', title: 'Soil Biology Restoration', desc: 'Reintroduce beneficial microorganisms and fungi that form the foundation of healthy soil ecosystems.' },
                { icon: '💧', title: 'Improved Water Retention', desc: 'Rejuvenated soil holds more moisture, reducing irrigation needs and protecting against drought.' },
                { icon: '📈', title: 'Higher Crop Yields', desc: 'Healthier soil produces healthier, more nutritious crops with higher market value.' },
                { icon: '🧪', title: 'Reduced Chemical Dependency', desc: 'Gradually transition away from synthetic fertilisers and pesticides that harm the soil.' },
            ]}
            ctaText="Ready to Rejuvenate Your Land?"
        />
    );
}
