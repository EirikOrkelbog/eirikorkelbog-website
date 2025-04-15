import DevImg from './DevImg'
import Link from 'next/link';
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { User2, MailIcon, PhoneIcon, HomeIcon, Send } from 'lucide-react'

const infoData = [
	{
		icon: <User2 size={20} />,
		text: 'Eirik Orkelbog',
	},
	{
		icon: <PhoneIcon size={20} />,
		text: '+47 948 42 424',
	},
	{
		icon: <MailIcon size={20} />,
		text: 'eirikorkelbog@gmail.com',
	},
	{
		icon: <HomeIcon size={20} />,
		text: 'Norway',
	},
]

const experienceText1 = 'After starting out in web development, I transitioned into Shopify, where I found the perfect blend of tech, strategy, and creativity.'

const experienceText2 = 'Today, I specialize in Shopify theme development and Conversion Rate Optimization (CRO), helping brands build faster, smarter, and more profitable stores.'

const About = () => {
	const getData = (array, title) => {
		return array.find((item) => item.title === title);
	}
	return (
		<section className='xl:h-[860px] pb-12 xl:py-24'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
				<div className='flex flex-col xl:flex-row'>
					<div className='hidden xl:flex flex-1 relative'>
						<DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/newprofile.png' />
					</div>
					<div className='flex-1'>
						<Tabs defaultValue='personal'>
							<TabsList className='flex flex-col xl:flex-row xl:w-[300px] xl:border dark:border-none'>
								<TabsTrigger className='w-[162px]' value='personal'>Personal</TabsTrigger>
								<TabsTrigger className='w-[162px]' value='experience'>Experience</TabsTrigger>
							</TabsList>
							<div className='text-lg mt-12 xl:mt-8'>
								<TabsContent value='personal'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-8'>Personal Information</h3>
										<div className='grid xl:grid-cols-2 gap-4 mb-12'>
											{infoData.map((item, index) => (
												<div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
													<div className='text-primary'>{item.icon}</div>
													<div>{item.text}</div>
												</div>
											))}
										</div>
										<div className='flex flex-col gap-y-2'>
											<span className='text-primary'>Language Skills</span>
											<div className='border-b border-border'></div>
											<div>English and Norwegian</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value='experience'>
									<div>
										<h3 className='h3 mb-8 text-center xl:text-left'>My Journey</h3>
										<div className='flex flex-col gap-4'>
											<p className='text-lg leading-relaxed text-center xl:text-left'>
												{experienceText1}
											</p>
											<p className='text-lg leading-relaxed text-center xl:text-left'>
												{experienceText2}
											</p>
											<Link href='mailto:eirikorkelbog@gmail.com'>
												<Button className='gap-x-2'>
													Get in touch <Send size={18} />
												</Button>
											</Link>
										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About;