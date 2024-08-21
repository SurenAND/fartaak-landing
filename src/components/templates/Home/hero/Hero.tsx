import HeroImage from "@/src/assets/images/hero.webp";
import hexagon from "@/src/assets/images/hexagon.webp";
import Image from "next/image";
import { LuChevronsLeft } from "react-icons/lu";


const Hero = () => {
  return (
    <div className={`relative overflow-hidden h-80 bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${HeroImage.src})` }}>
        <Image src={hexagon} alt="hexagon" className="absolute -top-20 -right-36 opacity-65" />
        <div className="flex flex-col items-start justify-center gap-4 h-full w-1/4 text-white mx-8">
            <h1 className="text-3xl z-10">یک <span className="text-violet-500 font-black">مشاور خوب </span><span className="text-ftGreen font-bold">ارزشــمند</span> است.</h1>
            <button className="z-10 clip-polygon-hero-btn bg-violet-700 w-44 h-24 flex items-end justify-start py-4 px-2">مشاوره و ارزیابی
                <LuChevronsLeft className="text-2xl" />
            </button>
        </div>
    </div>
  )
}

export default Hero