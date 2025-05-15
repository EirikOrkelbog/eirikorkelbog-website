import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQ() {
	return (
		<section className="container">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
					Frequently Asked Questions
				</h2>
				<Accordion type="single" collapsible className="space-y-4">
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-lg">How long does a project take?</AccordionTrigger>
						<AccordionContent className="text-md">
							Most projects take 2-4 weeks depending on scope, communication, and revisions. You&apos;ll get a clear timeline up front.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className="text-lg">What platform do you work on?</AccordionTrigger>
						<AccordionContent className="text-md">
							I work exclusively with Shopify — it&apos;s the best platform for fashion e-commerce brands that want to grow.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger className="text-lg">Do I need to provide content and images?</AccordionTrigger>
						<AccordionContent className="text-md">
							You should provide your brand assets, images, and key content — but I&apos;ll guide you on what&apos;s needed and help refine it.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger className="text-lg">Can you help with ongoing support?</AccordionTrigger>
						<AccordionContent className="text-md">
							Yes! I offer 30 days of support with most packages and have options for continued CRO work and maintenance.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-5">
						<AccordionTrigger className="text-lg">What if I&apos;m not ready to commit?</AccordionTrigger>
						<AccordionContent className="text-md">
							That&apos;s okay! You can start with a free discovery call and see if the fit is right before deciding.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
}