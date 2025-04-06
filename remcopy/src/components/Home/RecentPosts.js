"use client";
import { useState, useEffect } from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { getSkipsByLocation } from "../lib/api"; // Your API function to fetch data

const RecentPosts = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlogId, setSelectedBlogId] = useState(null); // Keep track of the selected blog
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true);
      setError(false);
      const data = await getSkipsByLocation("NR32", "Lowestoft"); // Pass appropriate arguments
      if (data.length === 0) {
        setError(true);
      }
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
    <>
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
        ) : error ? (
          <p className="text-red-500">
            Could not load skips. Please try again later.
          </p>
        ) : skips.length === 0 ? (
          <p>No skips available for this location.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
            {skips.map((skip, index) => {
              const blogData = {
                title: `Skip Size: ${skip.size} yd³`,
                title2: `${skip.size} Yards`,

                tags: [`${skip.hire_period_days}-days Hire Period`],
                publishedAt: skip.created_at,
                price_before_vat: skip.price_before_vat ?? "0",
                image: {
                  src: "/image.png",
                  blurDataURL: "/image.png",
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

      {selectedBlogId && (
        <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#1f2937] border-t border-gray-200 dark:border-gray-700 shadow-lg px-6 py-6 flex items-center justify-between z-50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            {/* Selected Skip Text */}
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              Selected Skip:{" "}
              <span className="font-semibold text-[#0037c1] dark:text-[#60a5fa]">
                {skips.find((s) => s.id === selectedBlogId)?.size} yd³
              </span>
            </p>
            {/* Price Text */}
            <p className="text-lg text-gray-600 dark:text-white sm:ml-4 mt-1 sm:mt-0">
              £{skips.find((s) => s.id === selectedBlogId)?.price_before_vat}{" "}
              per week
            </p>
          </div>

          <div className="flex space-x-4">
            {/* Back Button */}
            <button
              onClick={() => handleSelect(null)} // Deselect skip (reset)
              className="bg-transparent border border-[#0037c1] text-[#0037c1] hover:bg-[#0037c1] hover:text-white px-6 py-3 rounded-lg font-medium text-lg transition-all dark:border-[#60a5fa] dark:text-[#60a5fa] dark:hover:bg-[#60a5fa] dark:hover:text-white"
            >
              Cancel
            </button>

            {/* Continue Button */}
            <button
              onClick={() => console.log("Proceed with skip:", selectedBlogId)}
              className="bg-[#0037c1] hover:bg-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-lg text-lg transition-all dark:bg-[#60a5fa] dark:hover:bg-[#1e3a8a]"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentPosts;
