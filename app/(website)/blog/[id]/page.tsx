import React from "react";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return (
    <main>
      <section>
        <h1 className="text-2xl md:text-4xl font-serif my-4 capitalize">
          {id.split("-").join(" ")}
        </h1>
        <div className="w-full aspect-video bg-slate-500 my-2 md:my-5"></div>
        {Array(3).fill(null).map((_, index) => (
          <p className="my-4" key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis
            repellat beatae enim eum dolorum voluptates ex vitae nisi laboriosam
            voluptatibus, tempora quaerat ullam laborum quam perspiciatis! Neque,
            mollitia repellendus quos architecto sed maxime ab sit sapiente dolore
            modi, optio nemo qui cum, iste quia molestiae sequi dolorem accusamus
            officiis? Veniam, libero, placeat omnis velit et temporibus pariatur
            accusantium, at alias praesentium iste officiis eos quia tempora
            doloremque. Itaque eos harum blanditiis laboriosam veritatis id ex?
            Reiciendis totam, quo cum, laudantium molestiae ipsum error odit
            inventore, impedit a unde. Repudiandae omnis asperiores sapiente quos
            ducimus aliquid, ratione molestias deleniti expedita possimus nihil at
            harum, fugit natus optio voluptatem autem unde earum, quis quas
            laboriosam voluptatibus repellendus deserunt. Neque quia quas autem
            natus maiores culpa! Laborum quibusdam vero officia deserunt tenetur
            nulla distinctio repellat error harum.
          </p>
        ))}
      </section>
    </main>
  );
};

export default BlogPage;
