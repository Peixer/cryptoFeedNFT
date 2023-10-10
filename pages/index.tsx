import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Roadmap from "../components/Roadmap";
import Waitlist from "../components/Waitlist";
import { NextUIProvider } from "@nextui-org/system";

const Home: NextPage = () => {
  return (
    <NextUIProvider>
      <Navbar />
      <Hero />
      <About />
      <Carousel />
      <Roadmap />
      <Waitlist />
      <Footer />
    </NextUIProvider>
  );
};

export default Home;
