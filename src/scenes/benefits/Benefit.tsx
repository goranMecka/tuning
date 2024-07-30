

import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/types';


const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  
type Props = {
    icon: JSX.Element,
    title: string,
    description: string,
    setSelectedPage: (value: SelectedPage) => void
}

export default function Benefit({icon, title, description, setSelectedPage}: Props) {
  return (
    <motion.div 
    variants={childVariant}
    className='mt-5 rounded-md border-2 border-red-500 text-center px-5 py-16'>
       <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
    {icon}
        </div>
       </div>
       <h4 className='font-bold text-red-500'>{title}</h4>
       <p className='my-3'>{description}</p>
       <AnchorLink
            className='text-sm font-bold text-primary-500 underline
            hover:text-secondary-500'
            onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}>
            <p className='text-red-500'>Learn More</p>

            </AnchorLink>
    </motion.div>
  )
}