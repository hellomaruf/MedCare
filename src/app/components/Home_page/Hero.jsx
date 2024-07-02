import Image from "next/image";
import heroImg from "../../../asset/imgs/doctor-hero.png";
import heroImg1 from "../../../asset/imgs/heroImg1.png";
import heroImg2 from "../../../asset/imgs/heroImg2.png";
import heroImg3 from "../../../asset/imgs/heroImg3.png";
import { AiFillLike } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

function Hero() {
  return (
    <div className="z-10 relative bg-gradient-to-t from-[#ffff] to-[#daf1ff] bg-opacity-10 pt-24">
      <div className=" max-w-7xl mx-auto grid grid-cols-8  items-center justify-center ">
        <div className=" space-y-3 z-10 col-span-5 ">
          <p className="text-secondary text-lg tracking-widest">--Work With Us--</p>
          <h2 className="text-6xl text-gray-800 font-semibold">
            Become Reason of{" "}
            <span className="bg-gradient-to-r from-[#2189CC]  to-[#4AC7B8] inline-block text-transparent bg-clip-text">
              Thousand Smiles
            </span>
          </h2>
          <p>
            Your health is our priority. At MedCare, we provide top-notch
            medical services with a team of experienced professionals dedicated
            to your well-being. Book an appointment today and experience
            compassionate care.
          </p>
          <div className="">
            <button className="btn btn-primary text-white transition hover:scale-x-110">
              All Services
            </button>
          </div>
          <div className=" flex items-center gap-8 py-8">
            <div className=" flex items-center gap-2">
              <div className=""><FaLocationDot className="text-2xl text-primary" /></div>
              <div className="">
                <h2 className="text-xl font-semibold text-gray-700">Address</h2>
                <p>Shodor-Road, Barishal</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
            <div className=""><MdOutlineAccessTimeFilled className="text-2xl text-primary" /></div>
              <div className="">
                <h2 className="text-xl font-semibold text-gray-700">Opening Hours</h2>
                <p>Mon-Fri , 8.00 - 11.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 relative ">
          <Image
            className=""
            src={heroImg}
            alt="hero-img"
            height={800}
            width={800}
                  />
                  <div className=" flex absolute top-28 -left-12 items-center justify-center gap-3 bg-base-100 rounded-2xl shadow-md p-6">
                      <div className=" p-3 bg-[#fff0cc] rounded-xl">
                      <AiFillLike className="text-2xl text-secondary" />
                      </div>
                      <div className="">
                          <h2 className='text-xl font-semibold'>15000+</h2>
                          <p>Happy Patients</p>
                      </div>
                  </div>
          {/* <Image className="absolute bottom-2 -z-0" src={heroImg3} alt="hero-img" height={200} width={200} /> */}
        </div>
      </div>
      <div className="">
        {/* <Image
          className="absolute top-0 "
          src={heroImg1}
          alt="hero-img"
          height={200}
          width={200}
        />
        <Image
          className="absolute top-32 z-0 left-[500px] "
          src={heroImg2}
          alt="hero-img"
          height={200}
          width={200}
        /> */}
      </div>
    </div>
  );
}

export default Hero;
