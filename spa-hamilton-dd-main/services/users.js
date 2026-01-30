export const getUsers = async () => {
  try {
    const resp = await fetch("http://localhost:3001/usuarios");
    const users = await resp.json();
    return users;
  } catch (err) {
    console.log("Internal error");
  }
};


export const getUsersByEmail = async (user) => {
  try {
    const resp = await fetch(`http://localhost:3001/usuarios?email=${user}`);
    const users = await resp.json();
    return users;
  } catch (err) {
    console.log("Internal error");
  }
};
