import { motion } from "framer-motion"

import DriversTeamGraphic from "@/assets/team-drivers-graphic.png";
import { useForm } from "react-hook-form";


import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

export default function ContactUs({setSelectedPage}: Props) {
  const inputStyles = `mb-5 w-full rounded-lg px-5 py-3 placeholder-white bg-brand-button`

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  }
  return (
  <section
  id="contactus"
  className="mx-auto w-5/6 pt-24">
   <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
   {/* HEADER */}
   <motion.div className="md:w-3/5"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.5 }}
     variants={{
       hidden: { opacity: 0, x: -50 },
       visible: { opacity: 1, x: 0 },
     }}>
<HText>
  BECOME OUR
    <span className="text-brand-button"> MEMBER </span>
   
</HText>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellat modi fugiat sunt beatae enim laudantium rerum laboriosam debitis facilis omnis sit et dicta molestiae minima ea tempore, fuga hic.</p>
   </motion.div>
   {/* FORM AND IMAGE */}
   <div className="mt-10 justify-between gap-8 md:flex">
    <motion.div
    className="mt-10 basis-3/5 md:mt-0"
    initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.5 }}
     variants={{
       hidden: { opacity: 0, y: 50 },
       visible: { opacity: 1, y: 0 },
     }}
    >
   <form target="_blanc"
   onSubmit={onSubmit}
   action="https://outlook.live.com/mail/0/inbox"
   method="POST"
   >
   <input 
    className={inputStyles}
     type="text" 
     placeholder="NAME"
     {...register("name", {
       required:true,
       maxLength: 40,
     })}
     />
     {errors.name && (
      <p className="mt-1 text-primary-500">
        {errors.name.type === "required" && "Name is required"}
        {errors.name.type === "maxLength" && "Name is too long"}

      </p>
     )}

<input 
    className={inputStyles}
     type="text" 
     placeholder="E-MAIL"
     {...register("email", {
       required:true,
       pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
     })}
     />
     {errors.email && (
      <p className="mt-1 text-primary-500">
        {errors.email.type === "required" && "Email is required"}
        {errors.email.type === "pattern" && "Email is invalid"}

      </p>
     )}

<textarea
    className={inputStyles}
    rows={5}
    cols={50}
     placeholder="MESSAGE"
     {...register("message", {
       required:true,
       maxLength: 800,
     })}
     />
     {errors.message && (
      <p className="text-primary-500">
        {errors.message.type === "required" && "Message is required"}
        {errors.message.type === "maxLength" && "Message is too long"}

      </p>
     )}
     <button type="submit"
      className="mt-5 rounded-lg bg-brand-button px-20 py-3 transition duration-500 hover:text-white text-black"
     >SUBMIT</button>
   </form>
    </motion.div>
    <motion.div
    className="relative mt-16 basis-2/5 md:mt-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay:0.2, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}>
    <div className="w-full before:absolute before:-bottom-20 
                    before:-right-10 before:z-[-1] ">
      <img src={DriversTeamGraphic} 
      className="w-full mb-3"
      alt="Contact Us Page Graphic" />
    </div>
    </motion.div>

   </div>
   </motion.div>

  </section>
  )
}