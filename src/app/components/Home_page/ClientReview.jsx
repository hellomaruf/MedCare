"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import face1 from "../../assets/Images/face1.png";
import face2 from "../../assets/Images/face2.png";
import face3 from "../../assets/Images/face3.png";

function ClientReview() {
  return (
    <div className="mt-16 mx-8 mb-8">
      <div className="grid grid-cols-7 max-w-7xl mx-auto gap-4">
        <div className="col-span-3 max-w-sm space-y-4">
          <h3 className="text-secondary text-lg tracking-widest ">
            --EXPERIENCE--
          </h3>
          <h1 className="text-3xl font-medium">
            What Our Patients Say about Us
          </h1>
          <p className="text-gray-500">
            Our dedicated team is committed to providing personalized care
          </p>
        </div>
        <div className="col-span-4">
          <div>
            <Swiper
              spaceBetween={30}
              //   effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className=" bg-white p-6 border-2 rounded-xl">
                  <h3 className="text-xl">
                    I had an amazing experience using MedCare. The reviews were
                    detailed, and I was able to choose the best healthcare
                    professional for my needs. Highly recommended
                  </h3>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="">
                      <Image
                        className="w-[60px] h-[60px] rounded-full"
                        src={face1}
                        alt="Doctor"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="">
                      <h3 className="font-semibold">Emma J.</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-white p-6 border-2 rounded-xl">
                  <h3 className="text-xl">
                    As a medical professional, its crucial to build trust with
                    patients. MedCare allows me to showcase genuine feedback
                    from my patients and improve my practice. Its a fantastic
                    platform for both doctors and patients
                  </h3>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="">
                      <Image
                        className="w-[60px] h-[60px] rounded-full"
                        src={face2}
                        alt="Doctor"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="">
                      <h3 className="font-semibold">Lisa P</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-white p-6 border-2 rounded-xl">
                  <h3 className="text-xl">
                    MedCare helped me find a reliable specialist for my
                    condition. The user reviews and ratings gave me confidence
                    in making the right decision. Thank you, MedCare!
                  </h3>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="">
                      <Image
                        className="w-[60px] h-[60px] rounded-full"
                        src={face3}
                        alt="Doctor"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="">
                      <h3 className="font-semibold">Michael R.</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientReview;
