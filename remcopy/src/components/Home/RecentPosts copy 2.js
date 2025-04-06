"use client";
import React, { useEffect, useState } from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { getSkipsByLocation } from "../lib/api";

const RecentPosts = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchSkips = async () => {
      const data = await getSkipsByLocation("NR32", "Lowestoft");
      setSkips(data);
      setLoading(false);
    };

    fetchSkips();
    //console.log(data);
  }, []);

  // Handle blog selection
  const handleSelect = (blogId) => {
    setSelectedBlogId(blogId === selectedBlogId ? null : blogId); // Toggle selection
    console.log(`Selected Blog ID: ${blogId}`);
    const blog = blogs.find((item) => item.id === blogId);
    setSelectedBlog(blog);
  };

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-center">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Choose Your Skip Size
          <br />
          <span className="text-sm md:text-lg text-dark dark:text-zinc-500">
            Select the skip size that best suits your needs
          </span>
        </h2>
      </div>

      {loading ? (
        <p>Loading skips...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
          {skips.map((skip, index) => {
            const blogData = {
              title: `${skip.size} Yard Skip`,
              title2: `${skip.size} Yards`,

              tags: [`${skip.hire_period_days}-day Hire Period`],
              publishedAt: skip.created_at,
              price_before_vat: skip.price_before_vat ?? "0",
              image: {
                src: "/image.png", // Use a default image from the public folder
                blurDataURL: "/image.png", // Optional: Add a low-res version for blur effect
                width: 400, // Use the width of the image
                height: 300, // Use the height of the image
              },
              url: `/skip/${skip.id}`, // Dynamic URL for individual skip page
              id: skip.id, // Using `slug` for matching selected state
            };

            return (
              <div className="relative pb-40">
                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogs.map((blogData) => (
                    <article
                      key={blogData.id}
                      className="col-span-1 row-span-1 relative"
                    >
                      <BlogLayoutThree
                        blog={blogData}
                        isSelected={selectedBlogId === blogData.id}
                        onSelect={handleSelect}
                      />
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default RecentPosts;
