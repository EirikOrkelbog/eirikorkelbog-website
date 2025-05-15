import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function How() {
	return (
		<section className="container">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					How It Works
				</h2>
				<p className="text-lg md:text-xl mb-12">
					I make it easy for you to get a conversion-optimized Shopify store that
					actually grows your business - without the tech headaches or hiring a full team.
				</p>
				<div className="grid gap-8 md:grid-cols-3 text-left">
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-xl font-semibold mb-2">1. Book a Free Strategy Call</h3>
						<p>
							We&apos;ll talk about your goals, current setup, and biggest friction points.
							If we&apos;re a good fit, we move forward with a custom growth plan.
						</p>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-xl font-semibold mb-2">2. I Build Your Growth Infrastructure</h3>
						<p>
							I optimize your store structure, implement high-converting sections,
							and set up systems for lead capture, email, and analytics.
						</p>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-xl font-semibold mb-2">3. Launch, Test, and Grow</h3>
						<p>
							You launch with a store that&apos;s built to convert - and we monitor,
							test, and tweak as data comes in to increase ROI.
						</p>
					</Card>
				</div>
				<div className="mt-12">
					<Link href="https://calendly.com/eirikorkelbog/free-30-minute-shopify-strategy-call">
						<Button>Book Your Free Call</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}