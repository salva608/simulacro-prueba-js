import { getUsers } from "./users.js";
import { getUserEmail } from "./users.js";
import { navigate } from "./app.js";


export const initLogin = async() =>{
    console.log('Logica de login')
    const arrayUsers = await getUsers();
    console.log(arrayUsers);

    const inputUser = document.getElementById("login-input")
    const inputPass = document.getElementById("login-pass")
    const btnSend = document.getElementById("login-buton")


    let user;
    let pass;

    inputUser.addEventListener('input',(e)=>{ user= e.target.value
});

    inputPass.addEventListener('input',(e)=>{ pass= e.target.value
});

btnSend.addEventListener('click', async ()=> {
    const userFound = await getUserEmail(user)

    if(pass === userFound[0].password){
        console.log('puede seguir')
        navigate("#home")
    }else{
        console.log('contraseña incorrecta')
    }
})
};