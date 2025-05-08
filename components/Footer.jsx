import Socials from "./Socials"

export default function Footer() {
	return (
		<footer className="bg-secondary pt-6 pb-2">
			<div className="container mx-auto">
				<div className="flex flex-col items-center justify-between">
					<Socials
						containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
						iconStyles='text-primary text-[20px] hover:text-white transition-all'
					/>
					<div className="text-muted-foreground text-center">Copyright &copy; 2025 Eirik Orkelbog. All rights reserved.</div>
				</div>
			</div>
		</footer>
	)
}