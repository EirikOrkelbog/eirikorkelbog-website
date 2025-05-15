import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function About() {
	return (
		<section className="container">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
					Why Work With Me?
				</h2>
				<p className="text-lg md:text-xl text-gray-700 mb-12">
					You don&apos;t need a big agency. You need someone who gets what it&apos;s like to build from scratch, who cares about your store like it&apos;s their own, and who can actually deliver results.
				</p>
				<div className="grid gap-8 md:grid-cols-2 text-left">
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Real E-commerce Focus</h3>
						<p className="text-gray-700">
							I specialize in Shopify and fashion brands - not generalist web design. Every decision is made with sales and growth in mind.
						</p>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-On, Not Outsourced</h3>
						<p className="text-gray-700">
							You&apos;re working directly with me - no account managers, no middlemen. That means better communication and no fluff.
						</p>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-xl font-semibold text-gray-900 mb-2">Conversion Comes First</h3>
						<p className="text-gray-700">
							Beautiful stores that don&apos;t convert are pointless. I build sites that are clean, fast, and designed to turn traffic into sales.
						</p>
					</Card>
					<Card className="bg-card p-6 shadow-md">
						<h3 className="text-xl font-semibold text-gray-900 mb-2">I&apos;m Just Getting Started</h3>
						<p className="text-gray-700">
							That means I care more, work harder, and want every project to become a strong case study. Your success is my success.
						</p>
					</Card>
				</div>
				<div className="mt-12">
					<Link href="https://calendly.com/eirikorkelbog/free-30-minute-shopify-strategy-call">
						<Button>Book a Free Call</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
