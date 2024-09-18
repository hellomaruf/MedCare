'use client'
import doctor1 from '../../assets/Images/doctor1.png'
import doctor2 from '../../assets/Images/doctor2.png'
import doctor3 from '../../assets/Images/doctor3.png'
import Image from 'next/image';

function Doctors() {
  const doctorsInfo = [
    {
      "name": "Dr. Sarah Ahmed",
      "designation": "Cardiologist",
      "rating": 4.8,
      "location": "Dhaka, Bangladesh",
      "appointment": "Monday to Friday, 10 AM - 2 PM",
      "charge": "$100 per consultation",
      "img": 'https://i.ibb.co.com/1ZjTm85/doctor1.png'
    },
    {
      "name": "Dr. Michael Tan",
      "designation": "Orthopedic Surgeon",
      "rating": 4.7,
      "location": "Kuala Lumpur, Malaysia",
      "appointment": "Tuesday, Thursday, Saturday, 9 AM - 12 PM",
      "charge": "$150 per consultation",
      "img": "https://i.ibb.co.com/9sCvzGt/doctor2.png"
    },
    {
      "name": "Dr. Priya Menon",
      "designation": "Dermatologist",
      "rating": 4.9,
      "location": "Chennai, India",
      "appointment": "Monday to Friday, 11 AM - 3 PM",
      "charge": "$80 per consultation",
      "img": "https://i.ibb.co.com/WPNyDJt/doctor3.png"
    }
  ]

  console.log(doctorsInfo?.img)
  return (
    <div>
      <div className="mt-20">
        <h3 className="text-4xl font-semibold text-gray-800 text-center">
          Our Expert Doctors
        </h3>
        <div className="grid grid-col-3">
{
  doctorsInfo?.map((item, index) => (
    <div className="" key={index}>
      <div className="">
      <Image 
  src={item?.img}
  alt="img"
  width={500} // Image width
  height={300} // Image height
/>
<h2>{item?.name}</h2>
      </div>
    </div>
  ))
}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
