import { Button } from "./ui/button";
import Link from 'next/link';

export default function Cta() {
	return (
		<section className="bg-tertiary dark:bg-secondary/40 py-16 px-6 md:px-12 text-center rounded-t-2xl">
			<div className="container max-w-3xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Be One of the First 2 Brands to Get a Free CRO Audit + Fixes
				</h2>
				<p className="text-lg mb-8">
					Delivered in 7 days. No strings attached. Let’s boost your conversions together.
				</p>
				<Link href="/about">
					<Button>Book a Free Audit</Button>
				</Link>
			</div>
		</section>
	);
}