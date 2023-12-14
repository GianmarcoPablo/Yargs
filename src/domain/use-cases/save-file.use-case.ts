import fs from "fs";

export interface SaveFileOptions {
    fileName: string;
    destination: string;
    fileContent: string;
}

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean
}


export class SaveFile implements SaveFileUseCase {

    execute({ fileContent, destination, fileName }: SaveFileOptions) {
        const filePath = `${destination}/${fileName}`;
        try {
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${filePath}.txt`, fileContent);
            return true;
        } catch (error) {
            console.error("Error al escribir en el archivo:", error);
            return false;
        }
    }
}