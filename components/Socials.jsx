import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri"
import Link from 'next/link'

const icons = [
	{
		path: 'https://github.com/EirikOrkelbog',
		name: <RiGithubFill />,
	},
	{
		path: 'https://www.instagram.com/eirik_orkelbog/',
		name: <RiInstagramFill />,
	},
	{
		path: 'https://www.linkedin.com/in/eirik-orkelbog/',
		name: <RiLinkedinFill />,
	},
]

const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link href={icon.path} key={index} target="_blank">
						<div className={`${iconStyles}`}>{icon.name}</div>
					</Link>
				)
			})}
		</div>
	)
}

export default Socials;