import { yarg } from "./config/plugins/yargs.adapter";


const { e: edad, p: permiso, m: mensage } = yarg;

const mensaje = mensage ? "Bienvenido a la disco" : "No tienes permiso para acceder";
if (edad >= permiso) {
    console.log(mensaje);
} 