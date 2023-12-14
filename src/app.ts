import { yarg } from "./config/plugins/yargs.adapter";
import { ServerApp } from "./presentation/server-app";


(async () => {
    await main();
})();


async function main() {
    console.log(yarg);
}