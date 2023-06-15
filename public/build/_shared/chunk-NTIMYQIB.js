import {
  formatearFecha
} from "/build/_shared/chunk-NHNOZ42Y.js";
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

// app/components/listado-posts.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/post.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  const img = imagen.data.attributes.formats.small.url;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "imagen", src: img, alt: titulo }, void 0, false, {
      fileName: "app/components/post.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: titulo }, void 0, false, {
        fileName: "app/components/post.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, false, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "resumen", children: contenido }, void 0, false, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "enlace", to: `/posts/${url}`, children: "Leer Post" }, void 0, false, {
        fileName: "app/components/post.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/post.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/post.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/listado-posts.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "heading", children: "B l o g" }, void 0, false, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "blog", children: posts && (posts == null ? void 0 : posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Post, { post: post.attributes }, post.id, false, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 9,
      columnNumber: 32
    }, this))) }, void 0, false, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/listado-posts.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

export {
  ListadoPosts
};
//# sourceMappingURL=/build/_shared/chunk-NTIMYQIB.js.map
