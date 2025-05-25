import karla from "../../assets/slideshow/Grandma.JPG";

const KarlaBio = () => {
  const myPhoto = karla;
  return (
    <div className="overflow-hidden bg-pink-200 min-h-[200px] border-b-3 border-purple-300 items-center justify-center mt-10 p-6 rounded-4xl mx-auto md:max-w-6xl">
      <div className="flex flev-col md:flex-row items-center justify-center gap-25 text-center md:text-left">
        <div className="flex-shrink-0">
          <img
            src={myPhoto}
            alt=" Karla Photo "
            className="h-[300px] w-auto rounded-2xl object-contain"
          />
        </div>
        <div className="text-purple-900 max-w-xl">
          <h2 className="text-3xl font-bold mb-4">
            {" "}
            Hi, my name is Karla Martinez{" "}
          </h2>
          <p className="text-lg leading-relaxed">
            I'm a passionate web developer with a love for my dog Kiwi, as shown
            in the slideshow below. I will be graduating this coming June 2025
            from Portland State University with my Bachelor's of Science in
            Computer Science. Throughout my time at PSU I tutored incoming
            Computer Science students to succeed. I would love to flex all that
            I've learned at my time as a student in a real world setting like
            assisting the Ladies Club with their Web Development endevors. I
            hope this simple website displays my eagerness to learn and grow
            alongside a team of other professionals.
          </p>
        </div>
      </div>
    </div>
  );
};
export default KarlaBio;
