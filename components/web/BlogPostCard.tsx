import Link from "next/link";
import React from "react";

interface BlogPostCardProps {
  date: string;
  category: string;
  author: string;
  title: string;
  link: string;
  titleFontSize?: string;
  showImage?: boolean;
  showAuthor?: boolean;
  showShortDescription?: boolean;
  width?: string;
}

const BlogPostCard = ({
  date,
  category,
  author,
  title,
  link,
  titleFontSize,
  showAuthor = true,
  showImage = true,
  showShortDescription = true,
  width,
}: BlogPostCardProps) => {
  return (
    <div className="my-4 md:my-10 md:mx-5 " style={{width : width}}>
      {/* image */}
      {showImage && <div className="w-full aspect-video bg-gray-200 dark:bg-slate-600 rounded-md"></div>}

      {/* date, category and author */}
      <div className="flex items-center mt-2 text-sm font-serif">
        <span className="text-gray-600">{date}</span>
        <span className="text-gray-600 mx-2">|</span>
        <span className="text-gray-600">{category}</span>
        {showAuthor && (
          <>
            <span className="text-gray-600 mx-2">|</span>
            <span className="text-gray-600">{author}</span>
          </>
        )}
      </div>
      {/* title  */}
      <h3 className={`${titleFontSize ? titleFontSize : "text-2xl"} mt-2`}>
        {title}
      </h3>
      {/* short description with readm more button */}
      {showShortDescription && (
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          purus feugiat, vestibulum mi nec, ultricies metus. Mauris in quam id
          turpis aliquet aliquet.{" "}
        </p>
      )}
      <Link href={link} className="text-gray-800 font-semibold mt-2">
        Read More
      </Link>
    </div>
  );
};

export default BlogPostCard;
