import logo from "@/src/assets/images/fartaak-logo.png";
import whatsapp from "@/src/assets/images/whatsapp-icon.webp";
import { navItems } from "@/src/components/layout/main-layout/header/data";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";


const Header = () => {
  // slug
  const router = useRouter();
  const slug = router.asPath.split("/")[1];

  // states
  const [activeNavLink, setActiveNavLink] = useState<string | undefined>(slug);

  // functions
  const handleClick = (item: string) => {
    setActiveNavLink(item);
  };

  return (
    <header className="flex items-end justify-center h-20">
      <div className="flex items-end justify-end relative w-[120px]">
        {/* logo */}
        <Image src={logo} alt="logo" className="absolute start-[50%] z-10" />
        <div className="w-4 h-8 aspect-square clip-polygon-0 bg-gray-200"></div>
      </div>
      <div className="lg:w-2/3 h-8 flex justify-between items-center bg-gray-200">
        {/* empty space for logo */}
        <div className="w-20 h-1"></div>
        {/* nav */}
        <ul className="flex items-center gap-16 text-sm">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`text-gray-600 cursor-pointer ${
                activeNavLink === item.href
                  ? "border-b-4 border-primary font-black"
                  : ""
              }`}
              onClick={() => handleClick(item.href)}
            >
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
        {/* social & search */}
        <div className="flex items-center gap-4">
          {/* social */}
          <Image src={whatsapp} alt="whatsapp" className="w-6 h-6" />
          {/* search */}
          <div className="w-60 h-8 bg-secondary flex items-center gap-2 px-3">
            <IoSearch className="w-4 h-4 text-white rotate-90 flex-shrink-0" />
            <input
              type="text"
              placeholder="جستجو"
              className="w-full bg-purple-400/80 px-2 rounded-full text-white text-sm placeholder-white focus:outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;