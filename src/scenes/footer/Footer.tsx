import Logo from "@/assets/Logo.png";




export default function Footer() {
  return (
    <footer className="bg-primary-100 py-10">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
         <div className="mt-16 basis-1/2 md:mt-0">
         <img src={Logo} alt="logo" className="w-80"/>
         <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit officia sed? Doloremque minima eum officiis quod ea distinctio nemo sunt, beatae aliquam culpa tempore cum alias in ab similique.
         </p>
         <p>© Evogym All Rights Reserved.</p>
         </div>
         <div className="mb-2 basis-1/4 md:mt-0">
           <h4 className="font-bold mt-10">Links</h4>
           <p className="my-5">Lorem ipsum dolor sit amet.</p>
           <p className="my-5">Lorem ipsum dolor sit amet.</p>
           <p>(number / 737475888)</p>
         </div>
         <div>
         <h4 className="font-bold mt-10">Contact Us</h4>
           <p className="my-5">Lorem ipsum dolor sit amet.</p>
           <p className="my-5">Lorem ipsum dolor sit amet.</p>
           <p>(number / 737475888)</p>
         </div>
        </div>


    </footer>
  )
}