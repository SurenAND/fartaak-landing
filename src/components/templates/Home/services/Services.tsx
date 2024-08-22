import { services } from "@/src/components/templates/Home/services/data";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 py-5" id="services">
      {/* title */}
      <h3 className="text-xl font-bold relative after-border-ftGreen text-nowrap max-w-fit">
        خدمات ما:
      </h3>
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-primary/50 rounded-lg p-8 sm:p-12 lg:p-16"
            >
              <Image
                src={service.src}
                alt={service.alt}
                className="w-20 sm:w-24 lg:w-[120px]"
              />
              <p className="text-center text-lg font-bold text-white">
                {service.text}
              </p>
              <p className="text-center text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
