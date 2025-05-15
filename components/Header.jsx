import Logo from "./Logo"
import Link from "next/link"

export default function Header() {
	return (
		<header className="bg-[#fef9f5] py-4">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<Logo />
					<div className="flex items-center gap-x-6">
						<Link href="mailto:eirikorkelbog@gmail.com" className="text-primary hover:text-black">
							eirikorkelbog@gmail.com
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}