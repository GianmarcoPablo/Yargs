import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}


export class ServerApp {

    static run({ base, limit, showTable, name, destination }: RunOptions) {
        const table = new CreateTable().execute({ base, limit });
        const wasSave = new SaveFile().execute({
            fileName: `${name}-${base}`,
            destination,
            fileContent: table
        })
        if (showTable) console.log(table);
        (wasSave)
            ? console.log("Archivo guardado correctamente")
            : console.log("Error al guardar el archivo")
    }
}