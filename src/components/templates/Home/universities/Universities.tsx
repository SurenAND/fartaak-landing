import Image from "next/image";

import Uni1 from "@/src/assets/images/universities/u-1.png";
import Uni2 from "@/src/assets/images/universities/u-2.png";
import Uni3 from "@/src/assets/images/universities/u-3.png";
import Uni4 from "@/src/assets/images/universities/u-4.png";
import Uni5 from "@/src/assets/images/universities/u-5.png";

const Universities = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-200 py-5">
      <div className="container mx-auto">
        {/* title */}
        <h3 className="text-xl font-bold relative after-border-ftGreen text-nowrap max-w-fit">
          دانشگاهها:
        </h3>
        <div className="py-8">
          <div>
            <div className="grid grid-cols-5 place-items-center gap-3 opacity-50">
              <Image src={Uni1} alt="Uni1" className="w-[120px]" />
              <Image src={Uni2} alt="Uni2" className="w-[120px]" />
              <Image src={Uni3} alt="Uni3" className="w-[120px]" />
              <Image src={Uni4} alt="Uni4" className="w-[120px]" />
              <Image src={Uni5} alt="Uni5" className="w-[120px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
