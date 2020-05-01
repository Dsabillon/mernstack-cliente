import React, { useContext, useEffect } from "react";

//Components
import Sidebar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTarea from "../tareas/ListadoTarea";

//Context
import authContext from "../../context/autenticación/authContext.js";

const Proyectos = () => {
  //extraer la información de autenticación
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTarea />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
