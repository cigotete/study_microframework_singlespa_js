window.appJavascript = {

  // método opcional para inicializar la aplicación
  async bootstrap(props){
    console.log("Inicio de la app js", props);
  },

  // método obligatorio para montar la aplicación
  async mount(props) {
    console.log("App-montada:", props);
    const contenedor = document.getElementById("app-mf-javascript");
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