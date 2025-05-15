import Image from "next/image"

export default function Logo() {
	return (
		<Image src="/logo.svg" width={54} height={54} priority alt="homepage"></Image>
	)
}