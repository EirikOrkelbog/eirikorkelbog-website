import Socials from "./Socials"
import { Separator } from "./ui/separator"

export default function Footer() {
	return (
		<>
			<Separator className="my-10" />
			<footer className="pb-8">
				<div className="container mx-auto">
					<div className="flex flex-col items-center justify-between">
						<Socials
							containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
							iconStyles='text-black text-[20px]'
						/>
						<div className="text-muted-foreground text-center text-xs xl:text-sm">&copy; {new Date().getFullYear()} Eirik Orkelbog. All rights reserved.</div>
					</div>
				</div>
			</footer>
		</>
	)
}