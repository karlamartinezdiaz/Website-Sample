import { useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const Widgets = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-19 justify-center items-center mt-10">
      {/* Weather Widget */}
      <div className="bg-pink-200 rounded-4xl shadow-md border-purple-300 border-b-6 p-9 w-full max-w-[555px] h-[555px] flex flex-col justify-center items-center text-center overflow-hidden">
        <h2 className="wondercity-big font-bold text-purple-1000 mb-2">
          Follow me on insta  
        </h2>

        {/* Embed actual Instagram */}
        <div className="w-full max-w-xs rounded-lg ">
          <InstagramEmbed url="https://www.instagram.com/pucca.and.friends/" width={328} />
        </div>
      </div>

      {/* Instagram Widget */}
      <div className="bg-pink-200 rounded-4xl shadow-md border-purple-300 border-b-6 p-6 w-full max-w-[555px] h-[555px] flex flex-col justify-center items-center text-center overflow-hidden">
        <h2 className="wondercity-big font-bold text-purple-1000 mb-2">
          Follow OFOSA
        </h2>

        {/* Embed actual Instagram */}
        <div className="w-full max-w-xs rounded-lg ">
          <InstagramEmbed url="https://www.instagram.com/ofosa/" width={328} />
        </div>
      </div>
    </div>
  );
};

export default Widgets;

/* <a
          href="https://www.instagram.com/iamkarlamartinez/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 underline hover:text-pink-700 transition-colors"
        >
          @iamkarlamartinez
        </a>
      </div>
    </div>
  );
};

export default Widgets;
*/
