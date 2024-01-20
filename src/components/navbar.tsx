"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { paths } from "../router/paths";

const navigation = [
  {
    name: "Contacts",
    href: "#",
  },
  {
    name: "Service Request",
    href: "#",
  },
  {
    name: "Brands",
    href: "/brands",
  },
];

function ThemeSwitcher() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {navigation.map((item) => (
          <a
            key={item.name}
            className="w-full"
            href={item.href}
            // legacyBehavior
            // passHref
          >
            <DropdownMenuItem>{item.name}</DropdownMenuItem>
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
function Navbar() {
  // const { user } = useAuth();
  // const isAuthenticated = !!user;
  const isAuthenticated = true;

  return (
    <nav className="w-full bg-background flex justify-center items-center  z-10   px-3 py-5 sticky top-0 border-b-2">
      <div className=" max-w-7xl w-full flex justify-between items-center">
        <a href="/">
          <h3 className=" text-lg font-bold">Absolute Video</h3>
        </a>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-4">
            {isAuthenticated ? (
              navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <a href={item.href}>
                    <NavigationMenuLink>{item.name}</NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
              ))
            ) : (
              <NavigationMenuItem>
                <a href={paths.login}>
                  <Button variant="secondary">
                    <NavigationMenuLink>Login</NavigationMenuLink>
                  </Button>
                </a>
              </NavigationMenuItem>
            )}

            <NavigationMenuItem>
              <ThemeSwitcher />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu className="md:hidden">
          <NavigationMenuList className="gap-4">
            {isAuthenticated ? (
              <NavigationMenuItem>
                <HamburgerMenu />
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <a href={paths.login}>
                  <Button variant="secondary">
                    <NavigationMenuLink>Login</NavigationMenuLink>
                  </Button>
                </a>
              </NavigationMenuItem>
            )}
            <NavigationMenuItem>
              <ThemeSwitcher />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

export default Navbar;
