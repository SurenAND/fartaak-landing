import logo from "@/src/assets/images/about-us-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="bg-gray-950 text-white px-5 py-10" id="about-us">
      <div className="container mx-auto flex flex-col lg:flex-row justify-start items-center lg:items-start gap-8 lg:gap-40">
        {/* title */}
        <h3 className="text-xl font-bold relative after-border-ftGreen text-nowrap mb-4 lg:mb-0">
          درباره ما:
        </h3>
        {/* text */}
        <div className="flex flex-col gap-4 max-w-xl">
          <p className="text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <p className="text-sm">
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد
          </p>
          <div className="flex items-center gap-2">
            <FaChevronLeft className="text-ftGreen" />
            <Link href="/" className="text-xs text-ftGreen">
              بیشتر بخوانید
            </Link>
          </div>
        </div>
        {/* logo */}
        <Image
          src={logo}
          alt="logo"
          className="w-36 h-16 lg:w-48 lg:h-20 mt-4 lg:mt-0"
        />
      </div>
    </div>
  );
};

export default AboutUs;
