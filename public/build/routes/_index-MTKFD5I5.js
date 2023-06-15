import {
  ListadoGuitarras
} from "/build/_shared/chunk-TFDRLCUO.js";
import {
  require_guitarras
} from "/build/_shared/chunk-6D5GWV7I.js";
import {
  blog_default
} from "/build/_shared/chunk-FV7WQAOM.js";
import {
  ListadoPosts
} from "/build/_shared/chunk-NTIMYQIB.js";
import {
  require_post
} from "/build/_shared/chunk-NHNOZ42Y.js";
import {
  guitarras_default
} from "/build/_shared/chunk-VDY4GV2Y.js";
import {
  useLoaderData
} from "/build/_shared/chunk-DDKS4U7P.js";
import {
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NLQNPAAV.js";

// empty-module:~/models/curso.server
var require_curso = __commonJS({
  "empty-module:~/models/curso.server"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {};
  }
});

// browser-route-module:routes/_index.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_guitarras = __toESM(require_guitarras());
var import_post = __toESM(require_post());

// app/styles/curso.css
var curso_default = "/build/_assets/curso-WYUSFDQR.css";

// app/routes/_index.jsx
var import_curso2 = __toESM(require_curso());

// app/components/curso.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso;
  const img = imagen.data.attributes.url;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { jsx: "true", children: `
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${img});
          }
        ` }, void 0, false, {
      fileName: "app/components/curso.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "heading", children: titulo }, void 0, false, {
        fileName: "app/components/curso.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: contenido }, void 0, false, {
        fileName: "app/components/curso.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/curso.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/curso.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/curso.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function meta() {
}
function links() {
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
  const { guitarras, posts, curso } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ListadoGuitarras, { guitarras }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Curso, { curso: curso.attributes }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ListadoPosts, { posts }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
var index_default = Index;
export {
  index_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-MTKFD5I5.js.map
