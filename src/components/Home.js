import Header from "./Header";
import Hero from "./Hero";
import Specials from "./Specials";
import About from "./About";
import Testimonials from "./Testimonials";
import Footer from "./Footer";


export default function Home ({bookingData}) {
  console.log(bookingData);
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

