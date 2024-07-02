"use client";
import Image from "next/image";
import logo from "../../asset/imgs/logo.png";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [showDropMenu, setShowDropMenu] = useState(false);

  return (
    <div className="bg-[#fff] z-20 py-3 backdrop-blur-lg bg-opacity-10 fixed w-full">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <div onClick={() => setShowDropMenu(!showDropMenu)} className="">
                {showDropMenu ? (
                  <AiOutlineClose className="text-xl" />
                ) : (
                  <AiOutlineBars className="text-xl" />
                )}
              </div>
            </div>
          </div>
          <div className="">
            <Image src={logo} alt="logo-img" height={250} width={250}></Image>
          </div>
        </div>
        <div className="navbar-end flex gap-6">

        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Appointment</Link>
          </ul>
        </div>
        <a className="btn btn-primary text-white">Sign In</a>
        </div>
        <div className="">
          hello 
      </div>
      </div>

      <div
        className={
          showDropMenu
            ? "flex flex-col absolute  gap-3 p-4 items-center justify-center bg-[#1A8DCD] backdrop-blur-md bg-opacity-10  w-full"
            : "flex flex-col absolute -left-full gap-3 p-4 items-center justify-center bg-[#1A8DCD]  w-full"
        }
      >
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Appointment</Link>
      </div>
    </div>
  );
}

export default Navbar;
