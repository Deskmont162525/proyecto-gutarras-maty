import {
  ListadoPosts
} from "/build/_shared/chunk-NTIMYQIB.js";
import {
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

// browser-route-module:routes/posts._index.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/posts._index.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return [
    {
      title: "GuitarLA - Blog",
      description: "GuitarLA, venta de guitarras"
    }
  ];
}
function Blog() {
  const posts = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoPosts, { posts }, void 0, false, {
    fileName: "app/routes/posts._index.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
var posts_index_default = Blog;
export {
  posts_index_default as default,
  meta
};
//# sourceMappingURL=/build/routes/posts._index-RJ4VRIQK.js.map
