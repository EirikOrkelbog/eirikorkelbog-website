const data = [
	{
		problem: "You're getting traffic, but not enough sales",
		solution: "I optimize your store to convert more visitors into customers",
	},
	{
		problem: "High bounce rate on product pages",
		solution: "I improve layout, copy, and CTA's to keep shoppers engaged",
	},
	{
		problem: "Abandoned carts and low checkout conversion",
		solution: "I streamline your checkout experience to reduce drop-off",
	},
	{
		problem: "Not sure what to fix or test",
		solution: "I run a CRO audit and suggest changes based on data, not guesses",
	},
	{
		problem: "You think you need a full redesign",
		solution: "You don’t — I make strategic tweaks that increase sales fast",
	},
];

export default function Solution() {
	return (
		<div className="container py-12 flex flex-col">
			<h2 className="h2 mb-8 text-center">How It Works</h2>
			<div className="flex flex-col items-center justify-center gap-4 xl:gap-16 xl:flex-row">
				<div className="bg-tertiary shadow-md rounded-xl px-12 py-8 flex flex-col gap-4">
					<h3 className="text-2xl font-semibold mb-2">Step 1: Shopify Growth Sprint (Weeks 1-4)</h3>
					<p>We start with a one-time, high-impact sprint:</p>
					<ul className="list-disc flex flex-col gap-2">
						<li>UX & CRO audit</li>
						<li>Product & collection structure cleanup</li>
						<li>Custom conversion sections (e.g. size guide, “shop the look”)</li>
						<li>Lead capture setup + email automation</li>
						<li>SEO fixes & analytics tracking installed</li>
					</ul>
				</div>
				<div className="bg-tertiary shadow-md rounded-xl px-12 py-8 flex flex-col gap-4">
					<h3 className="text-2xl font-semibold mb-2">Step 2: Ongoing Growth Support (Monthly)</h3>
					<p>We meet monthly to improve traffic and conversion. I handle:</p>
					<ul className="list-disc flex flex-col gap-2">
						<li>Email campaigns</li>
						<li>Offer testing</li>
						<li>Tracking insights</li>
						<li>Ongoing CRO and small dev changes</li>
					</ul>
					<p>You get monthly momentum — without a bloated retainer.</p>
				</div>
			</div>
		</div>
	)
}