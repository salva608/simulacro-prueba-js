import { routes } from "./router/routes.js";
import { initHome } from "./views/home.js";
import { initLogin } from "./views/login.js";

window.addEventListener("hashchange", () => {
  navigate(location.hash);
});

export async function navigate(path) {
  const route = routes[path];
  const page = await fetch(route);
  const html = await page.text();

  document.getElementById("app").innerHTML = "";
  document.getElementById("app").innerHTML = html;

  const viewHandlers = {
    "#login": initLogin,
    "#home": initHome,
  };

  if (viewHandlers[path]) {
    viewHandlers[path]();
  }
}
