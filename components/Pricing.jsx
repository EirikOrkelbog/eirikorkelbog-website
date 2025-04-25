import { Button } from "./ui/button";
import Link from "next/link";

export default function Pricing() {
	return (
		<section className="bg-tertiary dark:bg-secondary/40 py-16 px-6 md:px-12">
			<div className="max-w-2xl mx-auto text-center">
				<h2 className="h2 mb-6">Pricing</h2>
				<p className="text-lg mb-6">
					<span className="font-semibold">Launch Offer:</span> $0 for the first 2 projects
					<br />
					<span className="text-sm">(In exchange for honest feedback and a testimonial)</span>
				</p>
				<div className="flex flex-col items-center bg-white dark:bg-tertiary shadow-md rounded-xl p-6">
					<h3 className="text-2xl font-semibold mb-2">$325</h3>
					<p className="mb-4">Flat fee. No upsells. No hidden fees.</p>
					<ul className="text-left space-y-2 mb-6">
						<li>✅ CRO Audit + Site Speed Optimization</li>
						<li>✅ Implementation of Fixes</li>
						<li>✅ 7-Day Delivery</li>
						<li>✅ 1 Round of Revisions</li>
					</ul>
					<Link href="mailto:eirikorkelbog@gmail.com?subject=Free Audit Request">
						<Button>Book a Free Audit</Button>
					</Link>
				</div>
			</div>
		</section>
	);
} 