import Head from "next/head";
import Hero from "./components/Home_page/Hero";
import About from "./components/Home_page/About";
// import Feedback from "./components/Home_page/Feedback";
import PatientsArea from "./components/Home_page/PatientsArea";
import ClientReview from "./components/Home_page/ClientReview";
import Doctors from "./components/Home_page/Doctors";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      {/* <Feedback/> */}
      <PatientsArea />
      <ClientReview/>
      <Doctors/>
    </main>
  );
}
