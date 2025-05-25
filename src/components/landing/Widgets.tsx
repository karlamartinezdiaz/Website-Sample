import { useEffect } from "react";
import Insta from "../../assets/Instagram.png";

const Widgets = () => {
  const InstaPhoto = Insta;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://weatherwidget.io/js/widget.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
      {/* Weather Widget */}
      <div className="bg-pink-200 rounded-4xl shadow-md p-11 w-[575px] h-[300px]">
        <a
          className="weatherwidget-io"
          href="https://forecast7.com/en/45d52n122d99/hillsboro/"
          data-label_1="HILLSBORO"
          data-label_2="WEATHER"
          data-theme="pure"
        >
          HILLSBORO WEATHER
        </a>
      </div>

      {/* Instagram Widget (styled preview) */}
      <div className="bg-pink-200 rounded-4xl shadow-md p-6 w-[575px] h-[300px] flex flex-col justify-center items-center text-center">
        <img
          //src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          src={InstaPhoto}
          alt="Instagram"
          className="w-50 h-50 mb-6"
        />
        <h2 className="text-lg font-bold text-purple-800 mb-2">
          Follow Me on Instagram
        </h2>
        <a
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
