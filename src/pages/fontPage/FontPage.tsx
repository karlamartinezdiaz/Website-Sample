import Navbar from "../../components/navbar/navMenu";

const FontPage = () => {
    return (
    <div className="bg-purple-100 min-h-screen w-full">
        <Navbar />
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl text-purple-900 font-bold mb-5">
                Fonts for the Ladies Club
            </h1>
        </div>
    </div>
    );
};
export default FontPage;