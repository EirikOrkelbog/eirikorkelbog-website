'use client';
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/components/Work";

const uniqueCategories = [
	'all projects',
	...new Set(projectData.map((item) => item.category)),
];

export default function ProjectsPage() {
	const [categories, setCategories] = useState(uniqueCategories);
	const [category, setCategory] = useState('all projects');

	const filteredProjects = projectData.filter((project) => {
		return category === 'all projects' ? project : project.category === category;
	})
	return (
		<section className="min-h-screen pt-24">
			<div className="container mx-auto">
				<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
				<Tabs defaultValue={category} className="mb-24 xl:mb-48">
					<TabsList className='w-full grid h-full md:grid-cols-3 lg:max-w-[400px] mb-12 mx-auto md:border dark:border-none'>
						{categories.map((category, index) => {
							return (
								<TabsTrigger
									onClick={() => setCategory(category)}
									value={category}
									key={index}
									className='capitalize w-[162px] md:w-auto'>
									{category}
								</TabsTrigger>
							)
						})}
					</TabsList>
					<div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
						{filteredProjects.map((project, index) => {
							return (
								<TabsContent value={category} key={index}>
									<ProjectCard project={project} />
								</TabsContent>
							)
						})}
					</div>
				</Tabs>
			</div>
		</section>
	)
}