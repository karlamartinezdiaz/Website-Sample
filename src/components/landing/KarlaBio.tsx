import karla from "../../assets/slideshow/ProfileWeb.jpg";

const KarlaBio = () => {
  const myPhoto = karla;
  return (
    <div className="w-full max-w-4xl mx-auto px-4 overflow-hidden bg-pink-200 min-h-[100px] border-b-4 border-purple-300 items-center justify-center mt-10 p-6 rounded-3xl mx-auto md:max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
        <div className="w-full md:w-auto mb-6 md:mb-0 flex justify-center  ">
          <img
            src={myPhoto}
            alt="Karla Photo"
            className="w-92 md:w-[380px] rounded-2xl object-cover"
          />
        </div>
        <div className="text-purple-960 max-w-xl">
          <h2 className="wondercity-big text-3xl font-bold mb-4 mt-5">
            Hi, my name is Karla Martinez 
          </h2>
          <p className="wondercity-font text-lg leading-relaxed mt-3">
            I'm a passionate web developer with a love for my recently adopted
            dog Kiwi, as shown in the slideshow below. I have recently graduated
            from Portland State University with my Bachelor's of Science in
            Computer Science. Throughout my time at Portland State I tutored
            incoming Computer Science students to thrive in their course work,
            mainly in C++. I would love to apply all that I've learned at my
            time as a student in a real world setting. This website includes a
            navbar with four different pages and is desktop, tablet and phone
            compatible. I hope this simple website displays my eagerness to
            learn and grow alongside a team of other professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KarlaBio;
