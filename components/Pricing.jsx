import { Button } from "./ui/button";
import Link from "next/link";

export default function Pricing() {
	return (
		<section className="px-6">
			<div className="flex flex-col items-center justify-center">
				<h2 className="h2 mb-6">Pricing: $500/month</h2>
				<p className="text-lg mb-6">
					<span className="font-semibold">Cancel anytime. No lock-in. Just results.</span>
				</p>
				<div className="flex flex-col items-center xl:w-[500px] bg-tertiary shadow-md rounded-xl p-6">
					<h3 className="text-2xl font-semibold mb-6">Growth Foundation Plan</h3>
					<ul className="text-left space-y-2 mb-6">
						<li>✅ Shopify theme fixes & structure optimization</li>
						<li>✅ Lead capture + email welcome flow</li>
						<li>✅ SEO setup + 3-blog content roadmap</li>
						<li>✅ Monthly strategy call</li>
						<li>✅ 1 email campaign/month</li>
						<li>✅ Minor site edits / testing (1 hour dev)</li>
					</ul>
					<Link href="https://calendly.com/eirikorkelbog/free-30-minute-shopify-strategy-call">
						<Button>Book Your Free Call</Button>
					</Link>
				</div>
			</div>
		</section>
	);
} 