import { Button } from "./ui/button";
import Link from 'next/link';

export default function Cta() {
	return (
		<section className="bg-tertiary py-16 px-6 md:px-12 text-center rounded-t-2xl">
			<div className="container max-w-3xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					Ready to Upgrade Your Store?
				</h2>
				<Link href="https://forms.gle/CkCBX9pGHr3NVsKL6">
					<Button>Fill Out The Project Form</Button>
				</Link>
			</div>
		</section>
	);
}