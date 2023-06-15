import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";
import { getGuitarras } from "~/models/guitarras.server";

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

export function meta() {
  return [
    { title: "GuitarLA - Tienda" },
    {
      description: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras",
    },
  ];
}

function Tienda() {
  const guitarras = useLoaderData();

  return <ListadoGuitarras guitarras={guitarras} />;
}

export default Tienda;
