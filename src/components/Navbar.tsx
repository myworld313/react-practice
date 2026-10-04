import { useState } from "react";
import { Link, NavLink } from "react-router";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-palm text-white">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-14">
        <Link
          to="/"
          className="font-serif text-2xl tracking-[0.03em] [font-variation-settings:'SOFT'_0,'WONK'_1]"
        >
          DS813
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-10 font-sans text-sm font-medium uppercase tracking-[0.12em] md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-8" : "hover:opacity-70"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="font-sans text-sm font-medium uppercase tracking-[0.12em] md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-4 px-6 pb-6 font-sans text-lg font-medium md:hidden"
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "underline underline-offset-8" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
