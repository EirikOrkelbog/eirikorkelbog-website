import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { RiAlignJustify } from "react-icons/ri"
import Nav from "./Nav"
import Logo from "./Logo"
import Socials from "./Socials"

export default function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild tabIndex={true}>
				<RiAlignJustify className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col items-center justify-between h-full py-8">
					<div className="flex flex-col items-center gap-y-32">
						<Logo />
						<Nav containerStyles="flex flex-col items-center gap-y-6" linkStyles="text-2xl" />
					</div>
					<Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
				</div>
			</SheetContent>
		</Sheet>
	)
}