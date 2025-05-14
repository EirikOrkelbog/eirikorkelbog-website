import Link from 'next/link'
import { Button } from './ui/button'

export default function Hero() {
	return (
		<section className='py-12 xl:py-24 min-h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover'>
			<div className='container mx-auto'>
					<div className='flex max-w-[1000px] flex-col items-center mx-auto text-center'>
						<span className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Shopify</span>
						<h1 className='h1'>Growth Infrastructure for Apparel Brands</h1>
						<p className='subtitle max-w-[490px] mx-auto xl:mx-0'>I help fashion e-commerce brands drive traffic, capture leads, and convert more customers.</p>
						<div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
							<Link href="https://calendly.com/eirikorkelbog/free-30-minute-shopify-strategy-call">
								<Button>Book a Free Call</Button>
							</Link>
						</div>
					</div>
			</div>
		</section>
	)
}