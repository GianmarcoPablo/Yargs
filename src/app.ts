import { yarg } from "./config/plugins/yargs.adapter";


(async () => {
    await main();
})();

async function main() {
    console.log(yarg);
}