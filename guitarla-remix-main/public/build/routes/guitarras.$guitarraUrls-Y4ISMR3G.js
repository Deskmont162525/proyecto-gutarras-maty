import {
  require_guitarras
} from "/build/_shared/chunk-6D5GWV7I.js";
import {
  useLoaderData,
  useOutletContext
} from "/build/_shared/chunk-DDKS4U7P.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/guitarras.$guitarraUrls.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/guitarras.$guitarraUrls.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());
var import_guitarras = __toESM(require_guitarras());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta({ data }) {
  if (!data) {
    return [{ title: "GuitarLA" }, { description: "Guitarra no encontrada" }];
  }
  const nombre = data.guitarra.data[0].attributes.nombre;
  return [
    { title: `GuitarLA - ${nombre}` },
    {
      description: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas"
    }
  ];
}
var Guitarra = () => {
  const { agregarCarrito } = useOutletContext();
  const [cantidad, setCantidad] = (0, import_react2.useState)(0);
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
      precio
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: img, alt: nombre, className: "imagen" }, void 0, false, {
      fileName: "app/routes/guitarras.$guitarraUrls.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: nombre }, void 0, false, {
        fileName: "app/routes/guitarras.$guitarraUrls.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, false, {
        fileName: "app/routes/guitarras.$guitarraUrls.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "precio", children: [
        "U$D ",
        precio
      ] }, void 0, true, {
        fileName: "app/routes/guitarras.$guitarraUrls.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "formulario", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "cantidad", children: "Cantidad" }, void 0, false, {
          fileName: "app/routes/guitarras.$guitarraUrls.jsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "select",
          {
            id: "cantidad",
            onChange: (e) => setCantidad(parseInt(e.target.value)),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "0", children: "-- Seleccione --" }, void 0, false, {
                fileName: "app/routes/guitarras.$guitarraUrls.jsx",
                lineNumber: 70,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "1" }, void 0, false, {
                fileName: "app/routes/guitarras.$guitarraUrls.jsx",
                lineNumber: 71,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", children: "2" }, void 0, false, {
                fileName: "app/routes/guitarras.$guitarraUrls.jsx",
                lineNumber: 72,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "3" }, void 0, false, {
                fileName: "app/routes/guitarras.$guitarraUrls.jsx",
                lineNumber: 73,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "4", children: "4" }, void 0, false, {
                fileName: "app/routes/guitarras.$guitarraUrls.jsx",
                lineNumber: 74,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "5", children: "5" }, void 0, false, {
                fileName: "app/routes/guitarras.$guitarraUrls.jsx",
                lineNumber: 75,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/guitarras.$guitarraUrls.jsx",
            lineNumber: 66,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", value: "Comprar" }, void 0, false, {
          fileName: "app/routes/guitarras.$guitarraUrls.jsx",
          lineNumber: 77,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/guitarras.$guitarraUrls.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guitarras.$guitarraUrls.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/guitarras.$guitarraUrls.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
};
var guitarras_guitarraUrls_default = Guitarra;
export {
  guitarras_guitarraUrls_default as default,
  meta
};
//# sourceMappingURL=/build/routes/guitarras.$guitarraUrls-Y4ISMR3G.js.map
