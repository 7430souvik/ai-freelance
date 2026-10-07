import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Workflow from "../components/Workflow";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;