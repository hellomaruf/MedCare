import { HoverEffect } from "../ui/card-hover-effect";

function PatientsArea() {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-32 z-0">
      <div className="">
      <p className="text-secondary text-lg tracking-widest text-center mb-5">
          --Patients Services--
        </p>
        <h2 className="text-4xl  text-gray-800 mx-auto text-center max-w-xl">
          We Serve Defferent{" "}
          <span className="font-semibold">Areas for our Patients</span>
        </h2>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}

export default PatientsArea;

export const projects = [
  {
    title: "In-Clinic Care",
    description:
      "Comprehensive medical consultations and treatments provided in our state-of-the-art clinics.",
    link: "https://stripe.com",
  },
  {
    title: "Home Healthcare",
    description:
      "For patients who prefer or require care at home, we provide home visits by our experienced healthcare professionals.",
    link: "https://netflix.com",
  },
  {
    title: "Telemedicine Services",
    description:
      "Virtual consultations to connect patients with doctors and specialists from the comfort of their homes.",
    link: "https://google.com",
  },
  {
    title: "Emergency Care",
    description:
      "Fast and efficient emergency response teams available across multiple regions.",
    link: "https://meta.com",
  },
  {
    title: "Specialized Care",
    description:
      "We offer specialized care in various fields, including cardiology, orthopedics, pediatrics, and more.",
    link: "https://amazon.com",
  },
  {
    title: "Primary Care Services",
    description:
      "Our primary care services cover routine health check-ups, preventive care, and ongoing management",
    link: "https://microsoft.com",
  },
];
