import logo1 from "../images/image 27.png";
import logo2 from "../images/image 28.png";
import logo3 from "../images/image 29.png";
import logo4 from "../images/image 30.png";
import logo5 from "../images/image 31.png";


export default function Logs() {
  return (
    <section className=" py-4 px-6 my-7">
      <div className="flex flex-wrap justify-evenly items-center gap-8">
        <img src={logo1}  className="h-25 "/>
        <img src={logo2}  className="h-25 "/>
        <img src={logo3}  className="h-25 "/>
        <img src={logo4}  className="h-25"/>
        <img src={logo5}  className="h-25"/>

      </div>
    </section>
  );
}