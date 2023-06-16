var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-UBCVSBJB.css";

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react");

// public/img/001 carrito.png
var carrito_default = "/build/_assets/001 carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Navegacion() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/", className: location.pathname === "/" ? "active" : "", children: "Inicio" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: "Nosotros"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/guitarras",
        className: location.pathname === "/guitarras" ? "active" : "",
        children: "Tienda"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        to: "/posts",
        className: location.pathname === "/posts" ? "active" : "",
        children: "Blog"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/carrito", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: carrito_default, alt: "carrito" }) })
  ] });
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { className: "logo", src: logo_default, alt: "logo" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(navegacion_default, {})
  ] }) });
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(navegacion_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { className: "copyright", children: [
      "\xA9 Todos los Derechos Reservados ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] })
  ] }) });
}
var footer_default = Footer;

// app/root.jsx
var import_react5 = require("react"), import_jsx_runtime5 = require("react/jsx-runtime");
function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { viewport: "width=device-width,initial-scale=1" }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "stylesheet",
      href: styles_default
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    }
  ];
}
function App() {
  let carritoLocalStorage = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react5.useState)(carritoLocalStorage);
  return (0, import_react5.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react4.Outlet,
    {
      context: {
        agregarCarrito: (guitarra) => {
          if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            let carritoACtualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
            setCarrito(carritoACtualizado);
          } else
            setCarrito([...carrito, guitarra]);
        },
        carrito,
        actualizarCantidad: (guitarra) => {
          let carritoACtualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
          setCarrito(carritoACtualizado);
        },
        eliminarGuitarra: (id) => {
          let carritoACtualizado = carrito.filter(
            (guitarraState) => guitarraState.id !== id
          );
          setCarrito(carritoACtualizado);
        }
      }
    }
  ) });
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(header_default, {}),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(footer_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.LiveReload, {})
    ] })
  ] });
}
function ErrorBoundary() {
  let error = (0, import_react4.useRouteError)();
  if (console.log(error), (0, import_react4.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Document, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "error", children: "Oops" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "error", children: [
        "Status: ",
        error.status
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "error", children: error.statusText }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { to: "/", className: "error-enlace", children: "Volver al Inicio" })
    ] });
  let errorMessage = error instanceof Error ? error.message : "Unknown error";
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "Uh oh ..." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Something went wrong." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("pre", { children: errorMessage })
  ] });
}

// app/routes/guitarras.$guitarraUrls.jsx
var guitarras_guitarraUrls_exports = {};
__export(guitarras_guitarraUrls_exports, {
  default: () => guitarras_guitarraUrls_default,
  loader: () => loader,
  meta: () => meta2
});
var import_react6 = require("@remix-run/react"), import_react7 = require("react");

// app/models/guitarras.server.js
async function getGuitarras() {
  let url = process.env.API_URL;
  return await (await fetch(`${url}/guitarras?populate=Imagen`)).json();
}
async function getGuitarra(url) {
  let urlApi = process.env.API_URL;
  return await (await fetch(
    `${urlApi}/guitarras?filters[url]=${url}&populate=Imagen`
  )).json();
}

// app/routes/guitarras.$guitarraUrls.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
async function loader({ params }) {
  let { guitarraUrls } = params, guitarra = await getGuitarra(guitarraUrls);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada"
    });
  return { guitarra };
}
function meta2({ data }) {
  return data ? [
    { title: `GuitarLA - ${data.guitarra.data[0].attributes.nombre}` },
    {
      description: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas"
    }
  ] : [{ title: "GuitarLA" }, { description: "Guitarra no encontrada" }];
}
var Guitarra = () => {
  let { agregarCarrito } = (0, import_react6.useOutletContext)(), [cantidad, setCantidad] = (0, import_react7.useState)(0), { guitarra } = (0, import_react6.useLoaderData)(), { nombre, descripcion, Imagen, precio } = guitarra.data[0].attributes, img = Imagen.data.attributes.url;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: img, alt: nombre, className: "imagen" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: nombre }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "texto", children: descripcion }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "precio", children: [
        "U$D ",
        precio
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("form", { className: "formulario", onSubmit: (e) => {
        if (e.preventDefault(), cantidad < 1) {
          alert("Seleccionar Cantidad");
          return;
        }
        let guitarraSeleccionada = {
          id: guitarra.data[0].id,
          img,
          nombre,
          cantidad,
          precio
        };
        agregarCarrito(guitarraSeleccionada);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { htmlFor: "cantidad", children: "Cantidad" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "select",
          {
            id: "cantidad",
            onChange: (e) => setCantidad(parseInt(e.target.value)),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "0", children: "-- Seleccione --" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "1", children: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "2", children: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "3", children: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "4", children: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { value: "5", children: "5" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { type: "submit", value: "Comprar" })
      ] })
    ] })
  ] });
}, guitarras_guitarraUrls_default = Guitarra;

// app/routes/guitarras._index.jsx
var guitarras_index_exports = {};
__export(guitarras_index_exports, {
  default: () => guitarras_index_default,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react8 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime"), Guitarra2 = ({ guitarra }) => {
  let { descripcion, Imagen, precio, url, nombre } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: Imagen.data.attributes.formats.medium.url, alt: url }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: nombre }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "descripcion", children: descripcion }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "precio", children: [
        "U$D ",
        precio
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react8.Link, { className: "enlace", to: `/guitarras/${url}`, children: "Ver Producto" })
    ] })
  ] });
}, guitarra_default = Guitarra2;

// app/components/listado-guitarras.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "heading", children: "Nuestra Colecci\xF3n" }),
    (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(guitarra_default, { guitarra: guitarra.attributes }, guitarra.id)) })
  ] });
}

// app/routes/guitarras._index.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
async function loader2() {
  return (await getGuitarras()).data;
}
function meta3() {
  return [
    { title: "GuitarLA - Tienda" },
    {
      description: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras"
    }
  ];
}
function Tienda() {
  let guitarras = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ListadoGuitarras, { guitarras });
}
var guitarras_index_default = Tienda;

// app/routes/posts.$postUrl.jsx
var posts_postUrl_exports = {};
__export(posts_postUrl_exports, {
  default: () => PostUrl,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta4
});
var import_react10 = require("@remix-run/react");

// app/models/post.server.js
async function getPosts() {
  let url = process.env.API_URL;
  return await (await fetch(`${url}/posts?populate=imagen`)).json();
}
async function getPost(url) {
  let urlApi = process.env.API_URL;
  return await (await fetch(
    `${urlApi}/posts?filters[url]=${url}&populate=imagen`
  )).json();
}

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/styles/blog.css
var blog_default = "/build/_assets/blog-WWPFPZAE.css";

// app/routes/posts.$postUrl.jsx
var import_jsx_runtime10 = require("react/jsx-runtime");
async function loader3({ params }) {
  let { postUrl } = params, post = await getPost(postUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada"
    });
  return post;
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function meta4({ data }) {
  var _a;
  return data ? [
    { title: `GuitarLA - ${(_a = data == null ? void 0 : data.data[0]) == null ? void 0 : _a.attributes.titulo}` },
    {
      descrpcion: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas"
    }
  ] : [
    { title: "GuitarLa - Pag no encontrada" },
    {
      descrpcion: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas"
    }
  ];
}
function PostUrl() {
  var _a;
  let post = (0, import_react10.useLoaderData)(), { titulo, contenido, imagen, publishedAt } = post == null ? void 0 : post.data[0].attributes, img = (_a = imagen == null ? void 0 : imagen.data) == null ? void 0 : _a.attributes.formats.medium.url;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("article", { className: "post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { className: "imagen", src: img, alt: titulo }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "fecha", children: formatearFecha(publishedAt) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "texto", children: contenido })
    ] })
  ] });
}

// app/routes/posts._index.jsx
var posts_index_exports = {};
__export(posts_index_exports, {
  default: () => posts_index_default,
  loader: () => loader4,
  meta: () => meta5
});
var import_react12 = require("@remix-run/react");

// app/components/post.jsx
var import_react11 = require("@remix-run/react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function Post({ post }) {
  let { contenido, imagen, titulo, url, publishedAt } = post, img = imagen.data.attributes.formats.small.url;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { className: "imagen", src: img, alt: titulo }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "fecha", children: formatearFecha(publishedAt) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "resumen", children: contenido }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react11.Link, { className: "enlace", to: `/posts/${url}`, children: "Leer Post" })
    ] })
  ] });
}

// app/components/listado-posts.jsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "heading", children: "B l o g" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "blog", children: posts && (posts == null ? void 0 : posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Post, { post: post.attributes }, post.id))) })
  ] });
}

// app/routes/posts._index.jsx
var import_jsx_runtime13 = require("react/jsx-runtime");
async function loader4() {
  return (await getPosts()).data;
}
function meta5() {
  return [
    {
      title: "GuitarLA - Blog",
      description: "GuitarLA, venta de guitarras"
    }
  ];
}
function Blog() {
  let posts = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ListadoPosts, { posts });
}
var posts_index_default = Blog;

// app/routes/guitarras.jsx
var guitarras_exports = {};
__export(guitarras_exports, {
  default: () => guitarras_default2,
  links: () => links3
});
var import_react13 = require("@remix-run/react");

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-4L7CW6TL.css";

// app/routes/guitarras.jsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function links3() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
function Tienda2() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react13.Outlet, { context: (0, import_react13.useOutletContext)() }) });
}
var guitarras_default2 = Tienda2;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links4,
  meta: () => meta6
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-6XXHILW2.css";

// app/routes/nosotros.jsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function meta6() {
  return [
    { title: "GuitarLA - Nosotros" },
    { description: "Venta de Guitarras, Blog de Musica" }
  ];
}
function links4() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "imagen"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "heading", children: "Nosotros" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: nosotros_default, alt: "imagen" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "En nuestra tienda de guitarras, nos apasiona la m\xFAsica y nos enfocamos en brindar una experiencia excepcional a nuestros clientes. Ofrecemos una amplia selecci\xF3n de guitarras de alta calidad para m\xFAsicos de todos los niveles y estilos. Nuestro equipo de expertos est\xE1 listo para asesorarte y ayudarte a encontrar la guitarra perfecta que se adapte a tu estilo \xFAnico." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "Adem\xE1s de las guitarras, ofrecemos servicios de primera clase. Contamos con t\xE9cnicos altamente capacitados que pueden ajustar, reparar y personalizar tu instrumento. Tambi\xE9n organizamos eventos y talleres para que los m\xFAsicos puedan compartir su pasi\xF3n y aprender de otros artistas. Nos enorgullece ser parte de la comunidad musical y ser el destino preferido para aquellos que buscan su guitarra perfecta. Te invitamos a visitarnos y vivir una experiencia inolvidable en nuestra tienda de guitarras." })
      ] })
    ] })
  ] });
}
var nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => Carrito,
  links: () => links5,
  meta: () => meta7
});
var import_react14 = require("@remix-run/react"), import_react15 = require("react");

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-F5A7VGEL.css";

// app/routes/carrito.jsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function meta7() {
  return [
    { title: "GuitarLA - Compras" },
    { description: "Venta de Guitarras, Blog de Musica" }
  ];
}
function links5() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default2
    }
  ];
}
function Carrito() {
  let [total, setTotal] = (0, import_react15.useState)(0), { carrito, actualizarCantidad, eliminarGuitarra } = (0, import_react14.useOutletContext)();
  return (0, import_react15.useEffect)(() => {
    let calculoTotal = carrito.reduce(
      (total2, producto) => total2 + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h1", { className: "heading", children: "Carrito de Compras" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { children: "Articulos" }),
        (carrito == null ? void 0 : carrito.length) === 0 ? "Carrito Vac\xEDo" : carrito == null ? void 0 : carrito.map(
          (producto) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "producto", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: producto.img, alt: producto.nombre }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "nombre", children: producto.nombre }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: "Cantidad:" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                "select",
                {
                  value: producto.cantidad,
                  className: "select",
                  onChange: (e) => actualizarCantidad({
                    cantidad: +e.target.value,
                    id: producto.id
                  }),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "1", children: "1" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "2", children: "2" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "3", children: "3" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "4", children: "4" }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { value: "5", children: "5" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "precio", children: [
                "U$D ",
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: producto.precio })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "subtotal", children: [
                "SubTotal U$D",
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: producto.cantidad * producto.precio })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "button",
              {
                type: "button",
                className: "btn_eliminar",
                onClick: () => eliminarGuitarra(producto.id),
                children: "X"
              }
            )
          ] }, producto.id)
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { children: "Resumen de Pedido" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { children: [
          "Total a Pagar: U$D ",
          total
        ] })
      ] })
    ] })
  ] });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  links: () => links6,
  loader: () => loader5,
  meta: () => meta8
});
var import_react16 = require("@remix-run/react");

// app/styles/curso.css
var curso_default = "/build/_assets/curso-ZPSYIDYO.css";

// app/models/curso.server.js
async function getCurso() {
  let url = process.env.API_URL;
  return await (await fetch(`${url}/curso?populate=imagen`)).json();
}

// app/components/curso.jsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function Curso({ curso }) {
  let { contenido, imagen, titulo } = curso, img = imagen.data.attributes.url;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("style", { jsx: "true", children: `
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${img});
          }
        ` }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "heading", children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "texto", children: contenido })
    ] }) })
  ] });
}

// app/routes/_index.jsx
var import_jsx_runtime18 = require("react/jsx-runtime");
async function loader5() {
  let [guitarras, posts, curso] = await Promise.all(
    [
      getGuitarras(),
      getPosts(),
      getCurso()
    ]
  );
  return { guitarras: guitarras.data, posts: posts.data, curso: curso.data };
}
function meta8() {
}
function links6() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    },
    {
      rel: "stylesheet",
      href: curso_default
    }
  ];
}
function Index() {
  let { guitarras, posts, curso } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ListadoGuitarras, { guitarras }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Curso, { curso: curso.attributes }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ListadoPosts, { posts }) })
  ] });
}
var index_default = Index;

// app/routes/posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default,
  links: () => links7
});
var import_react17 = require("@remix-run/react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function links7() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function Blog2() {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react17.Outlet, {}) });
}
var posts_default = Blog2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ODV3STOS.js", imports: ["/build/_shared/chunk-K454JM2K.js", "/build/_shared/chunk-5XCBIPQZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PXNPBHMT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-23EVMO27.js", imports: ["/build/_shared/chunk-AOEGNPPN.js", "/build/_shared/chunk-PKTLV57A.js", "/build/_shared/chunk-KE7PP56N.js", "/build/_shared/chunk-ADSADLD3.js", "/build/_shared/chunk-MOOO3WCG.js", "/build/_shared/chunk-2Z6N72RA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-RG2J5B4A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras": { id: "routes/guitarras", parentId: "root", path: "guitarras", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras-HXRVG7TG.js", imports: ["/build/_shared/chunk-2Z6N72RA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras.$guitarraUrls": { id: "routes/guitarras.$guitarraUrls", parentId: "routes/guitarras", path: ":guitarraUrls", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras.$guitarraUrls-H4XWGEBO.js", imports: ["/build/_shared/chunk-PKTLV57A.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras._index": { id: "routes/guitarras._index", parentId: "routes/guitarras", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/guitarras._index-DTAOSM4V.js", imports: ["/build/_shared/chunk-AOEGNPPN.js", "/build/_shared/chunk-PKTLV57A.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-XKUKLQWY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-IJGKFKRV.js", imports: ["/build/_shared/chunk-KE7PP56N.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$postUrl": { id: "routes/posts.$postUrl", parentId: "routes/posts", path: ":postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$postUrl-RLJSKSCX.js", imports: ["/build/_shared/chunk-MOOO3WCG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts._index": { id: "routes/posts._index", parentId: "routes/posts", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts._index-XVQ2XWBT.js", imports: ["/build/_shared/chunk-ADSADLD3.js", "/build/_shared/chunk-MOOO3WCG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "fadd4695", hmr: void 0, url: "/build/manifest-FADD4695.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras.$guitarraUrls": {
    id: "routes/guitarras.$guitarraUrls",
    parentId: "routes/guitarras",
    path: ":guitarraUrls",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_guitarraUrls_exports
  },
  "routes/guitarras._index": {
    id: "routes/guitarras._index",
    parentId: "routes/guitarras",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: guitarras_index_exports
  },
  "routes/posts.$postUrl": {
    id: "routes/posts.$postUrl",
    parentId: "routes/posts",
    path: ":postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: posts_postUrl_exports
  },
  "routes/posts._index": {
    id: "routes/posts._index",
    parentId: "routes/posts",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: posts_index_exports
  },
  "routes/guitarras": {
    id: "routes/guitarras",
    parentId: "root",
    path: "guitarras",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
