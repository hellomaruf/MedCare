import Head from "next/head";
import Hero from "./components/Home_page/Hero";
import About from "./components/Home_page/About";
// import Feedback from "./components/Home_page/Feedback";
import PatientsArea from "./components/Home_page/PatientsArea";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      {/* <Feedback/> */}
      <PatientsArea/>
    </main>
  );
}
