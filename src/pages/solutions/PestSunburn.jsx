import SolutionPage from './SolutionPage';

export default function PestSunburn() {
    return (
        <SolutionPage
            title="Pest & Sunburn Protection"
            subtitle="Defend your crops naturally against pests, disease, and sun damage without harmful chemicals."
            icon="🛡️"
            description={[
                "South African farmers face constant pressure from pests, plant diseases, and extreme sun exposure — particularly in the Western Cape, Limpopo, and Mpumalanga regions. Traditional chemical solutions offer short-term relief but cause long-term soil and ecosystem damage.",
                "Our pest and sunburn protection solutions harness the power of natural defence mechanisms. We offer biological pest control, natural sunscreen applications for sensitive crops, and integrated pest management strategies that protect your harvest while preserving soil health.",
                "These solutions are designed to reduce chemical input costs, improve crop quality for export markets, and create a safer working environment for farm workers."
            ]}
            benefits={[
                { icon: '🐛', title: 'Biological Pest Control', desc: 'Natural predators and biocontrol agents that manage pest populations without chemicals.' },
                { icon: '☀️', title: 'Sun Damage Prevention', desc: 'Protective treatments that shield delicate crops from sunburn and heat stress.' },
                { icon: '🌍', title: 'Export-Ready Quality', desc: 'Chemical-free produce meets stringent international market requirements.' },
                { icon: '👷', title: 'Worker Safety', desc: 'Eliminate exposure to harmful pesticides and create a healthier farm environment.' },
            ]}
            ctaText="Protect Your Crops Naturally"
        />
    );
}
