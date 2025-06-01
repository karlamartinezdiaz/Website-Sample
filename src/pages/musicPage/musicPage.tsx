import Navbar from "../../components/navbar/navMenu";

const MusicPage = () => {
  return (
    <div className="bg-purple-100 min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl text-purple-900 font-bold mb-5">
          Top Songs atm
        </h1>
        <div className="w-full max-w-xl aspect-video rounded-4xl overflow-hidden shadow-lg border-4 border-purple-300 mb-5">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/n3nPiBai66M?si=rLveb-Qe9IUoHzXF" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          ></iframe>
        </div>
        <div className="w-full max-w-xl aspect-video rounded-4xl overflow-hidden shadow-lg border-4 border-purple-300 mb-5">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/mHKTdlUyyko?si=dyIb4cm5jC9DUxxR" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          ></iframe>
        </div>
        <div className="w-full max-w-xl aspect-video rounded-4xl overflow-hidden shadow-lg border-4 border-purple-300 mb-5">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Pb_zZ3xItPI?si=M-TTuW0UnVPpPZNo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full max-w-xl aspect-video rounded-4xl overflow-hidden shadow-lg border-4 border-purple-300 mb-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9kqnsoY94L8?si=KyEcvX-h4g1daS-Q"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
