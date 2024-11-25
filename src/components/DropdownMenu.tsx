import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (  
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Toggle Button */}
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none"
      >
        Open Menu
      </button>

      {/* Dropdown Menu */}
      {
        isOpen && createPortal(
          <div
            className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-150 ease-out transform ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 invisible"
            }`}
          >
            <ul className="py-1 text-gray-700">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                  Option 1
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                  Option 2
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                  Option 3
                </a>
              </li>
            </ul>
          </div>, document.body)
      }
      
    </div>
  );
};

export default DropdownMenu;
