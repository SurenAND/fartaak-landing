import offer from "@/src/assets/images/offer.jpg";
import students from "@/src/assets/images/students.jpg";
import CaseSwiper from "@/src/components/templates/Home/cases/swiper/Swiper";
import Image from "next/image";

const Cases = () => {
  return (
    <div className="bg-gray-300 py-8 px-4 sm:px-8 lg:px-16 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-evenly gap-8">
        <CaseSwiper />
        <div className="flex flex-col justify-evenly gap-8 w-full lg:w-1/2">
          <div className="w-full h-56 sm:h-64 rounded-lg overflow-hidden relative">
            <Image
              src={students}
              alt="students"
              className="w-full h-full object-cover"
            />
            <div className="bg-primary/80 text-white w-full px-5 py-4 absolute bottom-0">
              <h3 className="font-bold">ویزای تحصیلی</h3>
            </div>
          </div>
          <div className="w-full h-56 sm:h-64 rounded-lg overflow-hidden relative">
            <Image
              src={offer}
              alt="offer"
              className="w-full h-full object-cover"
            />
            <div className="bg-primary/80 text-white w-full px-5 py-4 absolute bottom-0">
              <h3 className="font-bold">آفر ویژه فرتاک</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
