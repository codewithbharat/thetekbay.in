import BlogPostCard from "@/components/web/BlogPostCard";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const category = (await params).id
 
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/category/${category}`,
  );
  const News : {
    title: string,
    author: {
      id: number,
      name: string
    },
    date: string,
    content: string,
    category: {
      id: number,
      name: string,
  },
  }[] = await response.json();

  console.log(News);
  

  return <>
  <h1>Blog Post: {category}</h1>
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {News.length > 0 && News.map((news) => (
      <BlogPostCard
        key={news.title}
        title={news.title}
        author={news.author.name}
        date={news.date}
        category={news.category.name} 
        shortDescription={news.content.split(' ').slice(0, 20).join(' ')}
        link={`/blog/${news.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      />
    ))}
  </section>
  </>
}


