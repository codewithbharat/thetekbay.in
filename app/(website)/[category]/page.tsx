import { FC } from 'react';

interface BlogPostProps {
    params: {
        category: string;
    };
}

const BlogPost: FC<BlogPostProps> = ({ params }) => {
    const { category}  = params;

    return <h1>Blog Post: {category}</h1>;
};

export default BlogPost;