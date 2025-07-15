import weatherImg from "../images/Group 48.png";
import planeImg from "../images/Group 51.png";
import micImg from "../images/Group 50.png";
import gearImg from "../images/Group 49.png";

export default function Services() {
    const services = [
        {
            img: weatherImg,
            title: "Calculated Weather",
            desc: "Built Wicket longer admire do barton vanity itself do in it."
        },
        {
            img: planeImg,
            title: "Best Flights",
            desc: "Engrossed listening. Park gate sell they west hard for the."
        },
        {
            img: micImg,
            title: "Local Events",
            desc: "Barton vanity itself do in it. Prefer to men it engrossed listening."
        },
        {
            img: gearImg,
            title: "Customization",
            desc: "We deliver outsourced aviation services for military customers"
        },
    ];

    return (
        <section className="py-16 px-6 max-w-7xl mx-auto text-center">
            <p className="text-sm text-gray-500 font-bold tracking-widest uppercase">Category</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 my-3">
                We Offer Best Services
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                    >
                        <div className="flex justify-center mb-4 ">
                            <div className=" p-4 rounded-xl">
                                <img src={service.img} alt={service.title} className="w-12 h-15" />
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 ">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 ">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
