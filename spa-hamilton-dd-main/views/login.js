import { navigate } from "../app";
import { getUsers, getUsersByEmail } from "../services/users";

export const initLogin = async () => {
  const arrayUsers = await getUsers();
  console.log(arrayUsers);

  const inputUser = document.getElementById("login-input");
  const inputPass = document.getElementById("login-pass");
  const btnSend = document.getElementById("login-button");

  let user;
  let pass;

  inputUser.addEventListener("input", (e) => {
    user = e.target.value;
  });

  inputPass.addEventListener("input", (e) => {
    pass = e.target.value;
  });

  btnSend.addEventListener("click", async () => {
    const userFound = await getUsersByEmail(user);

    if (pass === userFound[0].password) {
      console.log("permitir ingresar");
      navigate("#home");
    } else {
      console.log("ussuario o contraseña inorrectos");
    }
  });
};
