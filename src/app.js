import { registerApplication, start } from "single-spa";

const app = {

  // método opcional para inicializar la aplicación
  async bootstrap(props){
    console.log("Inico de la app", props);
  },

  // método obligatorio para montar la aplicación
  async mount(props) {
    console.log("App-montada:", props);
    const contenedor = document.getElementById("app");
    const boton = document.createElement("button");
    boton.textContent = `Guardar ${props.nombre}`;
    contenedor.appendChild(boton);
  },

  // método obligatorio para desmontar la aplicación
  async unmount(props) {
    console.log("App-desmontado", props);
    const contenedor = document.getElementById("app");
    contenedor.innerHTML = "";
  }
};

registerApplication({
  name: "app-mf-javascript",
  app,
  activeWhen: ["/"],
  customProps: {
    codigo: "001",
    nombre: "Botón Javascript"
  }
});

start();