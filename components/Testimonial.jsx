import Link from "next/link";

export default function Testimonial() {
	return (
		<section className="px-4">
			<div className="max-w-3xl mx-auto">
				<h2 className="h2 mb-8 text-center">
					What Clients Say
				</h2>
				<div className="bg-tertiary p-6 rounded-2xl shadow-md border border-gray-100">
					<div className="mb-4">
						<div className="flex justify-center mt-1">
							{Array.from({ length: 5 }).map((_, i) => (
								<svg
									key={i}
									className="h-8 w-8 text-yellow-400"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M10 15l-5.878 3.09L5.5 12.5 1 8.91l6.09-.89L10 2.5l2.91 5.52L19 8.91l-4.5 3.59.378 5.59z" />
								</svg>
							))}
						</div>
						<p className="mt-4 text-lg text-gray-700 italic">
							“I’m incredibly happy with my new website! It’s modern, user-friendly, and functional - exactly what I wanted. The whole process was seamless, with clear communication, close follow-up, and a solution-oriented approach throughout. The final result exceeded my expectations. I highly recommend <strong>Eirik Orkelbog!</strong> Thank you for the great collaboration 👍”
						</p>
					</div>
					<div className="mt-4">
						<Link href="https://g.co/kgs/iu3f1Hn">
							<p className="font-medium text-gray-900">- Google Review, Kine</p>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

