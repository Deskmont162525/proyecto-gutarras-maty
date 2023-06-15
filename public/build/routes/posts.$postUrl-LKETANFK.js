import {
  blog_default
} from "/build/_shared/chunk-FV7WQAOM.js";
import {
  formatearFecha,
  require_post
} from "/build/_shared/chunk-NHNOZ42Y.js";
import {
  useLoaderData
} from "/build/_shared/chunk-DDKS4U7P.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/posts.$postUrl.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/posts.$postUrl.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function meta({ data }) {
  var _a;
  if (!data) {
    return [
      { title: "GuitarLa - Pag no encontrada" },
      {
        descrpcion: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas"
      }
    ];
  }
  const titulo = (_a = data == null ? void 0 : data.data[0]) == null ? void 0 : _a.attributes.titulo;
  return [
    { title: `GuitarLA - ${titulo}` },
    {
      descrpcion: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas"
    }
  ];
}
function PostUrl() {
  var _a;
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post == null ? void 0 : post.data[0].attributes;
  const img = (_a = imagen == null ? void 0 : imagen.data) == null ? void 0 : _a.attributes.formats.medium.url;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "imagen", src: img, alt: titulo }, void 0, false, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: titulo }, void 0, false, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, false, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: contenido }, void 0, false, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.$postUrl.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
export {
  PostUrl as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/posts.$postUrl-LKETANFK.js.map
