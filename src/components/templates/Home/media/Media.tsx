import Images from "@/src/components/templates/Home/media/images/Images";
import Videos from "@/src/components/templates/Home/media/videos/Videos";

const Media = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <Videos />
        <Images />
      </div>
    </div>
  );
};

export default Media;
