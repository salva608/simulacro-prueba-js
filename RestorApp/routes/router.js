import { render } from "../app.js";
import { login } from "../pages/login.js";


export async function router(){

    const hash = location.hash || '#/login'

    switch (hash) {
        case '#/login':
            render(login())       
            break;
        default:
            render(`404 error`)
            break;
    }
}