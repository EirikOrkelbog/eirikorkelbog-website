import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"


const links = [
	// { path: '/', name: 'home' },
	// { path: '#whatIDo', name: 'What I Do' },
	// { path: '#pricing', name: 'Pricing' },
	// { path: '#aboutMe', name: 'about me' },
]

export default function Nav({ containerStyles, linkStyles, underlineStyles, onLinkClick }) {
	const path = usePathname();
	return (
		<nav className={`${containerStyles}`}>
			{links.map((link, index) => {
				return <Link
					href={link.path}
					key={index}
					className={`capitalize ${linkStyles}`}
					onClick={() => onLinkClick?.()}
				>
					{link.path === path && (
						<motion.span
							initial={{ y: '-100%' }}
							animate={{ y: 0 }}
							transition={{ type: 'tween' }}
							layoutId='underline'
							className={`${underlineStyles}`}
						/>
					)}
					{link.name}
				</Link>
			})}
		</nav>
	)
}