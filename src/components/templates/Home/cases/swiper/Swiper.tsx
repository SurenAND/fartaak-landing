// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { cases } from "@/src/components/templates/Home/cases/swiper/data";
import Image from "next/image";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

const CaseSwiper = () => {
  return (
    <div className="flex flex-col gap-4 bg-primary/70 rounded-lg p-8 text-white w-full lg:w-2/3">
      <h3 className="text-xl font-bold relative after-border-ftGreen text-nowrap max-w-fit">
        پرونده های موفق
      </h3>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        initialSlide={1}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {cases.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-2/3 flex flex-col gap-7">
              <h4 className="text-xl font-bold text-black">{item.title}</h4>
              <p className="text-sm">{item.description1}</p>
              <p className="text-sm">{item.description2}</p>
            </div>
            <div className="w-52">
              <Image src={item.img} alt={item.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaseSwiper;
