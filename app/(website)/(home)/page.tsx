import BlogPostCard from "@/components/web/BlogPostCard";
import React from "react";

const Home = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row">
        {/* breaking News  */}
        <section className="my-2  mx-2 sm:basis-1 md:basis-3/6">
          {/* breaking news label */}
          <h2 className="border-b-4 font-serif text-xl py-1 font-medium">
            Breaking News
          </h2>
          <BlogPostCard
            date="20 Nov 2024"
            category="Technology"
            author="John Doe"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies metus. Mauris in quam id turpis aliquet aliquet."
            link="/blog/1"
            titleFontSize="text-lg"
          />
        </section>

        {/* latest News  */}
        <section className="my-2 mx-2 sm:basis-1 md:basis-3/6">
          {/* latest news label */}
          <h2 className="border-b-4 font-serif text-xl py-1 font-medium">
            Latest News
          </h2>
          <BlogPostCard
            date="20 Nov 2024"
            category="Technology"
            author="John Doe"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies metus. Mauris in quam id turpis aliquet aliquet."
            link="/blog/1"
            showAuthor={false}
            showShortDescription={false}
            showImage={false}
            titleFontSize="text-sm"
          />
          <BlogPostCard
            date="19 Nov 2024"
            category="Health"
            author="Jane Smith"
            title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="/blog/2"
            showAuthor={false}
            showShortDescription={false}
            showImage={false}
            titleFontSize="text-sm"
          />
          <BlogPostCard
            date="18 Nov 2024"
            category="Science"
            author="Alice Johnson"
            title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            link="/blog/3"
            showAuthor={false}
            showShortDescription={false}
            showImage={false}
            titleFontSize="text-sm"
          />
          <BlogPostCard
            date="17 Nov 2024"
            category="Business"
            author="Michael Brown"
            title="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="/blog/4"
            showAuthor={false}
            showShortDescription={false}
            showImage={false}
            titleFontSize="text-sm"
          />
        </section>
      </section>
    </div>
  );
};

export default Home;
