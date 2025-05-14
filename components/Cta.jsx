import { Button } from "./ui/button";
import Link from 'next/link';

export default function Cta() {
	return (
		<section>
			<div className="text-center w-fit mx-auto p-12 mb-16">
				<h2 className="h2 mb-8">
					Ready to Grow Your Shopify Store?
				</h2>
				<Link href="https://calendly.com/eirikorkelbog/free-30-minute-shopify-strategy-call">
					<Button>Book a Free Strategy Call</Button>
				</Link>
			</div>
		</section>
	);
}