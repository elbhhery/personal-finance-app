import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dropdown from "../../assets/images/icon-caret-down.svg";
export default function CustomSelect({
  options,
  onChange,
}: {
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative w-30 md:w-35 lg:w-45">
      {/* Main Select */}
      <div
        onClick={() => setOpen(!open)}
        className="p-2 bg-white border border-gray-400 rounded-2xl cursor-pointer flex justify-between items-center"
      >
        <span>{selected}</span>
        <span className={`transition ${open ? "rotate-180" : ""}`}>
          <img alt="dorpdown" src={dropdown} />
        </span>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 mt-2 bg-white border border-gray-400 rounded-xl shadow-lg z-20"
          >
            {options.map((option: string, index) => {
              const isLast = index === 0;
              return (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`${
                    isLast ? "font-semibold" : ""
                  } p-3 hover:bg-gray-100 rounded-xl cursor-pointer`}
                >
                  {option}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
