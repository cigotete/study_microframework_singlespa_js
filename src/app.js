import { registerApplication, start } from "single-spa";

const app = {

  // método opcional para inicializar la aplicación
  async bootstrap(props){
    console.log("Inico de la app");
  },

  // método obligatorio para montar la aplicación
  async mount(props) {
    console.log("App-montada:");
  },

  // método obligatorio para desmontar la aplicación
  async unmount(props) {
    console.log("App-desmontado");
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