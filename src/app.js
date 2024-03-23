
const app = {
  async bootstrap(props){
    console.log("Inicio de la app js", props);
  },

  async mount(props) {
    console.log("App-montada:", props);
    const contenedor = document.getElementById("app-javascript");
    const boton = document.createElement("button");
    boton.innerHTML = "Click me!";
    contenedor.appendChild(boton);
  },

  async unmount(props) {
    console.log("App-desmontado", props);
    const contenedor = document.getElementById("app-javascript");
    contenedor.innerHTML = "";
  }
};

export const { bootstrap, mount, unmount } = app;