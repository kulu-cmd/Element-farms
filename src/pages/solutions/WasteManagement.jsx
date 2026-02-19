import SolutionPage from './SolutionPage';

export default function WasteManagement() {
    return (
        <SolutionPage
            title="Waste Management"
            subtitle="Transform agricultural waste into valuable resources with our circular economy solutions."
            icon="♻️"
            description={[
                "Agricultural waste is one of South Africa's most underutilised resources. Millions of tonnes of crop residues, animal waste, and processing by-products are discarded or burned every year — releasing greenhouse gases and losing valuable nutrients that could be returned to the soil.",
                "Our waste management solutions close the loop. We help farmers convert organic waste streams into nutrient-rich compost, bio-inputs, and soil amendments that feed back into the agricultural cycle. This reduces disposal costs, creates new revenue streams, and dramatically lowers the environmental impact of farming operations.",
                "From on-farm composting systems to industrial-scale waste processing, our solutions are designed to turn your waste problem into a competitive advantage."
            ]}
            benefits={[
                { icon: '🔄', title: 'Circular Economy', desc: 'Transform waste from a cost centre into a revenue-generating asset for your farm.' },
                { icon: '🌱', title: 'Soil Enrichment', desc: 'Convert waste into high-quality compost and bio-amendments that regenerate soil health.' },
                { icon: '🌍', title: 'Environmental Impact', desc: 'Reduce methane emissions, prevent water contamination, and shrink your carbon footprint.' },
                { icon: '💰', title: 'Cost Savings', desc: 'Lower waste disposal costs and reduce the need to purchase synthetic fertilisers.' },
            ]}
            ctaText="Start Recycling Your Farm Waste"
        />
    );
}
