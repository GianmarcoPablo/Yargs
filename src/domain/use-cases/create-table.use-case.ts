
export interface CreateTableOptions {
    base: number;
    limit?: number;
}

interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string
}


export class CreateTable implements CreateTableUseCase {
    constructor(
        /**
        *
        */
    ) { }

    execute({ base, limit = 10 }: CreateTableOptions) {
        let resultado = "";
        for (let i = 1; i <= limit; i++) {
            resultado += `${base} x ${i} = ${base * i}\n`;
        }
        return resultado;
    }
}