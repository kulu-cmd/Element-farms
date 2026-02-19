import SolutionPage from './SolutionPage';

export default function Poultry() {
    return (
        <SolutionPage
            title="Poultry Solutions"
            subtitle="Innovative, sustainable solutions for healthier poultry operations and improved bird performance."
            icon="🐔"
            description={[
                "South Africa's poultry industry is the largest segment of the agricultural sector, yet many producers face challenges with bird health, feed efficiency, and environmental impact. Over-reliance on antibiotics and synthetic supplements is creating long-term problems for both animal welfare and consumer health.",
                "Our poultry solutions focus on natural, regenerative approaches to flock management. From probiotic feed supplements and biological litter treatments to natural disease prevention programmes, we help poultry farmers produce healthier birds more efficiently.",
                "Whether you run a large commercial operation or a smallholder poultry farm, our solutions are scalable and cost-effective, delivering measurable improvements in bird health, feed conversion, and overall profitability."
            ]}
            benefits={[
                { icon: '🐣', title: 'Improved Bird Health', desc: 'Natural supplements and probiotics support immune function and reduce disease incidence.' },
                { icon: '🌾', title: 'Better Feed Conversion', desc: 'Optimised gut health means birds extract more nutrition from feed, reducing costs.' },
                { icon: '🏠', title: 'Litter Management', desc: 'Biological treatments reduce ammonia, improve litter quality, and create healthier housing.' },
                { icon: '🚫', title: 'Antibiotic Reduction', desc: 'Natural alternatives help reduce antibiotic dependency while maintaining flock health.' },
            ]}
            ctaText="Optimise Your Poultry Operation"
        />
    );
}
