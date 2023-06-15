import {
  Link
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

// app/components/listado-guitarras.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/guitarra.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Guitarra = ({ guitarra }) => {
  const { descripcion, Imagen, precio, url, nombre } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: Imagen.data.attributes.formats.medium.url, alt: url }, void 0, false, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: nombre }, void 0, false, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, false, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "precio", children: [
        "U$D ",
        precio
      ] }, void 0, true, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "enlace", to: `/guitarras/${url}`, children: "Ver Producto" }, void 0, false, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var guitarra_default = Guitarra;

// app/components/listado-guitarras.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "heading", children: "Nuestra Colecci\xF3n" }, void 0, false, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(guitarra_default, { guitarra: guitarra.attributes }, guitarra.id, false, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/listado-guitarras.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

export {
  ListadoGuitarras
};
//# sourceMappingURL=/build/_shared/chunk-TFDRLCUO.js.map
