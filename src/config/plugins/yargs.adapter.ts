import yargs, { options } from "yargs"
import { hideBin } from "yargs/helpers"

export const yarg = yargs(hideBin(process.argv))
    .option("e", {
        alias: "age",
        type: "number",
        demandOption: true,
        describe: "Your age"
    })
    .option("p", {
        alias: "permission",
        type: "number",
        default: 18,
        describe: "Minimum age to access"
    })
    .option("m", {
        alias: "message",
        type: "boolean",
        default: false,
        describe: "Welcome to the disco"
    })
    .check((argv, options) => {
        if (argv.e < argv.p) throw new Error("You not have permission to access")
        return true
    })
    .parseSync();
