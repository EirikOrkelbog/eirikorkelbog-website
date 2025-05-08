import { Button } from "./ui/button";
import Link from "next/link";

export default function Pricing() {
	return (
		<section className="px-6">
			<div className="mx-auto text-center">
				<h2 className="h2 mb-6">Services</h2>
				<p className="text-lg mb-6">
					<span className="font-semibold">Flat fee. No upsells. No hidden fees.</span>
				</p>
				<div className="flex flex-col items-center justify-center gap-4 xl:flex-row xl:gap-16">
					<div className="flex flex-col items-center xl:w-[500px] bg-tertiary shadow-md rounded-xl p-6">
						<h3 className="text-2xl font-semibold mb-6">Theme Redesign & Fixes ($750)</h3>
						<ul className="text-left space-y-2 mb-6">
							<li>✅ Custom design updates to your theme</li>
							<li>✅ Mobile-first UX improvements</li>
							<li>✅ 2 revision rounds</li>
							<li>✅ Delivered in 10–14 days</li>
						</ul>
					</div>
					<div className="flex flex-col items-center xl:w-[500px] bg-tertiary shadow-md rounded-xl p-6">
						<h3 className="text-2xl font-semibold mb-6">Store Structure Cleanup ($200)</h3>
						<ul className="text-left space-y-2 mb-6">
							<li>✅ Reorganize product tags, types, and metadata</li>
							<li>✅ Automate collections based on smart filters</li>
							<li>✅ Simplify and improve navigation menus</li>
							<li>✅ Tidy up SEO basics (URLs, titles, descriptions)</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
} 