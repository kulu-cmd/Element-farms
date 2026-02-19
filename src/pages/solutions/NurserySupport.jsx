import SolutionPage from './SolutionPage';

export default function NurserySupport() {
    return (
        <SolutionPage
            title="Nursery Support"
            subtitle="Give your seedlings the strongest start with our nursery optimisation and plant care solutions."
            icon="🌿"
            description={[
                "A strong nursery operation is the foundation of successful crop production. The quality of seedlings and young plants directly determines harvest outcomes, yet many South African farmers struggle with nursery challenges including poor germination rates, disease pressure, and inconsistent growing conditions.",
                "Our nursery support programme provides comprehensive solutions for every stage of plant propagation. From optimised growing media and microclimate management to disease prevention and nutrient programmes, we help nurseries produce stronger, healthier plants that thrive once transplanted.",
                "We work with commercial nurseries, smallholder farmers, and horticultural operations to improve efficiency, reduce plant losses, and deliver seedlings that give crops the best possible start."
            ]}
            benefits={[
                { icon: '🌱', title: 'Stronger Seedlings', desc: 'Optimised growing conditions produce more resilient plants with better root development.' },
                { icon: '🔬', title: 'Disease Prevention', desc: 'Proactive biological solutions that protect young plants from common nursery diseases.' },
                { icon: '📊', title: 'Higher Survival Rates', desc: 'Reduce transplant shock and improve field survival rates for better overall crop performance.' },
                { icon: '💰', title: 'Cost Efficiency', desc: 'Better nursery outcomes mean fewer plant replacements and lower overall production costs.' },
            ]}
            ctaText="Improve Your Nursery Operations"
        />
    );
}
