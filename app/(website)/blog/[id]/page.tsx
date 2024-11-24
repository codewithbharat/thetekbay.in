import React from "react";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return (
    <main>
      <section>
        <h1 className="text-4xl font-serif capitalize">
          {id.split("-").join(" ")}
        </h1>
        <div className="w-full aspect-video bg-slate-500 my-2 md:my-5"></div>
        <p>
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
          nulla distinctio repellat error harum. Quae officia dolorem fuga,
          maiores voluptatum accusantium dicta a, magni ipsam aliquam atque eius
          repellat, ratione animi quia repellendus cupiditate! Impedit amet quis
          nisi ullam ipsum, labore laboriosam quidem, molestiae unde assumenda
          suscipit atque minima aliquid delectus ducimus. Atque cupiditate illo
          excepturi veritatis explicabo consequuntur. Voluptatem, laboriosam
          facilis. Sit inventore consequuntur officiis, aliquam laudantium,
          corrupti non, ad velit earum doloremque iusto numquam placeat quo
          molestias?
        </p>
        <p>
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
          nulla distinctio repellat error harum. Quae officia dolorem fuga,
          maiores voluptatum accusantium dicta a, magni ipsam aliquam atque eius
          repellat, ratione animi quia repellendus cupiditate! Impedit amet quis
          nisi ullam ipsum, labore laboriosam quidem, molestiae unde assumenda
          suscipit atque minima aliquid delectus ducimus. Atque cupiditate illo
          excepturi veritatis explicabo consequuntur. Voluptatem, laboriosam
          facilis. Sit inventore consequuntur officiis, aliquam laudantium,
          corrupti non, ad velit earum doloremque iusto numquam placeat quo
          molestias?
        </p>
        
      </section>
    </main>
  );
};

export default BlogPage;
