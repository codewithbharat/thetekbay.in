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
  shortDescription?: string;
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
  shortDescription,
  width,
}: BlogPostCardProps) => {
  return (
    <div className="my-4 md:my-10 md:mx-5 " style={{width : width}}>
      {/* image */}
      {showImage && 

      <Link href={link}>
      <div className="w-full aspect-video bg-gray-200 dark:bg-slate-600 rounded-md"></div>
      </Link>
      }

      {/* date, category and author */}
      <div className="flex items-center mt-2 text-sm font-serif">
        <span className="text-gray-600 dark:text-gray-400">{date}</span>
        <span className="text-gray-600 dark:text-gray-400 mx-2">|</span>
        <span className="text-gray-600 dark:text-gray-400">{category}</span>
        {showAuthor && (
          <>
            <span className="text-gray-600 dark:text-gray-400 mx-2">|</span>
            <span className="text-gray-600 dark:text-gray-400">{author}</span>
          </>
        )}
      </div>
      {/* title  */}
      <Link href={link}>
      <h3 className={`${titleFontSize ? titleFontSize : "text-2xl"} mt-2`}>
        {title}
      </h3>
      </Link>
      {/* short description with readm more button */}
      {shortDescription && (
        <span className="text-gray-600 dark:text-gray-400 mt-2 mr-2">
          {
            `${shortDescription}...`
          }
        </span>
      )}
      <Link href={link} className="text-gray-800 dark:text-gray-200 font-semibold">
        Read More
      </Link>
    </div>
  );
};

export default BlogPostCard;
