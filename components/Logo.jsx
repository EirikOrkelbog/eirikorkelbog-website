import Link from "next/link"
import Image from "next/image"

export default function Logo({ onLinkClick }) {
	return (
		<Link href="/" onClick={() => onLinkClick?.()}>
			<Image src="/logo.svg" width={54} height={54} priority alt="homepage"></Image>
		</Link>
	)
}