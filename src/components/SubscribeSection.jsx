
import fly from "../images/Group 77.png"; 

const SubscribeSection = () => {
    return (
        <section className="relative bg-[#DFD7F9] rounded-tl-3xl p-10 max-w-4xl mx-auto text-center my-16">
             <img
            src={fly}
            alt="User"
            className="w-12 h-12 rounded-full border-4 border-white absolute -top-7 right-0 shadow-md"
          />
            <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
                Subscribe to get information, latest news and other <br /> interesting
                offers about Jadoo
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-3 rounded-lg w-full sm:w-80 "
                />
                <button className="bg-orange-400 text-white px-6 py-3 rounded-lg ">
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default SubscribeSection;
