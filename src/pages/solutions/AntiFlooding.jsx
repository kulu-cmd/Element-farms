import SolutionPage from './SolutionPage';

export default function AntiFlooding() {
    return (
        <SolutionPage
            title="Anti-Flooding Systems"
            subtitle="Protect your farmland from water damage with innovative drainage and flood prevention solutions."
            icon="🌊"
            description={[
                "Flooding is one of the most devastating threats to South African agriculture. Unpredictable rainfall patterns, poor drainage infrastructure, and degraded soil that can no longer absorb water all contribute to crop losses and topsoil erosion.",
                "Our anti-flooding systems combine modern engineering with natural water management principles. We design and implement solutions that redirect excess water, improve soil infiltration, and protect vulnerable cropland — all while preserving the natural water table.",
                "From contour bunds and swales to advanced sub-surface drainage, our systems are tailored to your farm's unique topography and rainfall patterns."
            ]}
            benefits={[
                { icon: '🛡️', title: 'Crop Protection', desc: 'Shield your crops from flood damage during heavy rainfall events and protect vulnerable seedlings.' },
                { icon: '🏔️', title: 'Erosion Prevention', desc: 'Prevent valuable topsoil from washing away during storms, preserving decades of soil building.' },
                { icon: '💧', title: 'Water Harvesting', desc: 'Capture and store excess rainwater for use during dry periods, reducing reliance on irrigation.' },
                { icon: '🌍', title: 'Sustainable Design', desc: 'Eco-friendly systems that work with the natural landscape rather than against it.' },
            ]}
            ctaText="Protect Your Farm from Flooding"
        />
    );
}
