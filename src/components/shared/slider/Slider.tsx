import { useState } from "react";

type SliderProps = {
  slides: { url: string; title: string }[];
};

const ImageSlider = ({ slides }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-full select-none rounded-xl overflow-hidden">
      <div>
        <div
          onClick={goToNext}
          className="absolute top-1/2 -translate-y-1/2 left-8 text-3xl text-white z-10 cursor-pointer"
        >
          ❱
        </div>
        <div
          onClick={goToPrevious}
          className="absolute top-1/2 -translate-y-1/2 right-8 text-3xl text-white z-10 cursor-pointer"
        >
          ❰
        </div>
      </div>
      <div
        className={`w-full h-full rounded-xl bg-cover bg-center`}
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="absolute bottom-0 flex flex-col gap-1 w-full">
        <div className="flex justify-center w-fit mx-auto bg-black/60 rounded-full px-1">
          {slides.map((slide, slideIndex) => (
            <div
              className={`my-0 mx-1 cursor-pointer text-xl ${
                slideIndex === currentIndex ? "text-white" : "text-white/65"
              }`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
        <div className="bg-primary/80 text-white w-full px-5 py-4">
          <h3 className="font-bold text-center">
            {slides[currentIndex].title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
