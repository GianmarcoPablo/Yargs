import { yarg } from "./config/plugins/yargs.adapter";
import fs from "fs";
import path from "path";

const { b: base, l: limit, s: show } = yarg;

let headers = ` 
=============================
        TABLA DEL 5";
=============================\n
`
const fileName = `tabla-${base}.txt`;
const folderPath = path.join(__dirname, "outputs");
const filePath = path.join(folderPath, fileName);
let resultado = "";

for (let i = 1; i <= limit; i++) {
    resultado += `${base} x ${i} = ${base * i}\n`;
}

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
}

resultado = headers + resultado;

fs.writeFile(filePath, resultado, (err) => {
    if (err) {
        console.error("Error al escribir en el archivo:", err);
    } else {
        if (show) {
            console.log(resultado);
        }
    }
});
