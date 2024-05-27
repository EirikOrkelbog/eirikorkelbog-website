import { MailIcon, HomeIcon, PhoneIcon } from 'lucide-react';
import Form from '@/components/Form';

export default function Contact() {
	return (
		<section>
			<div className='container mx-auto'>
				<div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
					<div className='flex flex-col justify-center'>
						<div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
							<span className='w-[30px] h-[2px] bg-primary'></span>
							Hello 👋
						</div>
						<h1 className='h1 mb-4'>Let's Work Together</h1>
						<p className='subtitle max-w-[600px]'>I bring a unique blend of skills and qualities to the table. I specialize in creating user-friendly interfaces that not only look great but also prioritize ease of use and accessibility. My attention to detail ensures that every pixel is perfect and aligns with your vision.</p>
					</div>
					<div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
				</div>
				<div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
					<div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
						<div className='flex items-center gap-x-8'>
							<MailIcon size={18} className='text-primary' />
							<div>eirikorkelbog@gmail.com</div>
						</div>
						<div className='flex items-center gap-x-8'>
							<HomeIcon size={18} className='text-primary' />
							<div>Øygarden, Norway</div>
						</div>
						<div className='flex items-center gap-x-8'>
							<PhoneIcon size={18} className='text-primary' />
							<div>+47 94 84 24 24</div>
						</div>
					</div>
					<Form />
				</div>
			</div>
		</section>
	)
}