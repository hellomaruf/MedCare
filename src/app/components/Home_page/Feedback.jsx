"use client";
import { feedback } from "@/app/lib/Feedback";
import React from "react";
import FeedbackCard from "../Cards/FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Feedback() {
  const feedbackData = feedback;
  return (
      <div className="max-w-7xl mx-auto my-24">
          <div className="px-4 space-y-3">
              
      <h2 className="text-4xl font-semibold text-gray-800">Patients Feedback</h2>
      <p className="max-w-3xl">
        In some Healthcare systems, regulatory bodies may requir healthcare
        providers to collect and report patients feedback
      </p>
          </div>
      <div className="mt-8">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={15}
          className="mySwiper"
        >
          {feedbackData?.map((item, index) => (
            <SwiperSlide className="p-4" key={index}>
              <FeedbackCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Feedback;
