import Navbar from "../../components/navbar/navMenu";

const FontPage = () => {
  return (
    <div className="bg-purple-100 min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 md:p-8">
        <h1 className="font-bold text-purple-375 mt-1 mb-5 text-center text-xl md:text-2xl">
          Fonts I might use for the Ladies Club site
        </h1>

        {/* Font Card Template */}
        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h2 className="loverine-font text-lg md:text-xl">
            Font 1: Ladies club
          </h2>
          <h2 className="loverine-font text-base md:text-lg">
            Font Name: Loverine
          </h2>
          <p className="text-sm md:text-base mt-4 leading-relaxed">
            Perspective: I like this font for its elegant but fun feel. When I
            think of Ladies Club, I imagine this kind of vibe. The downside is
            it might be hard to read for some people who struggle with cursive.
            I’d likely use it occasionally but not throughout the whole site.
          </p>
        </div>

        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h2 className="freshbaked-font text-lg md:text-xl">
            Font 2: Ladies club
          </h2>
          <h2 className="freshbaked-font text-base md:text-lg">
            Font Name: Fresh Baked
          </h2>
          <p className="text-sm md:text-base mt-4 leading-relaxed">
            Perspective: This font is also elegant and more readable. A friend
            who struggles with cursive was able to read this one easily. Though
            they preferred the first font visually, this one is more accessible.
          </p>
        </div>

        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h2 className="pwmas-font text-lg md:text-xl">Font 3: Ladies club</h2>
          <h2 className="pwmas-font text-base md:text-lg">
            Font Name: Please write me a song
          </h2>
          <p className="text-sm md:text-base mt-4 leading-relaxed">
            Perspective: This font is very different from the intial two fonts
            its simple, but more readable, and subtly elegant. It doesn’t have
            the same flair, but its clarity makes it a strong contender for body
            text or larger sections of text that need to be conveyed clearly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FontPage;
