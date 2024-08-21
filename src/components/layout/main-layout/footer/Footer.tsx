import enamad from '@/src/assets/images/e-namad.png';
import logoType from '@/src/assets/images/footer-logo-type.png';
import logo from '@/src/assets/images/footer-logo.png';
import {
  ImportantLinks,
  QuickLinks,
} from '@/src/components/layout/main-layout/footer/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaPhone } from 'react-icons/fa';
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';

export default function Footer() {
  return (
    <div className='dark:bg-gray-950 relative overflow-hidden'>
      <div className='w-10/12 mx-auto'>
        <div className='grid pb-20 pt-5 md:grid-cols-4'>
          {/* company details */}
          <div className='px-4 py-9 w-36 flex flex-col gap-1'>
            {/* logo */}
            <Image src={logoType} alt="logo" className="" />

            {/* address */}
            <p className='text-sm text-white text-pretty text-justify'>مشهـد، ملک آبـاد، خیابــان بزرگمــــهر جنوبـی، حدفــاصل بزرگمــهر، ۹ و ۱۱، پلاک ۱۷۵</p>

             {/* Social links */}
             <div className='flex items-center gap-3 dark:text-gray-400'>
                  <Link href='#'>
                    <FaInstagram className='text-3xl duration-300 text-primary hover:text-secondary w-5 h-5' />
                  </Link>
                  
                  <Link href='#'>
                    <FaYoutube className='text-3xl duration-300 text-primary hover:text-secondary w-6 h-6' />
                  </Link>
                  <Link href='#'>
                    <FaTwitch className='text-3xl duration-300 text-primary hover:text-secondary w-4 h-4' />
                  </Link>
                  <Link href='#'>
                    <FaFacebook className='text-3xl duration-300 text-primary hover:text-secondary w-5 h-5' />
                  </Link>
                </div>
          </div>

            {/* Company Address */}
            <div className='px-4 py-9 w-48 flex flex-col gap-1'>
              {/* E Namad */}
              <Image src={enamad} alt="logo" className="" />

              {/* Contact */}
              <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-3 text-white'>
                  <FaPhone className='text-3xl duration-300 text-primary hover:text-secondary w-4 h-4' />
                  <p className='text-xs'>تلفن: ۰۵۱۳۷۶۰۰۵۴۶</p>
                </div>
                <div className='flex items-center gap-3 text-white'>
                  <FaWhatsapp className='text-3xl duration-300 text-primary hover:text-secondary w-4 h-4' />
                  <p className='text-xs'>واتساپ: ۰۹۱۰۳۱۵۸۲۰۱</p>
                </div>
                <p className='text-xs text-white ps-6'>info@studyadvisor.ir</p>
              </div>
            </div>

          {/* Footer links */}
          <div className='col-span-2 grid grid-cols-2 md:ps-10 mt-5 z-10'>
             {/* Quick links */}
             <div className='px-4 py-8'>
              <ul className='space-y-3'>
                {QuickLinks?.map((data) => (
                  <li key={data?.id} className='flex items-center gap-2'>
                    <FaChevronLeft className='text-ftGreen' />
                    <Link
                      href={data?.links}
                      className='text-gray-600 duration-300 hover:text-black dark:text-gray-400 hover:dark:text-white'
                    >
                      {data?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important links */}
            <div className='px-4 py-8 flex flex-col gap-3'>
               {/* search */}
          <div className="w-60 bg-violet-500 rounded-full flex items-center gap-2 py-1 px-2">
            <IoSearch className="w-4 h-4 text-white rotate-90 flex-shrink-0" />
            <input
              type="text"
              placeholder="جستجو"
              className="w-full  px-2 text-gray-700 text-sm bg-transparent placeholder-gray-700 focus:outline-none"
            />
          </div>
              <ul className='space-y-3'>
                {ImportantLinks?.map((data) => (
                  <li key={data?.id} className='flex items-center gap-2'>
                    <FaChevronLeft className='text-ftGreen' />
                    <Link
                      href={data?.links}
                      className='text-gray-600 duration-300 hover:text-black dark:text-gray-400 hover:dark:text-white'
                    >
                      {data?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* logo */}
      <div className='absolute -top-10 left-[15%] opacity-40'>
        <Image src={logo} alt="logo" className="w-80 h-80" />
      </div>
    </div>
  );
}
