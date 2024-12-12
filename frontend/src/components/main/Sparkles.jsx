
import { SparklesCore } from "../ui/sparkles";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
import Sponsers from "./Sponsers";
import { TimelineDemo } from "./Timeline";
import Events from "./Events";

const Sparkles = () => {
  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div>
        {/* <h1 className="md:text-7xl text-5xl lg:text-6xl font-bold text-center text-white ">
          Abhisharga
        </h1> */}
        <HeroParallaxDemo />
      </div>
      <div>
        <h1 className="md:text-7xl text-5xl lg:text-6xl font-bold text-center text-white ">
          Sponsors
        </h1>
        <Sponsers />
      </div>
      <TimelineDemo />
      <Events />
    </div>
  );
};

export default Sparkles;
