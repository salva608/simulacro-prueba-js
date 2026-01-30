

export const getUsers = async ()=>{


    try{
        const resp = await fetch("http://localhost:3001/users")
        const users = await resp.json()

    return users
    }

    catch(err){
        console.log("internal error", err)
    }
    
};

export const getUserEmail = async (user) => {
     try{
        const resp = await fetch(`http://localhost:3001/users?email=${user}`)
        const users = await resp.json()
        return users
    }

    catch(err){
        console.log("internal error", err)
    }
    
};
