import { Link } from "@remix-run/react";

const Guitarra = ({ guitarra }) => {
  const { descripcion, Imagen, precio, url, nombre } = guitarra;
  return (
    <div className="guitarra">
      <img src={Imagen.data.attributes.formats.medium.url} alt={url} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">U$D {precio}</p>
        <Link className="enlace" to={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
