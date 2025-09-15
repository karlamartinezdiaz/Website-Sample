import Navbar from "../../components/navbar/navMenu";

const ExperiencePage = () => {
  return (
    <div className="bg-purple-100 min-h-screen w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 md:p-8">

        {/* Font Card Template */}
        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h1 className="text-center underline pwmas-font text-lg md:text-xl">
            Onpoint Credit Union 
          </h1>
          <p className="text-center pwmas-font text-base">
            Information Technology - PC Technician
          </p>
          <p className="text-center pwmasmall-font text-sm md:text-base mt-4 leading-relaxed">
            July 2025 - Current 
          </p>
          <p className="pwmasmall-font text-sm md:text-base mt-4 leading-relaxed">
            Deploying over 200 Windows 11 laptops by imaging them and/or using our EMP. 
            Troubleshooting issues relating to imaging. Worked through a ticketing system
            with one other employee where we managed our own schedule and assigned our own 
            tickets to ourselves. 

          </p>
        </div>
        
        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h2 className="text-center underline pwmas-font text-lg md:text-xl">
            Portland State University 
          </h2>
          <h2 className="text-center pwmas-font text-base md:text-lg">
            Computer Science Tutor
          </h2>
          <p className="pwmasmall-font text-center text-sm md:text-base mt-4 leading-relaxed">
            September 2023 - June 2025
          </p>
          <p className="pwmasmall-font text-sm md:text-base mt-4 leading-relaxed">
            Facilitated labs for over 200 students under the Maseeh College of Engineering and Computer Science 
            in the required C++ sequence, this involved introducing students to new concepts related to Object-Oriented Programming.
            Mentoring over 100 + students by providing technical guidance for academic & professional success in Computer Science related fields
          </p>
        </div>
        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h2 className="text-center underline pwmas-font text-lg md:text-xl">
            Rivermard Credit Union formerly Advantis CU  
          </h2>
          <h2 className="text-center pwmas-font text-base md:text-lg">
            Information Technology Intern
          </h2>
          <p className="pwmasmall-font text-center text-sm md:text-base mt-4 leading-relaxed">
            June 2024 - August 2024
          </p>
          <p className="pwmasmall-font text-sm md:text-base mt-4 leading-relaxed">
          Provided IT support for the credit union’s infrastructure, applying AWS training to 
          real-world scenarios.Managed service tickets, assisted with daily operations across 
          four IT teams, shadowed PC assembly, and securely handled sensitive data disposal.
          Led discussions with professionals regarding the structure of future projects 
          relating to automation.
          </p>
        </div>

        <div className="bg-pink-200 rounded-3xl shadow-md border-purple-300 border-b-4 p-6 w-full max-w-lg min-h-[200px] mb-6">
          <h2 className="text-center underline pwmas-font text-lg md:text-xl">
            Thermo Fisher Scientific  
          </h2>
          <h2 className="text-center pwmas-font text-base md:text-lg">
            Electron Test Technician
          </h2>
          <p className="text-center pwmasmall-font text-sm md:text-base mt-4 leading-relaxed">
            January 2024 - June 2024 
          </p>
          <p className="text-center pwmasmall-font text-sm md:text-base mt-4 leading-relaxed">
            Collected test data for the built in database used (Summit) to analyze data of over 
            600 + units per quarter to make processing decisions. 
            Collaborated alongside engineers to conduct experiments to refine methods and procedures 
            to control or modify the manufacturing process.
            Performed end-to-end testing to detect and resolve defects, ensuring adherence to quality standards.

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