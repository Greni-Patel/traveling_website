
import img1 from "../images/Google Play.png"
import img2 from "../images/Play Store.png";

const Footer = () => {
    return (
        <footer className="bg-white py-16 text-sm text-gray-600">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="col-span-2 md:col-span-1">
                    <h1 className="text-3xl font-bold text-[#181E4B] mb-4">Jadoo.</h1>
                    <p className="text-gray-500">
                        Book your trip in minute, get full control for much longer.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-black mb-4 font-bold">Company</h3>
                    <ul className="space-y-2 text-[#5E6282]">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-black mb-4 font-bold">Contact</h3>
                    <ul className="space-y-2 text-[#5E6282]">
                        <li>Help/FAQ</li>
                        <li>Press</li>
                        <li>Affiliates</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-black mb-4 font-bold">More</h3>
                    <ul className="space-y-2 text-[#5E6282]">
                        <li>Airlinefees</li>
                        <li>Airline</li>
                        <li>Low fare tips</li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col items-start space-y-4 mt-6 md:mt-0">
                    <p className="text-[#5E6282] font-medium">Discover our app</p>

                    <div className="flex space-x-2">
                        <img
                            src={img1}
                            alt="Google Play"
                            className="h-10"
                        />
                        <img
                            src={img2}
                            alt="Apple Store"
                            className="h-10"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center text-[#5E6282] text-xs mt-10">
                All rights reserved@jadoo.co
            </div>
        </footer>
    );
};

export default Footer;
