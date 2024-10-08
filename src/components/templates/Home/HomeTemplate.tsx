import AboutUs from "@/src/components/templates/Home/about-us/AboutUs";
import Articles from "@/src/components/templates/Home/articles/Articles";
import Cases from "@/src/components/templates/Home/cases/Cases";
import Hero from "@/src/components/templates/Home/hero/Hero";
import Media from "@/src/components/templates/Home/media/Media";
import Services from "@/src/components/templates/Home/services/Services";
import Universities from "@/src/components/templates/Home/universities/Universities";

const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Universities />
      <Services />
      <Cases />
      <Articles />
      <Media />
    </>
  );
};

export default HomeTemplate;
