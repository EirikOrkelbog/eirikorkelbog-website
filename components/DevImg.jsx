import Image from 'next/image'

export default function DevImg({ containerStyles, imgSrc }) {
	return (
		<div className={`${containerStyles}`}>
			<Image src={imgSrc} fill priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' alt='profile image' />
		</div>
	)
}