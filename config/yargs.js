const descripcion = {
  alias: "d",
  demand: true,
  desc: "Descripcion del TODO",
};

const completado = {
  alias: "c",
  default: true,
  desc: "Marca como completado el TODO",
};

const argv = require("yargs")
  .command("crear", "Crear un elemento TODO", {
    descripcion,
  })
  .command("actualizar", "Actualizar el estado completado de un TODO", {
    descripcion,
    completado,
  })
  .command("borrar", "Borrar un TODO especifico", {
    descripcion,
  })
  .command("listar", "Listar todas las tareas guardadas", {})
  .help().argv;

module.exports = {
  argv,
};
