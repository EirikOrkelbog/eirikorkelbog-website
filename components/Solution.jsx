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
		<div className="container mx-auto flex flex-col xl:items-center" id="whatIDo">
			<h2 className="h2 mb-8 xl:mb-16">Problems & Solutions</h2>
			<table className="table-auto border">
				<thead className="bg-tertiary dark:bg-secondary/40">
					<tr>
						<th className="text-left p-3 font-bold border-b">Problem</th>
						<th className="text-left p-3 font-bold border-b">Solution</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, i) => (
						<tr key={i} className="border-t">
							<td className="p-3 xl:pr-12 align-top">{row.problem}</td>
							<td className="p-3 align-top">{row.solution}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}