import fs from "fs";
import path from "path";

let headers: string = ` 
=============================
        TABLA DEL 5";
=============================\n
`
let base: number = 5;
let limit: number = 10;
const fileName: string = `tabla-${base}.txt`;
const folderPath: string = path.join(__dirname, "outputs");
const filePath: string = path.join(folderPath, fileName);
let resultado: string = "";

for (let i = 1; i <= limit; i++) {
    resultado += `${base} x ${i} = ${base * i}\n`;
}

// Crear la carpeta 'outputs' dentro de 'src' si no existe
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
}

resultado = headers + resultado;

// Escribir en el archivo
fs.writeFile(filePath, resultado, (err) => {
    if (err) {
        console.error("Error al escribir en el archivo:", err);
    } else {
        console.log(`Archivo ${fileName} creado exitosamente en la carpeta src/outputs.`);
    }
});
