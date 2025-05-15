import { Card } from "./ui/card";

export default function Portfolio() {
	return (
		<section className="container">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
					Projects with Brands Like Yours
				</h2>
				<div className="grid gap-10 md:grid-cols-3">
					<Card className="bg-card p-6 shadow-md">
						<img src="/portfolio/lookbook-brand.jpg" alt="Lookbook Apparel" className="w-full h-60 object-cover" />
						<div className="p-6 text-left">
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Lookbook Apparel</h3>
							<p className="text-gray-600 text-sm">Full CRO redesign and growth infrastructure overhaul for a DTC fashion label selling gender-neutral streetwear.</p>
						</div>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<img src="/portfolio/boldbasics.jpg" alt="Bold Basics" className="w-full h-60 object-cover" />
						<div className="p-6 text-left">
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Bold Basics</h3>
							<p className="text-gray-600 text-sm">Shopify structure cleanup, product page optimization, and automated email flows for a women&apos;s activewear brand.</p>
						</div>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<img src="/portfolio/nordwear.jpg" alt="Nordwear" className="w-full h-60 object-cover" />
						<div className="p-6 text-left">
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Nordwear</h3>
							<p className="text-gray-600 text-sm">Built custom sections and implemented conversion systems for a premium Scandinavian outerwear brand on Shopify.</p>
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}