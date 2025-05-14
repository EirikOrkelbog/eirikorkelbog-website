import DevImg from './DevImg'

export default function About() {
	return (
		<section className="container mx-auto">
			<div className='flex justify-between items-center gap-x-8'>
				<div className="max-w-2xl mx-auto">
					<h2 className="h2 mb-6 text-center">Who Am I?</h2>
					<p className="text-lg leading-relaxed text-start mb-4">
						Hey, I&apos;m <span className="font-semibold">Eirik</span> - I help fashion e-commerce stores simplify and scale their growth on Shopify.
						I&apos;m not here to “redesign your site” - I&apos;m here to build systems that convert.
						With a background in frontend development, business and marketing, I work hands-on to clean up the chaos, increase your conversion rates, and build a growth machine that actually compounds.
					</p>
					<p className="text-lg leading-relaxed text-start">If you&apos;re doing $10k+/month and ready to scale without hiring a bloated agency - we should talk.</p>
				</div>
				<div className='hidden xl:flex relative'>
					<div className='bg-hero_shape2_light w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
					<DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/profile.png' />
				</div>
			</div>
		</section >
	);
}
