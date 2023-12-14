interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}

const prueba = "hola"
console.log(prueba);

export class ServerApp {

    static run(options: RunOptions) {
        console.log("Server running...");
        console.log(options);
    }
}