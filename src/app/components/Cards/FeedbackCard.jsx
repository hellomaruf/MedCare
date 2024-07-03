import Image from "next/image";
import img from "../../../asset/imgs/random.webp";
import { Rate } from "antd";
function FeedbackCard({ item }) {
  const { name, location, rating, description } = item;
  return (
    <div>
      <div className=" p-6 shadow-md rounded-2xl transition hover:scale-105 duration-200 hover:shadow-lg">
        <Image
          className="rounded-2xl"
          src={img}
          alt={"img"}
          height={80}
          width={80}
        />
        <div className=" my-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">{location}</p>
        </div>
        <div className="">
          <Rate defaultValue={rating} />
        </div>
        <div className="text-gray-500 mt-2">{description}</div>
        <h2>hello</h2>
      </div>
    </div>
  );
}

export default FeedbackCard;
