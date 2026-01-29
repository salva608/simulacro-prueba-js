import { initLogin } from "./login.js";
import { initHome } from "./home.js";
import { routes } from "./routes.js";




window.addEventListener("hashchange", ()=>{
    
    navigate(location.hash)
})


export async function navigate(path){
    const route = routes[path]
    const page = await fetch(route)
    const html = await page.text()
    

    document.getElementById("app").innerHTML = html;

    
    const viewHandlers = {
    "#login": initLogin,
    "#home": initHome,

        };

       if (viewHandlers[path]){
        viewHandlers[path]()
       }

}





