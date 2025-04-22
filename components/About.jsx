// import DevImg from './DevImg'
// import Link from 'next/link';
// import { Button } from "./ui/button";
// import { Send } from 'lucide-react'

// const experienceText = [
// 	{
// 		paragraph: 'Hi, I’m Eirik — a conversion specialist focused on Shopify brands in the fitness and wellness space.'
// 	},
// 	{
// 		paragraph: 'After starting out in web development, I transitioned into Shopify, where I found the perfect blend of tech, strategy, and creativity.'
// 	},
// 	{
// 		paragraph: 'Today, I specialize in Conversion Rate Optimization (CRO), helping Shopify brands turn more visitors into customers with focused, data-backed improvements — no full redesigns needed.'
// 	},
// ]

// export default function About() {
// 	return (
// 		<section className='xl:h-[860px] py-12 xl:py-24'>
// 			<div className='container mx-auto'>
// 				<h1 className='h1 mb-12 xl:text-center'>About me</h1>
// 				<div className='flex flex-col items-center xl:flex-row'>
// 					<div className='hidden xl:flex flex-1 relative'>
// 						<DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/newprofile.png' />
// 					</div>
// 					<div className='flex-1'>
// 						<div className='flex flex-col gap-4 text-lg'>
// 							{experienceText.map((data) => (
// 								<p className='text-lg leading-relaxed'>
// 									{data.paragraph}
// 								</p>
// 							))}
// 							<span className='section-title pt-8'>Got a project in mind?</span>
// 							<Link href='mailto:eirikorkelbog@gmail.com' className='pt-4'>
// 								<Button className='gap-x-2'>
// 									Send me an email <Send size={18} />
// 								</Button>
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
import DevImg from './DevImg'

export default function About() {
	return (
		<section className="container mx-auto">
			<div className='flex justify-between items-center gap-x-8'>
				<div className="max-w-2xl mx-auto">
					<h2 className="h2 mb-6 text-center">About Me</h2>
					<p className="text-lg leading-relaxed text-start">
						Hey, I’m <span className="font-semibold">Eirik</span> — I help Shopify brands improve their conversion rates and make more money
						without spending more on ads. I’ve studied CRO obsessively, and now I’m building this
						as a productized solo service. Right now, I’m focused on delivering results to build my
						portfolio. If you’re one of the first to book, I’ll work with you for free.
					</p>
				</div>
				<div className='hidden xl:flex relative'>
					<div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
					<DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/profile.png' />
				</div>
			</div>
		</section >
	);
}
