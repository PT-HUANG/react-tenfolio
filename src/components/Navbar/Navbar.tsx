import { useState } from "react";
import { useNavbarIntersection } from "../../hooks/useIntersectionObserver";
import { Link as RouterLink } from "react-router-dom";
import { scroller } from "react-scroll";
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  // NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentSection = useNavbarIntersection();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = (target: string) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 900,
      offset: -100,
    });
  };

  return (
    <>
      <NavigationMenu
        id="navbar"
        className="bg-gray-800 max-w-full [&>div]:w-full px-2 py-4"
        style={{
          position: currentSection !== "" ? "sticky" : "relative",
          top: currentSection !== "firstview" ? 0 : -100,
          transition: "all 0.5s cubic-bezier(.4, 0, .2, 1) 0.4s",
        }}
      >
        <NavigationMenuList className="mx-auto w-full px-2 sm:px-6 lg:px-8 justify-between">
          <RouterLink
            className="cursor-pointer transition-all ease-in-out text-lg text-white hover:text-zinc-400 hover:bg-transparent"
            to="/"
          >
            Home
          </RouterLink>
          <div className="hidden sm:flex">
            <NavigationMenuLink
              className="text-white mx-2 cursor-pointer"
              data-active={currentSection === "about"}
              onClick={() => {
                handleScroll("about");
              }}
            >
              About
            </NavigationMenuLink>
            <NavigationMenuLink
              className="text-white mx-2 cursor-pointer"
              data-active={currentSection === "timeline"}
              onClick={() => {
                handleScroll("timeline");
              }}
            >
              Timeline
            </NavigationMenuLink>
            <NavigationMenuLink
              className="text-white mx-2 cursor-pointer"
              data-active={currentSection === "projects"}
              onClick={() => {
                handleScroll("projects");
              }}
            >
              Projects
            </NavigationMenuLink>
            <NavigationMenuLink
              className="text-white mx-2 cursor-pointer"
              data-active={currentSection === "resume"}
              onClick={() => {
                handleScroll("resume");
              }}
            >
              Resume
            </NavigationMenuLink>
            <NavigationMenuLink
              className="text-white mx-2 cursor-pointer"
              data-active={currentSection === "faq"}
              onClick={() => {
                handleScroll("faq");
              }}
            >
              FAQ
            </NavigationMenuLink>
            <NavigationMenuLink
              className="text-white mx-2 cursor-pointer"
              data-active={currentSection === "contact"}
              onClick={() => {
                handleScroll("contact");
              }}
            >
              Contact
            </NavigationMenuLink>
          </div>

          {/* Mobile Toggle Menu Button */}
          <div
            className="block sm:hidden cursor-pointer pr-2 text-3xl text-white"
            onClick={handleMenuToggle}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
        </NavigationMenuList>
        {/* Mobile Toggle Menu */}
        <div
          className="sm:hidden absolute top-full flex flex-col items-center gap-2 px-4 py-2 bg-gray-800"
          style={{
            clipPath: isOpen ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={handleMenuToggle}
        >
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            data-active={currentSection === "about"}
            onClick={() => {
              handleScroll("about");
            }}
          >
            About
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            data-active={currentSection === "timeline"}
            onClick={() => {
              handleScroll("timeline");
            }}
          >
            Timeline
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            data-active={currentSection === "projects"}
            onClick={() => {
              handleScroll("projects");
            }}
          >
            Projects
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            data-active={currentSection === "resume"}
            onClick={() => {
              handleScroll("resume");
            }}
          >
            Resume
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            data-active={currentSection === "faq"}
            onClick={() => {
              handleScroll("faq");
            }}
          >
            FAQ
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            data-active={currentSection === "contact"}
            onClick={() => {
              handleScroll("contact");
            }}
          >
            Contact
          </NavigationMenuLink>
        </div>
      </NavigationMenu>
    </>
  );
}

export default Navbar;
