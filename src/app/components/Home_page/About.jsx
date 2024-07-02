import img from "../../../asset/imgs/dental.jpg";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
function About() {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto my-20">
      <div className="relative">
        <Image
          className="rounded-tr-[100px] rounded-bl-[100px]  border-b-[15px] border-primary"
          src={img}
          alt={"about-img"}
          height={600}
          width={600}
        />
        <div className=" absolute -top-16 bg-base-100 shadow-md rounded-3xl p-3 space-y-2 -left-16 w-48 text-center ">
          <div className="flex items-center justify-center">
            <div className=" flex items-center justify-center p-3 bg-[#fff0cc] rounded-xl">
              <FaUserDoctor className="text-2xl text-secondary" />
            </div>
          </div>
          <h3 className=" text-lg font-semibold">24 Hour Doctor</h3>
          <p className=" text-sm">We Provide the best medical Services</p>
        </div>
      </div>
      <div className=" space-y-4">
        <p className="text-secondary text-lg tracking-widest">
          --More About Us--
        </p>

        <h1 className="text-4xl font-semibold text-gray-800">
          The best Dentel Clinic That You Can Trust
        </h1>
        <p className="text-gray-500">
          Dental care, or dentistry, is a branch of medicine that focuses on the
          diagnosis, treatment, and prevention of diseases and conditions of the
          oral cavity, including the teeth, gums, and supporting structures.
        </p>
        <div className=" space-y-3">
          <h4 className="flex items-center gap-2 ">
            <FaCheckCircle className="text-primary text-2xl" />
            <span className="text-xl font-medium text-gray-800">Modern Equipment</span>
          </h4>
          <h4 className="flex items-center gap-2 ">
            <FaCheckCircle className="text-primary text-2xl" />
            <span className="text-xl font-medium text-gray-800">Easy Online Appointment</span>
          </h4>
          <h4 className="flex items-center gap-2 ">
            <FaCheckCircle className="text-primary text-2xl" />
            <span className="text-xl font-medium text-gray-800">Comfortable Clinic</span>
          </h4>
          <h4 className="flex items-center gap-2 ">
            <FaCheckCircle className="text-primary text-2xl" />
            <span className="text-xl font-medium text-gray-800">Always Monitored</span>
          </h4>
        </div>
        <button className=" btn btn-primary text-white transition hover:scale-x-110">Learn More</button>
      </div>
    </div>
  );
}

export default About;
