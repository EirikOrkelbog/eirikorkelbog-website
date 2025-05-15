import { Card } from "./ui/card";

export default function Problem() {
	return (
		<section className="bg-background container">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
					Your Shopify Store Looks Good - But It&apos;s Not Converting
				</h2>
				<p className="text-lg md:text-xl text-gray-700 mb-10">
					Most fashion e-commerce brands focus on branding and aesthetics —
					but that&apos;s not enough to scale. If your store isn&apos;t built with
					conversion systems in place, you&apos;re losing sales every single day.
				</p>
				<div className="grid gap-6 md:grid-cols-2 text-left">
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-xl font-semibold text-gray-900 mb-2">The Problem</h3>
						<p className="text-gray-700">
							Your homepage looks nice but doesn&apos;t guide users. Your product pages lack
							trust elements. You have no real lead capture strategy, and your emails
							barely convert. You&apos;re not missing a creative director - you&apos;re missing
							a growth operator.
						</p>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-xl font-semibold text-gray-900 mb-2">What You Need</h3>
						<p className="text-gray-700">
							A CRO-focused store structure. Sections designed to convert. Lead capture
							that actually grows your list. And automated systems that turn traffic
							into sales - not just pretty pixels. Thats what I build for you in 30 days.
						</p>
					</Card>
				</div>
			</div>
		</section>
	);
}