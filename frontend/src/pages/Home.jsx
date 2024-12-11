import Hero from "@/components/main/Hero";
import { Navbar } from "@/components/main/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <Hero />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
