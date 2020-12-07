const addLogin = (login) => {
  return {
    type: "ADD_LOGIN",
    payload: login 
  }
}

export {
  addLogin
}