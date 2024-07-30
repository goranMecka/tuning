import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";

import { motion } from "framer-motion";

import Benefit from "./Benefit";

import HelmetGraphic from "@/assets/helmet-full.jpg";
import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6"/>,
      title: "56 Tuning Garages",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "Race Drivers Community",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Certified Car Tuners",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export default function Benefits({setSelectedPage}: Props) {
  return (
   
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
<motion.div 
onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
>
    {/* HEADER */}

  <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          
        >
          <HText>MORE THAN JUST A <span className="text-brand-button">TUNING</span></HText>
          <p className="my-5 text-md">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

{/* BENEFITS */}

<motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      {/* GRAPHICS & DESCRIPTION */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-20 md:flex w-90 ml-0">
      {/* GRAPHIC */}
      <img src={HelmetGraphic} 
      alt="benefits-page-graphic" className="mx-auto w-3/6 marker:bg-white"/>
      {/* DESCRIPTION */}
      <div>
        {/* TITLE */}
        <div className="relative">
      <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]
       before:content">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, x: 50 },
             visible: { opacity: 1, x: 0 },
           }}
         >
          <HText>
           FULL SECURITY FOR YOUR {" "}
            <span className="text-brand-button">
              CAR
            </span>
          </HText>
         </motion.div>
      </div>
        </div>

        {/* DESCRIPTION */}
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
     >
      <p className="my-5"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Quasi numquam accusamus accusantium amet ea inventore maxime quibusdam, 
        quam ducimus esse voluptas illo iusto tempora quisquam facere, debitis molestiae, sapiente x</p>

      <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptates modi asperiores,
         libero quidem adipisci aliquam nemo omnis qui quaerat vel officiis culpa fugit magnam atque
          reiciendis suscipit facere deserunt illo inventore. Eligendi officiis veniam repudiandae labore
           accusamus eos recusandae ea qui repellendus vitae? Vitae pariatur natus veritatis aspernatur eum.</p>
         
     </motion.div>
        {/* BUTTON */}
   <div className="relative mt-16">
    <div className="before:absolute before:-bottom-20 before:right-40
     before:z-[-1] before:content-sparkles">
  <ActionButton setSelectedPage={setSelectedPage}>
    Find Out Now
  </ActionButton>
    </div>

   </div>
      </div>
      </div>

</motion.div>
    </section>
  )
}