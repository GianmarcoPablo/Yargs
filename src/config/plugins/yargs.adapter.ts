import yargs, { options } from "yargs"
import { hideBin } from "yargs/helpers"

export const yarg = yargs(hideBin(process.argv))
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Multiplication table base"
    })
    .option("l", {
        alias: "limit",
        type: "number",
        default: 10,
        describe: "Multiplication table limit"
    })
    .option("s", {
        alias: "show",
        type: "boolean",
        default: false,
        describe: "Show multiplication table on console"
    })
    .option("n", {
        alias: "name",
        type: "string",
        default: "tablacool",
        describe: "File name"
    })
    .option("d", {
        alias: "destination",
        type: "string",
        default: "./prueba",
        describe: "File destination"
    })
    .check((argv: any, options) => {

        if ((argv.base) < 1) throw "Error: base must be greater than 0"

        return true
    })
    .parseSync() 