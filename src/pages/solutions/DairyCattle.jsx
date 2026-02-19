import SolutionPage from './SolutionPage';

export default function DairyCattle() {
    return (
        <SolutionPage
            title="Dairy & Cattle Solutions"
            subtitle="Sustainable solutions for healthier herds, better milk production, and responsible livestock management."
            icon="🐄"
            description={[
                "South Africa's dairy and cattle industry faces growing challenges: rising feed costs, increasing regulatory pressure around antibiotics, and the need to produce more from less while maintaining animal welfare standards.",
                "Our dairy and cattle solutions take a holistic approach to herd management. We provide natural supplements, pasture improvement programmes, and biological treatments that support animal health from the ground up — starting with the soil that grows their feed.",
                "By improving pasture quality through regenerative soil management and providing natural health supplements, we help livestock farmers produce healthier animals, better-quality milk, and more sustainable operations."
            ]}
            benefits={[
                { icon: '🥛', title: 'Improved Milk Quality', desc: 'Healthier cows on better pasture produce higher-quality milk with better nutritional profiles.' },
                { icon: '🌾', title: 'Pasture Improvement', desc: 'Regenerative soil management creates more nutritious, productive grazing land.' },
                { icon: '💊', title: 'Natural Health Support', desc: 'Reduce reliance on antibiotics with natural supplements that support immune function.' },
                { icon: '📉', title: 'Lower Feed Costs', desc: 'Better pasture means less supplementary feeding and lower overall operational costs.' },
            ]}
            ctaText="Transform Your Cattle Operation"
        />
    );
}
