import Navbar from "../../components/navbar/navMenu";

const ExperiencePage = () => {
  return (
    <div className="bg-purple-100 min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 md:p-8">
        <h2 className="font-bold text-3xl text-purple-1000 mt-1 mb-5 text-center">
          This is some of my relevant work history 
        </h2>

        {/* Font Card Template */}
        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h2 className="loverine-font text-lg md:text-xl">
            Font 1: Sample
          </h2>
          <h2 className="loverine-font text-base md:text-lg">
            Font Name: Loverine
          </h2>
          <p className="text-sm md:text-base mt-4 leading-relaxed">
            sample sample 
          </p>
        </div>

        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h2 className="freshbaked-font text-lg md:text-xl">
            Font 2: Sample
          </h2>
          <h2 className="freshbaked-font text-base md:text-lg">
            Font Name: Fresh Baked
          </h2>
          <p className="text-sm md:text-base mt-4 leading-relaxed">
            Sample Sample
          </p>
        </div>

        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h2 className="pwmas-font text-lg md:text-xl">
            Font 3: Sample
          </h2>
          <h2 className="pwmas-font text-base md:text-lg">
            Font Name: Please write me a song
          </h2>
          <p className="text-sm md:text-base mt-4 leading-relaxed">
            Sample Sample
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
/*import Navbar from "../../components/navbar/navMenu";


const experiencePage = () => {
    return(
        <div className="bg-purple-100 min-h-screen w-full">
            <Navbar />
            <div className="flex flex-col items-center justify-center p-4 md:p-8">
                <h1 className="font-bold text-purple-300 mt-1 mb-5 text-center text-xl md:text-2xl">
                    What I've done (^-^)
                </h1>
        </div>
    );
};
*/