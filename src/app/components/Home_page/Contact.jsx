"use client";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="grid grid-cols-6 gap-4 border-2 bg-gray-50 rounded-xl p-4">
        <div className="col-span-2 space-y-6 bg-gradient-to-r from-[#2089CB] to-[#1a7fbd] rounded-xl p-6">
          <div className="">
            <h2 className="text-2xl font-semibold pb-2 text-white">
              Contact Information
            </h2>
            <p className="text-gray-100 text-sm">
              At MedCare, we are dedicated to providing you with exceptional
              healthcare services. Whether you need support, have a general
              inquiry, or wish to schedule an appointment, our team is here to
              help.
            </p>
          </div>

          <div className=" space-y-4 text-white">
            <div className="flex items-center gap-4">
              <FaPhone className="text-xl" />
              <div>
                <h4>+1 (800) 987-6543</h4>
                <h4>+1 (800) 123-4567</h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <IoMail className="text-xl" />
              <div>
                <h4>info@medcare.com</h4>
                <h4>appointments@medcare.com</h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaLocationDot className="text-xl" />
              <div>
                <h4>123 Health St. Suite 500 Wellness City, CA 90210</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="rounded-lg bg-white p-8  lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-300 focus:outline-none focus:border-[#1F88CA]  p-3 text-sm"
                    placeholder="Enter Your Fullname"
                    type="name"
                    id="name"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg  p-3  border border-gray-300 focus:outline-none focus:border-[#1F88CA] text-sm"
                    placeholder="Email Address"
                    type="email"
                    id="email"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="name">
                  Subject
                </label>
                <input
                  className="w-full rounded-lg  p-3  border border-gray-300 focus:outline-none focus:border-[#1F88CA]  text-sm"
                  placeholder="Name"
                  type="text"
                  id="subject"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg  p-3  border border-gray-300 focus:outline-none focus:border-[#1F88CA] text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-primary text-white transition hover:scale-x-110"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
