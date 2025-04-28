import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavigationMenu className="sticky top-0 bg-gray-800 max-w-full [&>div]:w-full px-2 py-4">
        <NavigationMenuList className="mx-auto w-full px-2 sm:px-6 lg:px-8 justify-between">
          <RouterLink
            className="cursor-pointer transition-all ease-in-out text-lg text-white hover:text-zinc-400 hover:bg-transparent"
            to="/"
          >
            Home
          </RouterLink>
          <div className="hidden sm:flex">
            <NavigationMenuLink className="text-white mx-2 cursor-pointer">
              <ScrollLink to="about" smooth={true} duration={700} offset={-100}>
                About
              </ScrollLink>
            </NavigationMenuLink>
            <NavigationMenuLink className="text-white mx-2 cursor-pointer">
              <ScrollLink
                to="timeline"
                smooth={true}
                duration={700}
                offset={-100}
              >
                Timeline
              </ScrollLink>
            </NavigationMenuLink>
            <NavigationMenuLink className="text-white mx-2 cursor-pointer">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={700}
                offset={-100}
              >
                Projects
              </ScrollLink>
            </NavigationMenuLink>
            <NavigationMenuLink className="text-white mx-2 cursor-pointer">
              <ScrollLink
                to="resume"
                smooth={true}
                duration={700}
                offset={-100}
              >
                Resume
              </ScrollLink>
            </NavigationMenuLink>
            <NavigationMenuLink className="text-white mx-2 cursor-pointer">
              <ScrollLink to="faq" smooth={true} duration={700} offset={-100}>
                FAQ
              </ScrollLink>
            </NavigationMenuLink>
            <NavigationMenuLink className="text-white mx-2 cursor-pointer">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={700}
                offset={-100}
              >
                Contact
              </ScrollLink>
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
            transition: "all 0.4s ease-in-out",
          }}
          onClick={handleMenuToggle}
        >
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            href="#about"
          >
            About
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            href="#timeline"
          >
            Timeline
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            href="#projects"
          >
            Projects
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            href="#resume"
          >
            Resume
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            href="#faq"
          >
            FAQ
          </NavigationMenuLink>
          <NavigationMenuLink
            className="w-full cursor-pointer text-center text-white"
            href="#contact"
          >
            Contact
          </NavigationMenuLink>
        </div>
      </NavigationMenu>
    </>
  );
}

export default Navbar;
