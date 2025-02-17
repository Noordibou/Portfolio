import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (event.target && isHTMLElement(event.target)) {
        if (!event.target.closest("nav")) {
          setIsMenuOpen(false);
        }
      }
    };
    function isHTMLElement(target: EventTarget): target is HTMLElement {
      return target instanceof HTMLElement;
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <nav className="mx-14 -mt-4 md:mt-auto">
      <div className="flex items-center justify-end ">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-50"
        >
          <button
            className="block lg:hidden text-bgColor p-2 my-4 text-primaryColor hover:text-secondaryColor border border-gray-600 rounded-md backdrop-blur-lg"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            )}
          </button>
        </motion.div>
        
        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden fixed inset-0 bg-slate-950 z-40`}
        >
          <div className="flex items-center justify-center h-full ">
            <ul className="flex flex-col items-center font-titleFont font-semibold gap-8 text-bgColor ">
              <Link
                className="text-3xl py-2 text-primaryColor hover:text-secondaryColor"
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="text-3xl py-2 text-primaryColor hover:text-secondaryColor"
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                className="text-3xl py-2 text-primaryColor hover:text-secondaryColor"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                className="text-3xl py-2 px-4 font-titleFont rounded-md border border-secondaryColor hover:bg-secondaryColor/30 flex items-center justify-between uppercase text-primaryColor"
                href="/NoorDibou.pdf"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
            </ul>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="hidden lg:block "
        >
          <ul className="flex justify-center gap-6 text-bgColor uppercase text-[15px] font-titleFont border border-slate-800 rounded-lg px-4 py-2 backdrop-blur-lg">
            <Link
              href="#about"
              className="py-2 text-primaryColor hover:text-secondaryColor"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="py-2 text-primaryColor hover:text-secondaryColor"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="py-2 text-primaryColor hover:text-secondaryColor"
            >
              Contact
            </Link>
            <Link href="/NoorDibou.pdf" target="_blank">
              <motion.button
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="py-2 px-4 font-titleFont rounded-md border border-secondaryColor hover:bg-secondaryColor/30 flex items-center justify-between uppercase text-primaryColor cursor-pointer"
              >
                Resume
              </motion.button>
            </Link>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}