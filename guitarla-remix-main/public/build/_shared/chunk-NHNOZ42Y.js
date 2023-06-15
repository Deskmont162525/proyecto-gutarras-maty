import {
  __commonJS,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-NLQNPAAV.js";

// empty-module:~/models/post.server
var require_post = __commonJS({
  "empty-module:~/models/post.server"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {};
  }
});

// app/utils/helpers.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export {
  require_post,
  formatearFecha
};
//# sourceMappingURL=/build/_shared/chunk-NHNOZ42Y.js.map
