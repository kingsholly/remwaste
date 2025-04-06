"use client";
import React, { useState, useEffect } from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

//import BlogLayoutThree from "../components/BlogLayoutThree"; //
//import React, { useState, useEffect } from "react";
//import BlogLayoutThree from "../components/BlogLayoutThree"; // Import your BlogLayoutThree component
import Image from "next/image";
import { format } from "date-fns";

const RecentPosts = ({ posts = [] }) => {
  // Set default value for posts
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSelect = (id) => {
    const blog = posts.find((post) => post.id === id);
    setSelectedBlogId(id);
    setSelectedBlog(blog);
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-4">
        <p>No blog posts available.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((blogData) => (
          <article key={blogData.id} className="relative">
            <BlogLayoutThree
              blog={blogData}
              isSelected={selectedBlogId === blogData.id}
              onSelect={handleSelect}
            />
          </article>
        ))}
      </div>

      {/* Bottom Sticky Preview */}
      {selectedBlog && (
        <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-slate-700 shadow-xl z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Info */}
            <div className="flex items-center gap-4">
              <Image
                src={selectedBlog.image.src}
                alt={selectedBlog.title}
                width={80}
                height={60}
                className="rounded-md object-cover"
              />
              <div>
                <h4 className="font-semibold text-base sm:text-lg text-dark dark:text-light">
                  {selectedBlog.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  £{selectedBlog.price_before_vat}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#0037c1] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#002ea8] transition">
              Continue with this skip
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
