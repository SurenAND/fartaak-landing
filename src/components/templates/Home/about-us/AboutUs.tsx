import logo from "@/src/assets/images/footer-logo-type.png"
import Image from "next/image"
import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa6"

const AboutUs = () => {
  return (
    <div className="bg-gray-950 text-white px-5 py-5" id="about-us">
        <div className="flex justify-start items-start gap-40">
            {/* title */}
<h3 className="text-xl font-bold relative after-border-ftGreen text-nowrap">درباره ما:</h3>
            {/* text */}
            <div className="flex flex-col gap-4 max-w-xl">
            <p className="text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            <p className="text-sm">برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            <div className="flex items-center gap-2">
                <FaChevronLeft className="text-ftGreen" />
                <Link href="/" className="text-xs text-ftGreen">بیشتر بخوانید</Link>
            </div>
            </div>
            {/* logo */}
            <Image src={logo} alt="logo" className="w-48 h-20" />
        </div>
    </div>
  )
}

export default AboutUs