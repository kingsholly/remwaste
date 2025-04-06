import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";

//const BlogLayoutThree = ({ blog }) => {

const BlogLayoutThree = ({ blog, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(blog);
  };

  return (
    <div
      className="group flex flex-col items-center text-dark dark:text-light 
                border border-transparent hover:border-slate-300 dark:hover:border-slate-600 
                rounded-xl cursor-pointer transition-all duration-300 p-4"
    >
      {/* <div className="group flex flex-col items-center text-dark dark:text-light"> */}

      {/* <div>
        <Link href={blog.url} className="h-full rounded-xl overflow-hidden">
          <Image
            src={blog.image.src}
            placeholder="blur"
            blurDataURL={blog.image.blurDataURL}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          />
        </Link>
        <span className="uppercase text-[#0037c1] dark:text-[#0037c1] font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
      </div> */}
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

        <span className="absolute top-3 right-3 bg-[#0037c1] dark:bg-[#0037c1] text-white dark:text-white font-semibold text-xs sm:text-sm px-2 py-2 rounded shadow">
          {blog.tags[0]}
        </span>
      </div>
      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-[#0037c1] dark:text-[#0037c1] font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
        <div className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-[#0037c1] to-[#0037c1]  dark:from-[#0037c1]
              dark:to-[#0037c1]
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </div>
        {/* <Tag link={blog.url} name="Select This Skip" /> */}
        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
        <div className="w-56 mt-7">
          <Tag link={blog.url} name="Select This Skip" />
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
