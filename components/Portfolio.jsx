import { Card } from "./ui/card";
import Image from "next/image";

export default function Portfolio() {
	return (
		<section className="container">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-10">
					Projects with Brands Like Yours
				</h2>
				<div className="grid gap-10 md:grid-cols-3">
					<Card className="bg-card p-6 shadow-md">
						<Image src="/work/LookBook.png" width={500} height={500} alt="Lookbook Apparel" className="w-full' h-80 object-cover object-top" />
						<div className="p-6 text-left">
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Lookbook Apparel</h3>
							<p className="text-gray-600 text-sm">CRO redesign and layout overhaul for a menswear brand focused on premium suits and formalwear.
							</p>
						</div>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<Image src="/work/BoldBasics.png" width={500} height={500} alt="Bold Basics" className="w-full h-80 object-cover object-top" />
						<div className="p-6 text-left">
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Bold Basics</h3>
							<p className="text-gray-600 text-sm">Shopify cleanup and product page optimization for a minimalist sneaker brand, plus email flow setup.
							</p>
						</div>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<Image src="/work/Nordwear.png" width={500} height={500} alt="Nordwear" className="w-full h-80 object-cover object-top" />
						<div className="p-6 text-left">
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Nordwear</h3>
							<p className="text-gray-600 text-sm">Custom sections and CRO systems for a Scandinavian summerwear brand with a clean, coastal aesthetic.
							</p>
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}