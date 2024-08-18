import Link from "next/link";
import { FaAnglesLeft } from "react-icons/fa6";
export default function Custom404() {
   return (
      <div>
         <div className="flex flex-col justify-center items-center h-screen bg-primary">
            <h1 className="text-[150px] text-white font-semibold leading-[100%]">404</h1>
            <h2 className="text-white text-[35px] font-semibold">
               Oops! Página não encontrada!
            </h2>
            <Link className="flex items-center gap-3 text-[18px] font-semibold mt-10 bg-secondary text-primary-dark rounded-[80px] p-6" href="/">
               <FaAnglesLeft />
               Voltar para a página inicial
            </Link>
         </div>
    </div>
   )
}