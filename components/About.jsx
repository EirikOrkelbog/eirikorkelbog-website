import DevImg from './DevImg'

export default function About() {
	return (
		<section className="container mx-auto">
			<div className='flex justify-between items-center gap-x-8'>
				<div className="max-w-2xl mx-auto">
					<h2 className="h2 mb-6 text-center">👋 About Me</h2>
					<p className="text-lg leading-relaxed text-start">
						Hey, I’m <span className="font-semibold">Eirik</span> — I specialize in front-end development and Shopify theme customization, with hands-on experience in real stores—not just tutorials. I know where most Shopify stores break down (especially when store owners DIY too much), and I help you fix the things that frustrate customers—and kill conversions.
					</p>
				</div>
				<div className='hidden xl:flex relative'>
					<div className='bg-hero_shape2_light w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
					<DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/profile.png' />
				</div>
			</div>
		</section >
	);
}
