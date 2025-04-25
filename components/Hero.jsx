import Link from 'next/link'
import { Button } from './ui/button'
import DevImg from './DevImg'

export default function Hero() {
	return (
		<section className='py-12 xl:py-24 min-h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
			<div className='container mx-auto'>
				{/* <div className='flex justify-between gap-x-8'> */}
					<div className='flex max-w-[900px] flex-col items-center mx-auto text-center'>
						<span className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Shopify & CRO</span>
						<h1 className='h1'>Get More Sales from Your Existing Traffic</h1>
						<p className='subtitle max-w-[490px] mx-auto xl:mx-0'>One simple service. One flat fee. I audit and fix your Shopify store to turn more visitors into customers.</p>
						<div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
							<Link href="mailto:eirikorkelbog@gmail.com?subject=Free Audit Request">
								<Button>Book a Free Audit</Button>
							</Link>
						</div>
					</div>
					{/* <div className='hidden xl:flex relative'>
						<div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
						<DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/profile.png' />
					</div>
				</div> */}
			</div>
		</section>
	)
}