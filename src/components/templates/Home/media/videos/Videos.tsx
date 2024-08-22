import hero from "@/src/assets/images/hero.webp";
import offer from "@/src/assets/images/offer.jpg";
import ImageSlider from "@/src/components/shared/slider/Slider";

const Videos = () => {
  const slides = [
    { url: offer.src, title: "عنوان 1" },
    { url: hero.src, title: "عنوان 2" },
    { url: offer.src, title: "عنوان 3" },
    { url: hero.src, title: "عنوان 4" },
    { url: offer.src, title: "عنوان 5" },
  ];
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-xl font-bold relative after-border-ftGreen text-nowrap max-w-fit">
        ویدیوها:
      </h3>
      <div className="w-[600px] h-[350px] my-5 mx-2">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Videos;
