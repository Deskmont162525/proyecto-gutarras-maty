import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
  const { guitarraUrls } = params;
  const guitarra = await getGuitarra(guitarraUrls);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return { guitarra };
}

export function meta({ data }) {
  if (!data) {
    return [{ title: "GuitarLA" }, { description: "Guitarra no encontrada" }];
  }

  const nombre = data.guitarra.data[0].attributes.nombre;
  return [
    { title: `GuitarLA - ${nombre}` },
    {
      description:
        "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas",
    },
  ];
}

const Guitarra = () => {
  const { agregarCarrito } = useOutletContext();

  const [cantidad, setCantidad] = useState(0);

  const { guitarra } = useLoaderData();
  const { nombre, descripcion, Imagen, precio } = guitarra.data[0].attributes;
  const img = Imagen.data.attributes.url;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Seleccionar Cantidad");
      return;
    }
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      img,
      nombre,
      cantidad,
      precio,
    };
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <div className="guitarra">
      <img src={img} alt={nombre} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">U$D {precio}</p>
        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>
          <select
            id="cantidad"
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Comprar" />
        </form>
      </div>
    </div>
  );
};

export default Guitarra;
