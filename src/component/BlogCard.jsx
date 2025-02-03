import React from "react";
import { blog1, blog2, blog3, blog4, blog5, blog6 } from "../assets/assests";
import { GoArrowUpRight } from "react-icons/go";

const BlogCard = () => {
  const blogs = [
    {
      id: 1,
      title: "Small business & Startup",
      author: "Prabhash Mishra",
      date: "1 Jan 2023 - Today",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
      image: blog1,
    },
    {
      id: 2,
      title: "Scale-Up Company Offer",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
      image: blog2,
    },
    {
      id: 3,
      title: "Growing Business Package",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
      image: blog3,
    },
    {
      id: 4,
      title: "Growing Business Package",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
      image: blog4,
    },
    {
      id: 5,
      title: "Growing Business Package",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
      image: blog5,
    },
    {
      id: 6,
      title: "Growing Business Package",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
      image: blog6,
    },
  ];

  const colors = [
    "bg-green-50 text-green-700",
    "bg-pink-50 text-pink-700",
    "bg-red-50 text-red-700",
    "bg-blue-50 text-blue-700",
    "bg-purple-50 text-purple-700",
    "bg-orange-50 text-orange-700",
    "bg-teal-50 text-teal-700",
    "bg-indigo-50 text-indigo-700",
    "bg-gray-50 text-gray-700",
    "bg-lime-50 text-lime-700",
    "bg-cyan-50 text-cyan-700",
    "bg-emerald-50 text-emerald-700",
    "bg-fuchsia-50 text-fuchsia-700",
    "bg-violet-50 text-violet-700",
    "bg-rose-50 text-rose-700",
    "bg-amber-50 text-amber-700",
    "bg-olive-50 text-olive-700",
    "bg-sky-50 text-sky-700",
    "bg-rose-100 text-rose-900",
    "bg-slate-50 text-slate-700",
  ];

  return (
    <>
      <div id="blog" className="blog-conatiner">
        <h2 className="heading-1">EXPLORE OUR BLOGS</h2>
        <h2 className="heading-2">Accelerate Digital Transformation</h2>
        <div className="card-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="card">
              <img src={blog.image} alt="" />
              <div className="content">
                <p className="author">
                  {blog.author} • {blog.date}
                </p>
                <div className="heading-and-icon">
                  <span className="title">{blog.title}</span>
                  <span className="icon">
                    <GoArrowUpRight />
                  </span>
                </div>

                <p className="description">{blog.description}</p>

                <div className="categories">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`tag ${
                        colors[Math.floor(Math.random() * colors.length)]
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
