"use client";
import { useState, useEffect } from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { getSkipsByLocation } from "../lib/api"; // Your API function to fetch data

const RecentPosts = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlogId, setSelectedBlogId] = useState(null); // Keep track of the selected blog

  useEffect(() => {
    const fetchSkips = async () => {
      const data = await getSkipsByLocation("NR32", "Lowestoft"); // Pass appropriate arguments
      setSkips(data);
      setLoading(false);
    };

    fetchSkips();
  }, []);

  const handleSelect = (blog) => {
    setSelectedBlogId(blog); // Update selected blog ID
    // console.log(blog); // Log the selected blog details
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
              title: `Skip Size: ${skip.size} yd³`,
              title2: `${skip.size} Yards`,

              tags: [`${skip.hire_period_days}-day Hire Period`],
              publishedAt: skip.created_at,
              price_before_vat: skip.price_before_vat ?? "0",
              image: {
                src: "/image.png", // Image path
                blurDataURL: "/image.png", // Placeholder image
                width: 400,
                height: 300,
              },
              url: `/skip/${skip.id}`,
              id: skip.id,
            };

            return (
              <article key={index} className="col-span-1 row-span-1 relative">
                <BlogLayoutThree
                  blog={blogData}
                  isSelected={selectedBlogId === skip.id}
                  onSelect={handleSelect}
                />
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default RecentPosts;
