import {
  ListadoGuitarras
} from "/build/_shared/chunk-TFDRLCUO.js";
import {
  require_guitarras
} from "/build/_shared/chunk-6D5GWV7I.js";
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

// browser-route-module:routes/guitarras._index.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/guitarras._index.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_guitarras = __toESM(require_guitarras());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return [
    { title: "GuitarLA - Tienda" },
    {
      description: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras"
    }
  ];
}
function Tienda() {
  const guitarras = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoGuitarras, { guitarras }, void 0, false, {
    fileName: "app/routes/guitarras._index.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
var guitarras_index_default = Tienda;
export {
  guitarras_index_default as default,
  meta
};
//# sourceMappingURL=/build/routes/guitarras._index-NNNY7OVT.js.map
