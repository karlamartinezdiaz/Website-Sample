//import { useTranslation } from "react-i18next";
//import tailwindcss from "@tailwindcss/vite";
import Kiwi1 from "../../assets/slideshow/kiwi/Kiwi1.jpg";
//import Kiwi1 from "@/assets/slideshow/kiwi/Kiwi1.jpg";
import Kiwi2 from "../../assets/slideshow/kiwi/Kiwi2.jpg";
import Kiwi3 from "../../assets/slideshow/kiwi/Kiwi3.jpg";
import Kiwi4 from "../../assets/slideshow/kiwi/Kiwi4.jpg";
import Kiwi5 from "../../assets/slideshow/kiwi/Kiwi5.jpg";
import Kiwi6 from "../../assets/slideshow/kiwi/Kiwi6.jpg";

//const imagePaths: string[] = [Kiwi1, Kiwi2, Kiwi3, Kiwi4, Kiwi5, Kiwi6];
const Slideshow = () => {
  const kiwiPhotos = [Kiwi1, Kiwi2, Kiwi3, Kiwi4, Kiwi5, Kiwi6];

  return (
    <div className="overflow-hidden bg-pink-200 min-h-[200px] border-b-3 border-purple-300 items-center justify-center mt-10 p-6 rounded-4xl mx-auto md:max-w-6xl">
      <div className="flex animate-scroll gap-8 w-max">
        {kiwiPhotos.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Kiwi photo ${index + 1}`}
            className="h-[300px] w-auto rounded-2xl object-contain"
          />
        ))}

        {kiwiPhotos.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Kiwi Photo ${index + 1}`}
            className="h-[300px] w-auto rounded-2xl object-contain"
          />
        ))}
      </div>
    </div>
  );
};
export default Slideshow;
