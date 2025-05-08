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
		<div className="container mx-auto flex flex-col">
			<h2 className="h2 mb-8 text-center">How It Works</h2>
			<div className="flex flex-col items-center justify-center gap-16 xl:flex-row xl:gap-16">
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-2xl font-semibold mb-2">1. Quick Discovery Call</h3>
					<p className="xl:max-w-80 text-center">We talk about your goals, problems, and what success looks like.</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-2xl font-semibold mb-2">2. Execution</h3>
					<p className="xl:max-w-80 text-center">I design and build—while you focus on your business.</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-2xl font-semibold mb-2">3. Final Review + Handoff</h3>
					<p className="xl:max-w-80 text-center">You get a clean, tested store with clear documentation.</p>
				</div>
			</div>
		</div>
	)
}