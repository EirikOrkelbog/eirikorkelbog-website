import Link from 'next/link'
import { Button } from './ui/button'

export default function Hero() {
	return (
		<section className='py-12 xl:py-24 min-h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover'>
			<div className='container mx-auto'>
					<div className='flex max-w-[1000px] flex-col items-center mx-auto text-center'>
						<span className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Shopify Fixes</span>
						<h1 className='h1'>Your Shopify Store Shouldn’t Look or Feel Amateur</h1>
						<p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Maybe your homepage feels outdated. Maybe your products are a mess behind the scenes.
						Either way—I'll fix it, properly.</p>
						<div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
							<Link href="https://forms.gle/CkCBX9pGHr3NVsKL6">
								<Button>Start with a Quick Project Form</Button>
							</Link>
						</div>
					</div>
			</div>
		</section>
	)
}