import userImg from "../images/Image.png"; 


export default function Testimonials() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5">
      
      <div className="text-left">
        <p className="text-sm font-bold text-gray-500 uppercase">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#14183E] my-3 leading-snug">
          What People Say <br /> About Us.
        </h2>
        
        <div className="mt-9 flex items-center gap-2">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      <div className="relative">
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md relative z-10">
          <img
            src={userImg}
            alt="User"
            className="w-12 h-12 rounded-full border-4 border-white absolute -top-7 left-0 shadow-md"
          />
          <p className="text-gray-600 text-sm mt-6 mb-4">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <h4 className="font-semibold text-gray-500">Mike taylor</h4>
          <p className="text-sm text-gray-600">Lahore, Pakistan</p>
        </div>
      </div>
    </section>
  );
}
