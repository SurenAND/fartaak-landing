import Images from "@/src/components/templates/Home/media/images/Images";
import Videos from "@/src/components/templates/Home/media/videos/Videos";

const Media = () => {
  return (
    <div className="container mx-auto flex justify-between p-5">
      <Videos />
      <Images />
    </div>
  );
};

export default Media;
