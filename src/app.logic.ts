import { yarg } from "./config/plugins/yargs.adapter";
import fs from "fs";
import path from "path";

const { b: base, l: limit, s: show } = yarg;
const fileName = `tabla-${base}.txt`;
const folderPath = path.join(__dirname, "outputs");
const filePath = path.join(folderPath, fileName);
let resultado = "";
let headers = ` 
=============================
        TABLA DEL 5";
=============================\n
`

resultado = headers + resultado;

if (show) {
    console.log(resultado);
}

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
}

fs.writeFile(filePath, resultado, (err) => {
    if (err) {
        console.error("Error al escribir en el archivo:", err);
    } else {
        console.log(err);
    }
});