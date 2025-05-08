'use client'

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import Link from "next/link"
import { Button } from "./ui/button"
// import Nav from "./Nav"
// import MobileNav from "./MobileNav"

export default function Header() {
	const [header, setHeader] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const scrollYPos = window.addEventListener('scroll', () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false);
		});

		return () => window.removeEventListener('scroll', scrollYPos);
	})
	return (
		<header className="bg-[#fef9f5] py-4">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<Logo />
					<div className="flex items-center gap-x-6">
						<Link href="mailto:eirikorkelbog@gmail.com" className="text-primary hover:text-black">
							eirikorkelbog@gmail.com
						</Link>
						{/* <Nav
							containerStyles='hidden lg:flex gap-x-8 items-center'
							linkStyles='relative hover:text-primary transition-all'
							underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' /> */}
					</div>
				</div>
			</div>
		</header>
	)
}