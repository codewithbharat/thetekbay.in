import BlogPostCard from "@/components/web/BlogPostCard";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* hero section  */}
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
            author="John "
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
      </section>

      {/* Featured News  */}
      <section className="my-2">
        {/* featured news label */}
        <h2 className="border-b-4 font-serif text-xl py-1 font-medium">
          Featured News
        </h2>
        <section className="flex justify-evenly flex-wrap">
          <BlogPostCard
            date="20 Nov 2024"
            category="Technology"
            author="John "
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies metus. Mauris in quam id turpis aliquet aliquet."
            link="/blog/1"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="19 Nov 2024"
            category="Health"
            author="Jane "
            title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="/blog/2"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="18 Nov 2024"
            category="Science"
            author="Alice "
            title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            link="/blog/3"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="17 Nov 2024"
            category="Business"
            author="Michael "
            title="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="/blog/4"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="16 Nov 2024"
            category="Entertainment"
            author="Emily "
            title="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
            link="/blog/5"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="15 Nov 2024"
            category="Sports"
            author="Chris "
            title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
            link="/blog/6"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="14 Nov 2024"
            category="Politics"
            author="Patricia "
            title="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            link="/blog/7"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="13 Nov 2024"
            category="Travel"
            author="David "
            title="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
            link="/blog/8"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="12 Nov 2024"
            category="Lifestyle"
            author="Sarah "
            title="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            link="/blog/9"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="11 Nov 2024"
            category="Education"
            author="Brian "
            title="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            link="/blog/10"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="10 Nov 2024"
            category="Food"
            author="Laura "
            title="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."
            link="/blog/11"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="19 Nov 2024"
            category="Health"
            author="Jane "
            title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="/blog/2"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
        </section>
      </section>

      {/* Popular News  */}
      <section className="my-2">
        {/* featured news label */}
        <h2 className="border-b-4 font-serif text-xl py-1 font-medium">
          Popular News
        </h2>
        <section className="flex justify-evenly flex-wrap">
          <BlogPostCard
            date="20 Nov 2024"
            category="Technology"
            author="John "
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies metus. Mauris in quam id turpis aliquet aliquet."
            link="/blog/1"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="19 Nov 2024"
            category="Health"
            author="Jane "
            title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="/blog/2"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="18 Nov 2024"
            category="Science"
            author="Alice "
            title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            link="/blog/3"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="17 Nov 2024"
            category="Business"
            author="Michael "
            title="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="/blog/4"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="16 Nov 2024"
            category="Entertainment"
            author="Emily "
            title="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
            link="/blog/5"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="15 Nov 2024"
            category="Sports"
            author="Chris "
            title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."
            link="/blog/6"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="14 Nov 2024"
            category="Politics"
            author="Patricia "
            title="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
            link="/blog/7"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="13 Nov 2024"
            category="Travel"
            author="David "
            title="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
            link="/blog/8"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="12 Nov 2024"
            category="Lifestyle"
            author="Sarah "
            title="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            link="/blog/9"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="11 Nov 2024"
            category="Education"
            author="Brian "
            title="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            link="/blog/10"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="10 Nov 2024"
            category="Food"
            author="Laura "
            title="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."
            link="/blog/11"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
          <BlogPostCard
            date="19 Nov 2024"
            category="Health"
            author="Jane "
            title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            link="/blog/2"
            width="300px"
            titleFontSize="text-md"
            showShortDescription={false}
          />
        </section>
      </section>
    </div>
  );
};

export default Home;
