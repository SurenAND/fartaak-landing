import { articles } from "@/src/components/templates/Home/articles/data";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";

const Articles = () => {
  return (
    <div className="flex flex-col gap-4 p-5 container mx-auto" id="articles">
      <h3 className="text-xl font-bold relative after-border-ftGreen text-nowrap max-w-fit">
        گزیده مقالات:
      </h3>
      {/* Recent News section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-10 lg:w-3/4 lg:mx-auto">
        {/* Blog Card */}
        {articles?.map((article) => (
          <div key={article?.id} className="bg-gray-200 rounded-md">
            {/* Image section */}
            <div className="mb-2 overflow-hidden rounded-t-md">
              <Image
                src={article?.image}
                alt={article?.title}
                className="h-[220px] w-full object-cover duration-500 hover:scale-105"
              />
            </div>

            {/* Content section */}
            <div className="space-y-2 p-4">
              <div className="flex items-center gap-1">
                <FaChevronLeft className="text-primary" />
                <p className="line-clamp-1 font-black text-lg">
                  {article?.title}
                </p>
              </div>
              <p className="line-clamp-5 text-sm text-gray-600">
                {article?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
