import Navbar from "../../components/navbar/navMenu";

const FontPage = () => {
  return (
    <div className="bg-purple-100 min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="font-bold text-purple-900 mt-1 mb-3">
          Fonts I might use for the Ladies Club site
        </h1>
        <div className=" bg-pink-200 rounded-4xl shadow-md border-purple-300 border-b-5 p-11 w-[600px] h-[400px] mb-5 ">
          <h2 className="loverine-font">Font 1: Ladies club </h2>
          <h2 className="loverine-font">Font Name : Loverine</h2>
          <h2 className="text-lg mt-5">
            Perspective: I like this font for it's elegant but fun and when I
            think of Ladies club I think of this elegance fun club. The downside
            I see with this font is that it can possibly be difficult to read
            for some who find it difficult to read cursive. I can see this being
            a font used on occasion but not for the whole site.
          </h2>
        </div>
        <div className="bg-pink-200 rounded-4xl shadow-md border-purple-300 border-b-5 p-11 w-[600px] h-[400px] mb-5">
          <h2 className="freshbaked-font">Font 2: Ladies club </h2>
          <h2 className="freshbaked-font">Font Name : Fresh Baked</h2>
          <h2 className="text-lg mt-5">
            Perspective: I like this font for also embodies a sort of elegance
            although the difference here is its more readable. I had my friend
            who doesn't know how to read curvsive read a sentence in this font
            and they were able to read it without issue. An insight they gave me
            was that although this font is more readable they prefered the first
            font because it was nicer to look at.
          </h2>
        </div>
        <div className="bg-pink-200 rounded-4xl shadow-md border-purple-300 border-b-5 p-11 w-[600px] h-[400px] mb-5">
          <h2 className="pwmas-font">Font 3: Ladies club </h2>
          <h2 className="pwmas-font">Font Name : Please write me a song</h2>
          <h2 className="text-lg mt-5">
            Perspective: This font is very different from the first two but I
            enjoy this font because it's very readable and simple. Although it
            doesn't have the same pop factor as the initial two fonts I
            appreciate the simplicity of the font and it feels very subtly
            elegant.
          </h2>
        </div>
      </div>
    </div>
  );
};
export default FontPage;
