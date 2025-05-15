import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

export default function Pricing() {
	return (
		<section className="container">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
					Simple, Transparent Pricing
				</h2>
				<p className="text-lg md:text-xl text-gray-700 mb-12">
					Perfect if you&apos;re a growing fashion brand ready to invest in a stronger Shopify experience - without breaking the bank.
				</p>
				<div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
					<Card className="bg-[#FEF9F5] p-6 shadow-md">
						<h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter Package</h3>
						<p className="text-gray-700 mb-6">Ideal for new or growing fashion brands that need a conversion-focused revamp.</p>
						<ul className="text-gray-700 space-y-3 mb-6 text-left list-disc list-inside">
							<li>Store audit + growth strategy</li>
							<li>Homepage, PDP & cart optimization</li>
							<li>Basic lead capture setup</li>
							<li>Email welcome flow setup (Klaviyo)</li>
							<li>1 round of revisions</li>
						</ul>
						<div className="text-3xl font-bold text-gray-900 mb-6">$1,200</div>
						<Link href="https://calendly.com/eirikorkelbog/free-30-minute-shopify-strategy-call">
							<Button>Book a Free Call</Button>
						</Link>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-2xl font-semibold text-gray-900 mb-4">Growth Package</h3>
						<p className="text-gray-700 mb-6">For brands looking to fully upgrade their growth systems and build real momentum.</p>
						<ul className="text-gray-700 space-y-3 mb-6 text-left list-disc list-inside">
							<li>Everything in Starter</li>
							<li>Custom section design & dev</li>
							<li>Advanced analytics + event tracking</li>
							<li>Full email flow setup (Klaviyo)</li>
							<li>Ongoing CRO tweaks (30 days)</li>
						</ul>
						<div className="text-3xl font-bold text-gray-900 mb-6">$2,000</div>
						<Link href="https://calendly.com/eirikorkelbog/free-30-minute-shopify-strategy-call">
							<Button>Book a Free Call</Button>
						</Link>
					</Card>
				</div>
			</div>
		</section>
	);
} 