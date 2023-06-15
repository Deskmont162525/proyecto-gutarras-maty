import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/listado-posts";
import { getPosts } from "~/models/post.server";

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

export function meta() {
  return [
    {
      title: "GuitarLA - Blog",
      description: "GuitarLA, venta de guitarras",
    },
  ];
}

function Blog() {
  const posts = useLoaderData();

  return <ListadoPosts posts={posts} />;
}

export default Blog;
