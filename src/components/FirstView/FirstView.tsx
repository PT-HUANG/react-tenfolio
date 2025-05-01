import { useEffect } from "react";
import { Button } from "../ui/button";
import { scroller } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function FirstView() {
  const handleScroll = (target: string) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 900,
      offset: -100,
    });
  };

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <div id="firstview" className="bg-[#000e24] h-[60vh]">
        <div className="w-[80%] h-[100%] max-w-[1000px] mx-auto flex flex-col items-center justify-center">
          <div
            data-aos="custom-fade-down"
            data-aos-delay="800"
            className="
              text-white font-bold font-[Cascadia_Mono]
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          "
          >
            Hi, I’m Paul
          </div>
          <div
            data-aos="fade"
            data-aos-delay="1400"
            className="
            text-white font-normal
            w-[90%] max-w-[270px] ml-5 mt-2 
            sm:max-w-[350px]
            md:max-w-[500px] md:ml-25 md:text-lg
            lg:max-w-[600px] lg:ml-30
            "
          >
            — a Frontend Developer crafting delightful web experiences.
          </div>
          <div className="flex justify-center gap-4 mt-10 w-[75%] lg:mt-15">
            <Button
              variant="outline"
              className="
            text-white font-bold cursor-pointer duration-300 bg-indigo-500 border-indigo-500 
            hover:text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50
          "
              onClick={() => {
                handleScroll("projects");
              }}
            >
              View projects
            </Button>
            <Button
              variant="outline"
              className="
            text-white font-bold cursor-pointer duration-300 bg-cyan-500 border-cyan-500 
            hover:text-white hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50
          "
              onClick={() => {
                handleScroll("resume");
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstView;
