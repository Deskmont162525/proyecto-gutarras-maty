import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";
import ListadoPosts from "~/components/listado-posts";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/post.server";
import styleGuit from "~/styles/guitarras.css";
import stylePost from "~/styles/blog.css";
import stylesCurso from "~/styles/curso.css";
import { getCurso } from "~/models/curso.server";
import Curso from "~/components/curso";

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return { guitarras: guitarras.data, posts: posts.data, curso: curso.data };
}
export function meta() {}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styleGuit,
    },
    {
      rel: "stylesheet",
      href: stylePost,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}
function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso.attributes} />
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}

export default Index;
