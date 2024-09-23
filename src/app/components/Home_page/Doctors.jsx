"use client";
import Image from "next/image";
import { Rate } from "antd";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

function Doctors() {
  const doctorsInfo = [
    {
      name: "Dr. Sarah Ahmed",
      designation: "Cardiologist",
      rating: 4.8,
      location: "Dhaka, Bangladesh",
      appointment: "Monday to Friday, 10 AM - 2 PM",
      charge: "$100 per consultation",
      img: "https://i.ibb.co.com/1ZjTm85/doctor1.png",
    },
    {
      name: "Dr. Michael Tan",
      designation: "Orthopedic Surgeon",
      rating: 4.7,
      location: "Kuala Lumpur, Malaysia",
      appointment: "Tuesday, Thursday, 9 AM - 12 PM",
      charge: "$150 per consultation",
      img: "https://i.ibb.co.com/9sCvzGt/doctor2.png",
    },
    {
      name: "Dr. Priya Menon",
      designation: "Dermatologist",
      rating: 4.9,
      location: "Chennai, India",
      appointment: "Monday to Friday, 11 AM - 3 PM",
      charge: "$80 per consultation",
      img: "https://i.ibb.co.com/WPNyDJt/doctor3.png",
    },
  ];

  console.log(doctorsInfo?.img);
  return (
    <div>
      <div className="mt-20 mb-16 max-w-7xl mx-auto  ">
        <h3 className="text-4xl font-semibold text-gray-800 text-center">
          Our Expert Doctors
        </h3>
        <p className='text-center max-w-3xl mt-2 mx-auto'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-14 ">
          {doctorsInfo?.map((item, index) => (
            <div className="border-2 rounded-xl p-6" key={index}>
              <div className="">
                <Image src={item?.img} alt="img" width={500} height={300} />
                <div className="mt-6">
                  <h2 className="font-semibold text-lg">{item?.name}</h2>
                  <h4 className="text-gray-600"> {item?.designation}</h4>
                </div>
                <div className="mt-3">
                  <Rate
                    className="text-lg"
                    disabled
                    defaultValue={item?.rating}
                  />
                </div>
                <div className = "my-2">
                <hr />
                </div>
                <div className=" mt-4 space-y-3">

                <div className="flex items-center gap-2 ">
                <IoLocationOutline className=" text-xl  text-gray-600" />
                <h4 className='text-gray-600'>{item?.location}</h4>
                </div>
                <div className="flex items-center gap-2 ">
                <IoCalendarClearOutline className=" text-xl  text-gray-600" />
                <h4 className='text-gray-600'>{item?.appointment}</h4>
                </div>
                <div className="flex items-center gap-2 ">
                <AiOutlineDollar  className=" text-xl  text-gray-600" />
                <h4 className='text-gray-600'>{item?.charge}</h4>
                </div>
                </div>

                <div className="">
                  <button className="btn w-full mt-6  btn-primary text-white transition hover:scale-x-110">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
