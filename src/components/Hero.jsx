import heroImg from "../images/Traveller 1.png"
import planeImg from "../images/plane.png";
import playImg from "../images/Play button.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-12 max-w-7xl mx-auto flex flex-col md:flex-row  justify-between">
     
      <div className="md:w-1/2 space-y-6 z-10 mt-9">
        <p className="text-sm text-orange-500 font-bold">BEST DESTINATIONS AROUND THE WORLD</p>
        <h1 className="text-5xl font-bold text-[#181E4B] line-height-tight">
          Travel, enjoy <br />
          and live a new <br />
          and full life
        </h1>
        <p className="text-gray-500 max-w-md">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </p>
        <div className="flex items-center gap-6">
          <button className="bg-yellow-400 px-6 py-3 rounded-lg text-white font-semibold">Find out more</button>

          <button className="flex items-center gap-3 text-gray-600 font-medium">
            <div className=" shadow-md p-2 rounded-full">
              <img src={playImg} alt="Play" className="w-6 h-6" />
            </div>
            <span>Play Demo</span>
          </button>
        </div>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 relative z-10">
        <img src={heroImg} alt="Traveler" className="w-full object-cover" />
      </div>


      <img
        src={planeImg}
        alt="Plane 1"
        className="absolute w-16 md:w-20 top-[10%] right-[15%] animate-fly"
      />
      <img
        src={planeImg}
        alt="Plane 2"
        className="absolute w-14 md:w-16 bottom-[20%] right-[30%] animate-fly-slow"
      />
    </section>
  );
}
