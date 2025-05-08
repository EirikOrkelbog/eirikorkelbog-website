import { Button } from "./ui/button";
import Link from 'next/link';

export default function Cta() {
	return (
		<section>
			<div className="text-center w-fit mx-auto p-12 mb-16">
				<h2 className="h2 mb-8">
					Ready to Upgrade Your Store?
				</h2>
				<Link href="https://forms.gle/CkCBX9pGHr3NVsKL6">
					<Button>Fill Out The Project Form</Button>
				</Link>
			</div>
		</section>
	);
}