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
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
      {/* Weather Widget */}
      <div className="flex flex-col bg-pink-200 rounded-4xl shadow-md border-purple-300 border-b-5 p-11 w-[555px] h-[495px]">
        <a
          className="weatherwidget-io mt-6"
          href="https://forecast7.com/en/45d52n122d99/hillsboro/"
          data-label_1="HILLSBORO"
          data-label_2="WEATHER"
          data-theme="pure"
        >
          HILLSBORO WEATHER
        </a>
        <h2 className="wondercity-font text-lg font-bold text-purple-900 mt-15 mb-3">
          {" "}
          Click above to be redirected to the forecast website to see the
          current weather in my town of Hillsboro.
        </h2>
      </div>

      {/* Instagram Widget */}
      <div className="bg-pink-200 rounded-4xl shadow-md border-purple-300 border-b-5 p-6 w-[557px] h-[495px] flex flex-col justify-center items-center text-center overflow-hidden">
        <h2 className="wondercity-font text-lg font-bold text-purple-800 mb-2">
          Follow OFOSA on Instagram :D
        </h2>

        {/* Embed actual Instagram */}
        <div className="w-full max-w-xs rounded-lg ">
          <InstagramEmbed url="https://www.instagram.com/ofosa/" width={338} />
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
