// React
import React from "react";

// Components
import BlogPost from "../../components/Blog/BlogPost";
import { posts } from "./postsData";

const Blog = () => {
  return (
    <section className="min-h-screen container w-full flex flex-col items-center mx-auto p-5">
      <div className="bg-white h-full rounded-lg p-10">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            date={post.date}
            image={post.image}
            content={post.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;