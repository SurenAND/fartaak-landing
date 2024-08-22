import hero from "@/src/assets/images/hero.webp";
import offer from "@/src/assets/images/offer.jpg";
import ImageSlider from "@/src/components/shared/slider/Slider";

const Images = () => {
  const slides = [
    { url: offer.src, title: "عنوان 1" },
    { url: hero.src, title: "عنوان 2" },
    { url: offer.src, title: "عنوان 3" },
    { url: hero.src, title: "عنوان 4" },
    { url: offer.src, title: "عنوان 5" },
  ];
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <h3 className="text-xl font-bold relative after-border-ftGreen text-nowrap max-w-fit">
        تصاویر:
      </h3>
      <div className="w-full h-[350px] my-5 mx-2">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Images;
