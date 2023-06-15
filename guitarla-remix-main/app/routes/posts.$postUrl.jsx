import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import { formatearFecha } from "~/utils/helpers";
import style from "../styles/blog.css";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }
  return post;
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

export function meta({ data }) {
  if (!data) {
    return [
      { title: "GuitarLa - Pag no encontrada" },
      {
        descrpcion:
          "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas",
      },
    ];
  }
  const titulo = data?.data[0]?.attributes.titulo;

  return [
    { title: `GuitarLA - ${titulo}` },
    {
      descrpcion:
        "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas",
    },
  ];
}

export default function PostUrl() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post?.data[0].attributes;
  const img = imagen?.data?.attributes.formats.medium.url;
  return (
    <article className="post mt-3">
      <img className="imagen" src={img} alt={titulo} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
}
