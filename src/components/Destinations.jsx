import romeImg from "../images/Rectangle 1.png";
import londonImg from "../images/Rectangle 2.jpg";
import europeImg from "../images/Rectangle 3.png";
import locationIcon from "../images/navigation 1.png";

export default function Destinations() {
  const destinations = [
    {
      img: romeImg,
      title: "Rome, Italy",
      price: "$5,42k",
      duration: "10 Days Trip",
    },
    {
      img: londonImg,
      title: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
    },
    {
      img: europeImg,
      title: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-center">
      <p className="text-sm text-gray-500 font-bold">Top Selling</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 my-3">
        Top Destinations
      </h2>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="rounded-2xl  shadow-lg  mx-auto w-full max-w-xs text-left"
          >
            <img
              src={place.img}
              alt={place.title}
              className="w-full h-80 "
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-600">
                  {place.title}
                </h3>
                <span className="text-gray-600 font-medium">{place.price}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <img src={locationIcon} alt="Location" className="w-4 h-4" />
                <span>{place.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
