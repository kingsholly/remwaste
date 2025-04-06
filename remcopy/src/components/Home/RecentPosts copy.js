"use client";
import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { useState } from "react";
import SkipSelector from "../Api/SkipSelector";
const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  // console.log(blogs);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const handleSelect = (blog) => {
    setSelectedBlogId(blog.slug); // Make sure blog.id is unique
    // console.log("Selected blog:", blog.slug);
  };
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-center">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Choose Your Skip Size <br></br>
          <span className="text-sm md:text-lg text-dark dark:text-zinc-500">
            {" "}
            Select the skip size that best suits your needs
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree
                blog={blog}
                isSelected={selectedBlogId === blog.slug}
                onSelect={handleSelect}
              />
            </article>
          );
        })}
      </div>

      <SkipSelector />
    </section>
  );
};

export default RecentPosts;
