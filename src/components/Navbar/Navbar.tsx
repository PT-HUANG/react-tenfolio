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
  return (
    <>
      <NavigationMenu className="bg-gray-800 max-w-full">
        <NavigationMenuList className="mx-auto w-full px-2 sm:px-6 lg:px-8 justify-start">
          <NavigationMenuLink className="text-white">Link</NavigationMenuLink>
          <NavigationMenuLink className="text-white">Link</NavigationMenuLink>
          <NavigationMenuLink className="text-white">Link</NavigationMenuLink>
          <NavigationMenuLink className="text-white">Link</NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default Navbar;
