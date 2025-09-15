import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
//import { FiPhone, FiMail, FiGlobe, FiMapPin, FiClock } from "react-icons/fi";
import Navbar from "../../components/navbar/navMenu";
import GoogleFormEmbed from "../../components/contact/googleForm";

const ContactMePage = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    //public key - fine to show - this key is to my school email
    //we can change it to litteleinstein email when it registers on web3forms
    //https://web3forms.com/
    formData.append("access_key", "9c67854e-7a1d-46b2-b5ee-fb0eb8feac13");
    formData.append("subject", "New Message from LadiesClub Webpage");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      setStatus(t("Successfully sent"));
      if (formRef.current) {
        formRef.current.reset();
      }
      setTimeout(() => setStatus(""), 6000);
    } else {
      setStatus(t("Error"));
    }
  };

  const myGoogleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfA-81rkSwOCOsBlNrAwhPOWMwpujHE9uuJTZ9SejzPkNeHYw/viewform?usp=sharing&ouid=100196195511915061729";

  return (
    <div className="bg-purple-100 min-h-screen p-full">
      <Navbar />
      <h2 className="text-3xl font-bold text-black m-6 text-center max-w-5xl mx-auto">
        {t("Contact Me!")}
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-gray-700">
        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-pink-200 shadow-md border-b-3 border-purple-300 rounded-xl p-4"
        >
          <p className="text-xl font-bold">
            Write me a message! Message written will be sent to my personal
            email. This could be redirected to any other email. (^-^){" "}
          </p>
          <input
            name="name"
            type="text"
            placeholder={t("Name")}
            className="w-full p-3 border border-gray-400 bg-gray-100 rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder={t("Email")}
            className="w-full p-3 border border-gray-400 bg-gray-100 rounded"
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder={t("Phone Number")}
            className="w-full p-3 border border-gray-400 bg-gray-100 rounded"
            required
          />
          <textarea
            name="message"
            placeholder={t("Message for the Ladies club :) ")}
            className="w-full p-3 border border-gray-400 bg-gray-100 rounded min-h-[150px]"
            required
          />
          <button
            type="submit"
            className="block px-5 md:py-1 font-semibold whitespace-nowrap shadow-md bg-white text-[#003366] border border-[#003366] hover:bg-[#2A9D8F] hover:text-white rounded-xl hover:shadow-md transform transition duration-300"
          >
            {t("Send")}
          </button>

          <div className="min-h-[1.5rem]">
            <p
              className={`transition-all duration-600 overflow-hidden text-sm font-semibold ${
                status ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
              }`}
            >
              {status}
            </p>
          </div>
        </form>

        {/* Google form  */}
        <div className="space-y-2 bg-pink-200 p-4 shadow-md border-b-3 border-purple-300 rounded-xl text-gray-700">
          <h2 className="text-2xl font-bold text-black"></h2>

          <div className="w-full h-[600px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <GoogleFormEmbed
              formUrl={myGoogleFormUrl}
              width="100%"
              height="100%"
              title="Google form"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
