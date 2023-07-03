import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navbarOptions = (
    <>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">New</a>
      </li>
      <li>
        <a href="#">Popular</a>
      </li>
      <li>
        <a href="#">Tranding</a>
      </li>
      <li>
        <a href="#">Categories</a>
      </li>
    </>
  );

  return (
    <div className="mx-16">
      <div className="flex justify-between py-6">
        <h1 className="text-5xl font-extrabold">W.</h1>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-4 ">{navbarOptions}</ul>
          <div className="relative md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <ImCross className="text-2xl"></ImCross>
            ) : (
              <FaBars className="text-2xl"></FaBars>
            )}
            {open && (
              <div className="absolute top-6 right-0 bg-base-200 shadow-lg p-8 rounded-md">
                <ul className="md:hidden flex-col space-y-2 ">
                  {navbarOptions}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
