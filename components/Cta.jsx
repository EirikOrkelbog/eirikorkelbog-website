import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from 'next/link';

export default function Cta() {
	return (
		<section className="container mb-24">
				<h2 className="text-3xl font-bold text-center mb-6">Is This Right For You?</h2>
				<p className="text-lg text-center max-w-3xl mx-auto mb-8">
					If you're serious about growing your fashion e-commerce brand and tired of playing guessing games with your website, this is for you.
				</p>
				<div className="text-center mt-10">
					<Button asChild>
						<a href="#book-call">Book Your Free Discovery Call</a>
					</Button>
				</div>
		</section>
	);
}