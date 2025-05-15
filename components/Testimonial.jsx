import { Card } from "./ui/card";

export default function Testimonial() {
	return (
		<section className="container">
			<div className="max-w-3xl mx-auto">
				<Card className="p-10 shadow-md relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-10 h-10 text-primary absolute top-6 left-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M7.5 15.75A3.75 3.75 0 0 1 3.75 12V9.75A3.75 3.75 0 0 1 7.5 6h.75A.75.75 0 0 1 9 6.75v3a.75.75 0 0 1-.75.75H7.5A.75.75 0 0 0 6.75 11.25v.75a.75.75 0 0 0 .75.75h.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H7.5zM16.5 15.75A3.75 3.75 0 0 1 12.75 12V9.75A3.75 3.75 0 0 1 16.5 6h.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 0-.75.75v.75a.75.75 0 0 0 .75.75h.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H16.5z"
						/>
					</svg>
					<p className="text-lg md:text-xl text-gray-800 italic mb-4 mt-4 md:mt-0 pl-12">
						“I&apos;m incredibly happy with my new website! It&apos;s modern, user-friendly, and functional - exactly what I wanted.”
					</p>
					<p className="text-lg md:text-xl text-gray-800 italic mb-4 pl-12">
						“The whole process was seamless, with clear communication and a solution-oriented approach. The final result exceeded my expectations.”
					</p>
					<p className="text-sm text-gray-600 text-right">- Google review, Kine</p>
				</Card>
			</div>
		</section>
	);
}