import useMediaQuery from '../../hooks/useMediaQuery'

import HomePageText from "@/assets/Home-back-graphic.jpg"
import HomePageGraphic from "@/assets/front-car.png"
import SponsorOz from "@/assets/Oz.png"
import SponsorAbt from "@/assets/Abt.png"
import SponsorBardahl from "@/assets/Bardhal.png"
import SponsorKn from "@/assets/knSponsor.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export default function Home({setSelectedPage}: Props) {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  return (
  <section
  id='home'
  className='gap-16 py-10 md:h-full md:pb-0'
  >
{/* {IMAGE AND MAIN HEADER} */}
<motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
>
    {/* MAIN HEADER */}
    <div className='z-10 mt-32 md:basis-3/5'>
        {/* HEADINGS */}
        <motion.div className='md:-mt-20 '
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 1}}
        variants= {{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
        }}
        >
            <div className='relative'>
             <div className='before:absolute before:-top-60 before:-left-20 
             before:z-[-1]'>
              
             <img alt='home-page-text' src={HomePageText} />
             </div>
            </div>
            <p className='mt-8 text-md md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ea autem velit assumenda qui vero quis
                Ea autem velit assumenda qui vero quis!</p>
        </motion.div>
        {/* ACTIONS */}
        <motion.div className='mt-8 flex items-center gap-8'
           initial="hidden"
           whileInView="visible"
           viewport={{once: true, amount: 0.5}}
           transition={{delay: 0.2, duration: 1}}
           variants= {{
               hidden: {opacity: 0, x: -50},
               visible: {opacity: 1, x: 0}
           }}>
            <ActionButton  setSelectedPage={setSelectedPage}>
                Join Now
            </ActionButton>
            <AnchorLink
            className='text-sm font-bold text-primary-500 underline
            hover:text-secondary-500'
            onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}>
            <p>Learn More</p>

            </AnchorLink>
        </motion.div>
    </div>
    {/* IMAGE */}
    <div className='flex basis-3/5 justify-center md:z-10
    md:ml-40 md:mt-16 md:justify-items-end'>
       
    <img alt="home-page-graphic" src={HomePageGraphic} className='w-full'/>
    </div>
</motion.div>
{/* {SPONSORS} */}
   {isAboveMediumScreens && (
    <div className=' w-full bg-primary-100 py-5'>
        <div className='mx-auto w-5/6'>
            <div className='flex w-5/5 items-center justify-between gap-8 sponsors'>
                <img alt='sponsor-red-bull' src={SponsorOz} />
                <img alt='sponsor-forbes' src={SponsorAbt} />
                <img alt='sponsor-fortune' src={SponsorBardahl} />
                <img alt='sponsor-fortune' src={SponsorKn} />
            </div>
        </div>
    </div>
   )}
  </section>
  )
}