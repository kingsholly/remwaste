import { cx } from "@/src/utils";
import React from "react";

const Tag = ({ name, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold  hover:scale-105 transition-all ease duration-200 text-sm sm:text-base cursor-pointer",
        className
      )}
    >
      {name}
    </button>
  );
};

export default Tag;
