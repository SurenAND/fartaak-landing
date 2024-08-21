import AboutUs from "@/src/components/templates/Home/about-us/AboutUs";
import Hero from "@/src/components/templates/Home/hero/Hero";
import Services from "@/src/components/templates/Home/services/Services";
import Universities from "@/src/components/templates/Home/universities/Universities";

const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Universities />
      <Services />
    </>
  );
};

export default HomeTemplate;
