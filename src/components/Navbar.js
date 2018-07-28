import React from "react";
import { WEBSITE } from "../constants";

const Navbar = () => (
  <nav>
    <a href="/">Home</a>
    <a href={`${WEBSITE}`}>Author</a>
    <a href={`${WEBSITE}/about`}>About</a>
  </nav>
);

export default Navbar;
