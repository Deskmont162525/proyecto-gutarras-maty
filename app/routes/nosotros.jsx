import imagen from "../../public/img/nosotros.jpg";
import style from "../styles/nosotros.css";

export function meta() {
  return [
    { title: "GuitarLA - Nosotros" },
    { description: "Venta de Guitarras, Blog de Musica" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
    {
      rel: "preload",
      href: imagen,
      as: "imagen",
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen" />
        <div>
          <p>
            En nuestra tienda de guitarras, nos apasiona la música y nos
            enfocamos en brindar una experiencia excepcional a nuestros
            clientes. Ofrecemos una amplia selección de guitarras de alta
            calidad para músicos de todos los niveles y estilos. Nuestro equipo
            de expertos está listo para asesorarte y ayudarte a encontrar la
            guitarra perfecta que se adapte a tu estilo único.
          </p>
          <p>
            Además de las guitarras, ofrecemos servicios de primera clase.
            Contamos con técnicos altamente capacitados que pueden ajustar,
            reparar y personalizar tu instrumento. También organizamos eventos y
            talleres para que los músicos puedan compartir su pasión y aprender
            de otros artistas. Nos enorgullece ser parte de la comunidad musical
            y ser el destino preferido para aquellos que buscan su guitarra
            perfecta. Te invitamos a visitarnos y vivir una experiencia
            inolvidable en nuestra tienda de guitarras.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
