import BlogPostCard from '@/components/web/BlogPostCard';

const BlogPost = ({ params }) => {
    const { category}  = params;

    const News = [{
        title: "The future of software development",
        author: "John Doe",
        date: "2021-12-12",
    },
    {
        title: "AI in Healthcare",
        author: "Jane Smith",
        date: "2022-01-15",
    },
    {
        title: "Blockchain Beyond Bitcoin",
        author: "Alice Johnson",
        date: "2022-02-20",
    },
    {
        title: "The Rise of Quantum Computing",
        author: "Bob Brown",
        date: "2022-03-10",
    },
    {
        title: "Cybersecurity Trends in 2022",
        author: "Charlie Davis",
        date: "2022-04-05",
    },
    {
        title: "The Impact of 5G Technology",
        author: "Diana Evans",
        date: "2022-05-12",
    },
    {
        title: "Advancements in Renewable Energy",
        author: "Ethan Harris",
        date: "2022-06-18",
    },
    {
        title: "The Future of Autonomous Vehicles",
        author: "Fiona Green",
        date: "2022-07-22",
    },
    {
        title: "Virtual Reality in Education",
        author: "George King",
        date: "2022-08-30",
    },
    {
        title: "The Evolution of Cloud Computing",
        author: "Hannah Lee",
        date: "2022-09-14",
    },
    {
        title: "The Role of Big Data in Business",
        author: "Ian Martinez",
        date: "2022-10-01",
    },
    {
        title: "The Growth of E-commerce",
        author: "Jack Nelson",
        date: "2022-11-11",
    },
    {
        title: "The Future of Remote Work",
        author: "Karen O'Connor",
        date: "2022-12-25",
    },
    {
        title: "The Importance of Data Privacy",
        author: "Liam Patel",
        date: "2023-01-05",
    },
    {
        title: "The Rise of Fintech",
        author: "Mia Roberts",
        date: "2023-02-14",
    },
    {
        title: "The Impact of Social Media",
        author: "Noah Scott",
        date: "2023-03-22",
    },
    {
        title: "The Future of Wearable Technology",
        author: "Olivia Turner",
        date: "2023-04-10",
    },
    {
        title: "The Role of AI in Marketing",
        author: "Paul Walker",
        date: "2023-05-18",
    },
    {
        title: "The Evolution of Smart Homes",
        author: "Quinn Young",
        date: "2023-06-25",
    },
    {
        title: "The Future of Biotechnology",
        author: "Rachel Adams",
        date: "2023-07-30",
    }
]
    
    return <>
    <h1>Blog Post: {category}</h1>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {News.map((news) => (
            <BlogPostCard
                key={news.title}
                title={news.title}
                author={news.author}
                date={news.date}
                category={category}
                link={`/blog/${category}/${news.title.replace(/\s+/g, '-').toLowerCase()}`}
                />
        ))}
    </section>
    </>;
};

export default BlogPost;