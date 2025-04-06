import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import Tag from "../Elements/Tag";
import { cx } from "@/src/utils";

const BlogLayoutThree = ({ blog, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(blog.id); // Pass the blog data to the onSelect handler
    // console.log(blog); // Log the blog object to the console
  };

  return (
    // <div
    //   onClick={handleClick} // Blog card click will trigger the selection
    //   className={`group flex flex-col items-center text-dark dark:text-light
    //     border transition-all duration-300 p-4 rounded-xl cursor-pointer
    //     ${
    //       isSelected
    //         ? "border-[#0037c1] dark:border-[#89aaff] border-2 shadow-md"
    //         : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
    //     }`}
    // >
    //   <div className="relative w-full h-full">
    //     <div className="block h-full rounded-xl overflow-hidden">
    //       <Image
    //         src={blog.image.src}
    //         placeholder="blur"
    //         blurDataURL={blog.image.blurDataURL}
    //         alt={blog.title}
    //         width={blog.image.width}
    //         height={blog.image.height}
    //         className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
    //         sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
    //       />
    //     </div>

    //     <span className="absolute top-3 right-3 bg-[#0037c1] dark:bg-[#0037c1] text-white font-semibold text-xs sm:text-sm px-2 py-2 rounded shadow">
    //       {blog.title2}
    //     </span>
    //   </div>

    //   <div className="flex flex-col w-full mt-4">
    //     <span className="uppercase text-[#0037c1] font-semibold text-xs sm:text-sm">
    //       {blog.tags[0]}
    //     </span>
    //     <div className="inline-block my-1">
    //       <h2 className="font-semibold capitalize text-base sm:text-lg">
    //         <span
    //           className="bg-gradient-to-r from-[#0037c1] to-[#0037c1] bg-[length:0px_6px]
    //           group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
    //         >
    //           {blog.title}
    //         </span>
    //       </h2>
    //     </div>
    //     <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base">
    //       {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
    //     </span>
    //     <div className="inline-block my-1">
    //       <h2 className="font-semibold capitalize text-base sm:text-lg">
    //         <span
    //           className="bg-gradient-to-r from-[#0037c1] to-[#0037c1] bg-[length:0px_6px]
    //           group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
    //         >
    //           £{blog.price_before_vat}
    //         </span>
    //       </h2>
    //     </div>
    //     <div className="w-56 mt-7">
    //       {/* Adjust the Tag click handler to call handleClick directly */}
    //       <Tag
    //         name={isSelected ? "Selected" : "Select This Skip"}
    //         onClick={(e) => {
    //           e.stopPropagation(); // Prevent click event from bubbling up to parent div
    //           handleClick(); // Trigger handleClick directly
    //         }}
    //         className={cx(isSelected ? "bg-[#0037c1]" : "bg-[#2a2a2a]")}
    //       />
    //     </div>
    //   </div>
    // </div>
    // <div
    //   onClick={handleClick}
    //   className={`group flex flex-col justify-between text-dark dark:text-light
    // border transition-all duration-300 p-6 rounded-2xl cursor-pointer h-full
    // ${
    //   isSelected
    //     ? "border-[#0037c1] dark:border-[#89aaff] border-2 shadow-xl bg-blue-50 dark:bg-[#1e2b49]"
    //     : "border-transparent hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-[#1a1a1a]"
    // }`}
    // >
    //   {/* Image */}
    //   <div className="relative w-full rounded-xl overflow-hidden">
    //     <Image
    //       src={blog.image.src}
    //       placeholder="blur"
    //       blurDataURL={blog.image.blurDataURL}
    //       alt={blog.title}
    //       width={blog.image.width}
    //       height={blog.image.height}
    //       className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
    //       sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
    //     />
    //     <span className="absolute top-3 right-3 bg-[#0037c1] text-white font-semibold text-xs sm:text-sm px-3 py-2 rounded shadow">
    //       {blog.title2}
    //     </span>
    //   </div>

    //   {/* Content */}
    //   <div className="mt-5 space-y-2">
    //     <p className="uppercase text-[#0037c1] font-semibold text-sm sm:text-base">
    //       {blog.tags[0]}
    //     </p>

    //     <h3 className="font-semibold text-lg sm:text-xl leading-tight">
    //       {blog.title}
    //     </h3>

    //     <p className="text-sm text-gray dark:text-light/60">
    //       {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
    //     </p>

    //     <p className="text-xl sm:text-2xl font-bold text-[#0037c1]">
    //       £{blog.price_before_vat}
    //     </p>
    //   </div>

    //   {/* CTA Button */}
    //   <div className="mt-6">
    //     <Tag
    //       name={isSelected ? "Selected" : "Select This Skip"}
    //       onClick={(e) => {
    //         e.stopPropagation();
    //         handleClick();
    //       }}
    //       className={cx(
    //         "w-full text-center text-sm sm:text-base py-3 px-8",
    //         isSelected ? "bg-[#0037c1]" : "bg-[#2a2a2a]"
    //       )}
    //     />
    //   </div>
    // </div>
    <div
      onClick={handleClick}
      className={cx(
        `group flex flex-col items-center text-dark dark:text-light 
      transition-all duration-300 p-4 rounded-xl cursor-pointer shadow-sm
      backdrop-blur-sm border`,
        isSelected
          ? "border-[#0037c1] dark:border-[#89aaff] border-2 shadow-md bg-[#f0f6ff] dark:bg-[#1b2538]"
          : "border-transparent hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-[#1b1b1b]"
      )}
    >
      <div className="relative w-full h-full">
        <div className="block h-full rounded-xl overflow-hidden">
          <Image
            src={blog.image.src}
            placeholder="blur"
            blurDataURL={blog.image.blurDataURL}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Top-right badge (size or title2) */}
        <span className="absolute top-3 right-3 bg-[#0037c1] dark:bg-[#0037c1] text-white font-semibold text-xs sm:text-sm px-2 py-2 rounded shadow">
          {blog.title2}
        </span>
      </div>

      <div className="flex flex-col w-full mt-4">
        {/* Tag line */}
        <span className="uppercase text-[#0037c1] font-semibold text-sm sm:text-base">
          {blog.tags[0]}
        </span>

        {/* Title */}
        <div className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-[#0037c1] to-[#0037c1] bg-[length:0px_6px]
            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </div>

        {/* Published Date */}
        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>

        {/* 💸 Price */}
        {/* <p className="text-2xl sm:text-3xl font-extrabold text-[#0037c1] bg-blue-100 dark:bg-[#1a2a4f] px-3 py-1 rounded w-fit mt-2">
          £{blog.price_before_vat}
        </p> */}
        <p
          className={cx(
            "text-2xl sm:text-3xl font-extrabold px-3 py-1 rounded w-fit mt-2 transition-colors duration-300",
            isSelected
              ? "text-[#0037c1] bg-blue-100 dark:bg-[#1a2a4f]"
              : "text-white bg-[#2a2a2a] dark:bg-[#2a2a2a]"
          )}
        >
          £{blog.price_before_vat}
        </p>
        {/* CTA Tag */}
        <div className="w-56 mt-7">
          <Tag
            name={isSelected ? "Selected" : "Select This Skip"}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className={cx(
              "text-sm sm:text-base",
              isSelected ? "bg-[#0037c1]" : "bg-[#2a2a2a]"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
