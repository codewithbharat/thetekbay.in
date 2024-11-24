import React from "react";

const BlogPage = async({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const id = (await params).id
  return (
    <div>
      <h1>{id}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        scelerisque, libero nec ultricies ultrices, turpis elit tristique
        sapien, nec facilisis odio sapien ac est. Nullam ac purus ac purus
        tincidunt aliquam. Nulla facilisi. Nullam euismod, quam nec
        condimentum ultrices
      </p>
    </div>
  )
};

export default BlogPage;
