"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";
import { animateScroll as scroll } from "react-scroll";

export default function App() {
  const scrollTo = () => {
    scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
  };

  return (
    <Navbar shouldHideOnScroll isBordered className="bg-transparent">
      <NavbarBrand>
        <p className="font-bold  tracking-wider text-transparent bg-clip-text bg-gradient-to-tl from-violet-600 to-violet-400 ">
          CryptoFeed
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <li className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold">
          <a href="#home">Home</a>
        </li>
        <li className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold">
          <a href="#about">About</a>
        </li>
        <li className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold">
          <a href="#minted">Minted</a>
        </li>
        <li className="text-slate-50 hover:text-violet-600 tracking-wider font-semibold">
          <a href="#roadmap">Roadmap</a>
        </li>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            href="#waitlist"
            variant="shadow"
            className="smooth-scroll">
            Join Waitlist
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
