import Image from 'next/image'
import DevImg from './DevImg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { User2, MailIcon, PhoneIcon, HomeIcon, GraduationCap, Calendar, Briefcase } from 'lucide-react'

const infoData = [
	{
		icon: <User2 size={20} />,
		text: 'Eirik Orkelbog',
	},
	{
		icon: <PhoneIcon size={20} />,
		text: '94842424',
	},
	{
		icon: <MailIcon size={20} />,
		text: 'eirikorkelbog@gmail.com',
	},
	{
		icon: <Calendar size={20} />,
		text: '03.04.1996',
	},
	{
		icon: <GraduationCap size={20} />,
		text: 'Kristiania University College',
	},
	{
		icon: <HomeIcon size={20} />,
		text: 'Øygarden, Bergen',
	},
]

const educationData = [
	{
		title: 'education',
		data: [
			{
				university: 'Kristiiania University College',
				degree: 'One year study',
				years: '2023 - 2024',
			},
			{
				university: 'Høyskolen i Innlandet',
				degree: 'Bachelor in organisajon og ledelse',
				years: '2022 - 2023',
			},
			{
				university: 'Kristiiania University College',
				degree: 'One year study',
				years: 'Aug 2023 - Jun 2024',
			},
		],
	},

]

const experienceData = [
	{
		title: 'experience',
		data: [
			{
				company: 'Kodeverket',
				role: 'Frontend developer',
				years: '2024 - now',
			},
			{
				company: 'Kodeverket',
				role: 'Frontend developer',
				years: '2024 - now',
			},
			{
				company: 'Kodeverket',
				role: 'Frontend developer',
				years: '2024 - now',
			},
		],
	},
]

const skillData = [
	{
		title: 'skills',
		data: [
			{
				name: 'HTML, CSS',
			},
			{
				name: 'JavaScript',
			},
			{
				name: 'Next.js',
			},
			{
				name: 'Sanity',
			},
		]
	},
	{
		title: 'tools',
		data: [
			{
				imgPath: '/about/figma.svg',
			},
			{
				imgPath: '/about/vscode.svg',
			},
		]
	},
]

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
						<DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
					</div>
					<div className='flex-1'>
						<Tabs defaultValue='personal'>
							<TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
								<TabsTrigger className='w-[162px]' value='personal'>Personal</TabsTrigger>
								<TabsTrigger className='w-[162px]' value='experience'>Experience</TabsTrigger>
								<TabsTrigger className='w-[162px]' value='skills'>Skills</TabsTrigger>
							</TabsList>
							<div className='text-lg mt-12 xl:mt-8'>
								<TabsContent value='personal'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-4'>Unmatched service for over 2 years</h3>
										<p className='subtitle max-w-xl mx-auto xl:mx-0'>I specialice in crafting websites with cutting edge technology.</p>
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
										{/* wrapper */}
										<div className='grid md:grid-cols-2 gap-y-8'>
											{/* experience */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary'>
													<Briefcase />
													<h4 className='capitalize font-medium'>
														{getData(experienceData, 'experience').title}
													</h4>
												</div>
												{/* list */}
												<div className='flex flex-col gap-y-8'>
													{getData(experienceData, 'experience').data.map((item, index) => {
														const { company, role, years } = item;
														return (
															<div className='flex gap-x-8' key={index}>
																<div className='h-[84px] w-[1px] bg-border relative ml-2'></div>
																<div>
																	<div className='font-semibold text-xl leading-none mb-2'>
																		{company}
																	</div>
																	<div className='text-lg leading-none text-muted-foreground mb-4'>
																		{role}
																	</div>
																	<div className='text-base font-medium'>
																		{years}
																	</div>
																</div>
															</div>
														)
													})}
												</div>
											</div>
											{/* education */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary'>
													<GraduationCap size={28} />
													<h4 className='capitalize font-medium'>
														{getData(educationData, 'education').title}
													</h4>
												</div>
												{/* list */}
												<div className='flex flex-col gap-y-8'>
													{getData(educationData, 'education').data.map((item, index) => {
														const { university, degree, years } = item;
														return (
															<div className='flex gap-x-8' key={index}>
																<div className='h-[84px] w-[1px] bg-border relative ml-2'></div>
																<div>
																	<div className='font-semibold text-xl leading-none mb-2'>
																		{university}
																	</div>
																	<div className='text-lg leading-none text-muted-foreground mb-4'>
																		{degree}
																	</div>
																	<div className='text-base font-medium'>
																		{years}
																	</div>
																</div>
															</div>
														)
													})}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value='skills'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-8'>What I Use Everyday</h3>
										{/* skills */}
										<div className='mb-16'>
											<h4 className='text-xl font-semibold mb-2'>Skills</h4>
											<div className='border-b border-border mb-4'></div>
											{/* skill list */}
											<div>
												{getData(skillData, 'skills').data.map((item, index) => {
													const { name } = item;
													return (
														<ul className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
															<li className='font-medium'>{name}</li>
														</ul>
													)
												})}
											</div>
										</div>
										{/* tools */}
										<div>
											<h4 className='text-xl font-semibold mb-2'>Tools</h4>
											<div className='border-b border-border mb-4'></div>
											<div className='flex gap-x-8 justify-center xl:justify-start'>
												{getData(skillData, 'tools').data.map((item, index) => {
													const { imgPath } = item;
													return (
														<div key={index}>
															<Image src={imgPath} height={48} width={48} alt=''></Image>
														</div>
													)
												})}
											</div>
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