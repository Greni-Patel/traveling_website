
import t1 from "../images/t1.png"; 
import t2 from "../images/t2.png"; 
import t3 from "../images/t3.png"; 
import girl from "../images/girl.jpg"; 

const TripSteps = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1">
                <p className="text-sm text-[#5E6282] font-semibold mb-2">Easy and Fast</p>
                <h2 className="text-4xl font-extrabold text-[#14183E] mb-10 leading-tight">
                    Book Your Next Trip <br /> In 3 Easy Steps
                </h2>
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12  flex items-center justify-center rounded-lg">
                            <img src={t1} alt="Destination" className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#5E6282]">Choose Destination</h4>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                            <img src={t2} alt="Payment" className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#5E6282]">Make Payment</h4>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12  flex items-center justify-center rounded-lg">
                            <img src={t3} alt="Airport" className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#5E6282]">Reach Airport on Selected Date</h4>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex justify-center">
                <div className="relative bg-white shadow-xl rounded-3xl p-4 w-[320px]">
                    <img
                        src={girl}
                        alt="Trip to Greece"
                        className="rounded-xl w-full h-40 object-cover"
                    />
                    <h3 className="text-lg font-semibold mt-4">Trip To Greece</h3>
                    <p className="text-sm text-gray-400 mt-4">14-29 June | by Robbin</p>
                    <p className="text-sm text-gray-500"> 24 people going</p>
                </div>
            </div>
        </section>
    );
};

export default TripSteps;
