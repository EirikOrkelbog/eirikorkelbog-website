'use client';
import Link from 'next/link';
import { Button } from './ui/button';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import ProjectCard from './ProjectCard';

export const projectData = [
	{
		image: '/work/juvelia.png',
		category: 'Client',
		name: 'Juvelia.no',
		description: "Shopify store redesign and SEO",
		link: 'https://www.juvelia.no/',
		github: 'https://github.com/EirikOrkelbog/ai-chat-app',
	},
	{
		image: '/work/ai-chat.png',
		category: 'personal',
		name: 'AI Chat App',
		description: "I'm using OpenAI's API",
		link: 'https://ai-chat-app-olive.vercel.app/',
		github: 'https://github.com/EirikOrkelbog/ai-chat-app',
	},
	{
		image: '/work/guess-number.png',
		category: 'personal',
		name: 'Guess My Number',
		description: "Number guessing game",
		link: 'https://guess-numberrrr-app.netlify.app/',
		github: 'https://github.com/EirikOrkelbog/Guess-My-Number',
	},
	{
		image: '/work/movie-search.png',
		category: 'personal',
		name: 'Movie search app',
		description: "Get information about movies",
		link: 'https://movie-search-apppp.netlify.app/',
		github: 'https://github.com/EirikOrkelbog/Movie-Search-App',
	},
	{
		image: '/work/recipe-app.png',
		category: 'personal',
		name: 'Recipe App',
		description: "Get recipe based on ingredient",
		link: 'https://fooood-recipe-app.netlify.app/',
		github: 'https://github.com/EirikOrkelbog/Food-Recipe-App',
	},
	{
		image: '/work/todo-list.png',
		category: 'personal',
		name: 'Todo List',
		description: 'A simple todo list app with local storage',
		link: 'https://addtaskapp.netlify.app/',
		github: 'https://github.com/EirikOrkelbog/todo-list-app',
	},
];

export default function Work() {
	return (
		<section className='mb-12 xl:mb-48'>
			<div className='container mx-auto relative'>
				<div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
					<h2 className='section-title mb-8'>Latest Projects</h2>
				</div>
				{/* slider */}
				<div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
					<Swiper className='h-[480px]'
						slidesPerView={1}
						breakpoints={{
							640:
								{ slidesPerView: 2 }
						}}
						spaceBetween={30}
						modules={[Pagination]}
						pagination={{ clickable: true }}
						keyboard={{ enabled: true }}
					>
						{projectData.slice(0, 4).map((project, index) => {
							return (
								<SwiperSlide key={index}>
									<ProjectCard project={project} />
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
		</section>
	)
}