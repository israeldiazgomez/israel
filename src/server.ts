import { App } from "./config/index";

async function mian() {
    const app = new App(4000);
    await app.listen()
}

mian();