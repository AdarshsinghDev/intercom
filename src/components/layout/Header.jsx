import React, { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import Button from "../ui/Button";
import { ArrowRight, Menu, X } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItem = [
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Customer", href: "#customer" },
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-8 w-auto" />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 items-center font-semibold">
            {menuItem.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition"
              >
                {item.label}
                <IoIosArrowDown className="text-sm" />
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              btnText="Start free trial"
              btnType="primaryBtn"
              btnIcon={<ArrowRight />}
            />
            <Button btnText="View demo" btnType="secondaryBtn" />
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-6 space-y-6">
            <ul className="space-y-4 font-semibold">
              {menuItem.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center cursor-pointer"
                >
                  {item.label}
                  <IoIosArrowDown />
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <Button
                btnText="Start free trial"
                btnType="primaryBtn"
                btnIcon={<ArrowRight />}
              />
              <Button btnText="View demo" btnType="secondaryBtn" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
