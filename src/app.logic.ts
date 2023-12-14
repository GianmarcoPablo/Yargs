import { yarg } from "./config/plugins/yargs.adapter";


const { e: edad, p: permiso, m: mensage } = yarg;


if (edad < permiso) {
    console.log("No tienes permiso para acceder");
} else {
    console.log("Bienvenido a la disco");
    if (mensage) {
        console.log("Bienvenido a la disco");
    }
}