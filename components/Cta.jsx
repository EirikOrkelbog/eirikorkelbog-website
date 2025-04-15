import { Button } from "./ui/button";
import { Send } from 'lucide-react'
import Link from 'next/link';

export default function Cta() {
	return (
		<section className=" py-24 bg-tertiary dark:bg-secondary/40">
			<div className="container mx-auto">
				<div className="flex flex-col items-center">
					<h2 className="h2 text-center mb-8">Ready to optimize your Shopify store?</h2>
					<Link href='mailto:eirikorkelbog@gmail.com'>
						<Button className='gap-x-2'>
							Get in touch <Send size={18} />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}