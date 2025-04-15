import { SquareGanttChart, Blocks, Gem } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const servicesData = [
	{
		icon: <Blocks size={72} strokeWidth={0.8} />,
		title: 'Shopify Store Optimization',
		description: 'Improve your store’s speed, layout, and user experience to convert more visitors into customers.',
	},
	{
		icon: <Gem size={72} strokeWidth={0.8} />,
		title: 'Audits & Strategy Consulting',
		description: 'Get a detailed, actionable report on where your store is leaking revenue and how to fix it.',
	},
	{
		icon: <SquareGanttChart size={72} strokeWidth={0.8} />,
		title: 'Store Setup & Theme Customization',
		description: 'Full Shopify setup or redesign tailored to your brand — no bloated templates, just clean, effective design.',
	},
]

export default function Services() {
	return (
		<section className='mb-12 xl:mb-36'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
				<div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
					{servicesData.map((item, index) => {
						return (
							<Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
								key={index}>
								<CardHeader className='text-primary absolute -top-[60px]'>
									<div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
										{item.icon}
									</div>
								</CardHeader>
								<CardContent className='text-center'>
									<CardTitle className='mb-4'>{item.title}</CardTitle>
									<CardDescription className='text-lg'>{item.description}</CardDescription>
								</CardContent>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}