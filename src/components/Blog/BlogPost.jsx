import React, { useState } from "react";
import ImageModal from "./ImageModal";

const BlogPost = ({ title, date, image, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-cdln-blue-800 flex flex-col gap-5">
      <h1 className="text-5xl font-semibold text-cdln-blue-900">{title}</h1>
      <h6 className="text-xl flex items-center gap-2">
        📅 {date}
      </h6>
      <img 
        src={image} 
        className="rounded-lg border-2 w-72 md:w-96 max-w-lg cursor-pointer hover:opacity-80 transition-opacity" 
        alt={title}
        onClick={() => setIsModalOpen(true)}
      />
      <p className="text-xl font-medium">{content}</p>
      
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={image}
        imageAlt={title}
      />
    </div>
  );
};

export default BlogPost;