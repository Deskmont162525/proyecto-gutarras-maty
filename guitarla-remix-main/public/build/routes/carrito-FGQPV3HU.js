import {
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

// browser-route-module:routes/carrito.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/carrito.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());

// app/styles/carrito.css
var carrito_default = "/build/_assets/carrito-MKB2XDO7.css";

// app/routes/carrito.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return [
    { title: "GuitarLA - Compras" },
    { description: "Venta de Guitarras, Blog de Musica" }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default
    }
  ];
}
function Carrito() {
  const [total, setTotal] = (0, import_react2.useState)(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();
  (0, import_react2.useEffect)(() => {
    const calculoTotal = carrito.reduce(
      (total2, producto) => total2 + producto.cantidad * producto.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "heading", children: "Carrito de Compras" }, void 0, false, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Articulos" }, void 0, false, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        (carrito == null ? void 0 : carrito.length) === 0 ? "Carrito Vac\xEDo" : carrito == null ? void 0 : carrito.map(
          (producto) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "producto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: producto.img, alt: producto.nombre }, void 0, false, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 44,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 43,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "nombre", children: producto.nombre }, void 0, false, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 47,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Cantidad:" }, void 0, false, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 48,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "select",
                {
                  value: producto.cantidad,
                  className: "select",
                  onChange: (e) => actualizarCantidad({
                    cantidad: +e.target.value,
                    id: producto.id
                  }),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "1", children: "1" }, void 0, false, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 60,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "2", children: "2" }, void 0, false, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 61,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "3" }, void 0, false, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 62,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "4", children: "4" }, void 0, false, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 63,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "5", children: "5" }, void 0, false, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 64,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 50,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "precio", children: [
                "U$D ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: producto.precio }, void 0, false, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 68,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 67,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "subtotal", children: [
                "SubTotal U$D",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: producto.cantidad * producto.precio }, void 0, false, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 72,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 70,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 46,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                className: "btn_eliminar",
                onClick: () => eliminarGuitarra(producto.id),
                children: "X"
              },
              void 0,
              false,
              {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 75,
                columnNumber: 19
              },
              this
            )
          ] }, producto.id, true, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 42,
            columnNumber: 11
          }, this)
        )
      ] }, void 0, true, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Resumen de Pedido" }, void 0, false, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Total a Pagar: U$D ",
          total
        ] }, void 0, true, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
export {
  Carrito as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/carrito-FGQPV3HU.js.map
