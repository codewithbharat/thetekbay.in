import BlogPostCard from "@/components/web/BlogPostCard";
import React from "react";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return (
    <main className="flex flex-col md:flex-row">
      {/* blog page */}
      <section className="md:basis-4/6 basis-1">
        <h1 className="text-2xl md:text-4xl font-serif my-4 capitalize">
          {id.split("-").join(" ")}
        </h1>

        {/* date, category and author */}
        <div className="flex items-center py-2 text-sm font-serif border-t-2 capitalize">
          <span className="text-gray-600">
            {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="text-gray-600 mx-2">|</span>
          <span className="text-gray-600">category</span>
          <span className="text-gray-600 mx-2">|</span>
          <span className="text-gray-600">author</span>
        </div>

        <div className="w-full aspect-video bg-slate-500 mb-2 md:mb-5"></div>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <p className="my-4" key={index}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              facilis repellat beatae enim eum dolorum voluptates ex vitae nisi
              laboriosam voluptatibus, tempora quaerat ullam laborum quam
              perspiciatis! Neque, mollitia repellendus quos architecto sed
              maxime ab sit sapiente dolore modi, optio nemo qui cum, iste quia
              molestiae sequi dolorem accusamus officiis? Veniam, libero,
              placeat omnis velit et temporibus pariatur accusantium, at alias
              praesentium iste officiis eos quia tempora doloremque. Itaque eos
              harum blanditiis laboriosam veritatis id ex? Reiciendis totam, quo
              cum, laudantium molestiae ipsum error odit inventore, impedit a
              unde. Repudiandae omnis asperiores sapiente quos ducimus aliquid,
              ratione molestias deleniti expedita possimus nihil at harum, fugit
              natus optio voluptatem autem unde earum, quis quas laboriosam
              voluptatibus repellendus deserunt. Neque quia quas autem natus
              maiores culpa! Laborum quibusdam vero officia deserunt tenetur
              nulla distinctio repellat error harum.
            </p>
          ))}
      </section>
      <section className="md:basis-2/6 basis-1">
        {/* latest news */}
        <section className="my-2 mx-2">
          {/* latest news label */}
          <h2 className="border-b-4 font-serif text-xl py-1 font-medium">
            Latest News
          </h2>
          <BlogPostCard
            date="20 Nov 2024"
            category="Technology"
            author="John "
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
            author="Jane "
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
            author="Alice "
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
            author="Michael "
            title="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="/blog/4"
            showAuthor={false}
            showShortDescription={false}
            showImage={false}
            titleFontSize="text-sm"
          />
        </section>
        {/* Adveristiement  */}
        <section className="my-2 mx-2">
          <h2 className="border-b-4 font-serif text-xl py-1 font-medium">
            Advertisement
          </h2>
          <div className="w-full aspect-square bg-gray-300 m-1 md:m-4 text-white text-3xl uppercase font-bold flex justify-center items-center">
            Add here
          </div>
        </section>
      </section>
    </main>
  );
};

export default BlogPage;
