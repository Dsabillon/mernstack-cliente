import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //Context de proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //Context de tareas
  const tareaContext = useContext(TareaContext);
  const { obtenerTareas } = tareaContext;

  //Función general para obtener le proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id);
    obtenerTareas(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
