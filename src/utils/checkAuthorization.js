const checkAuthorization = async (emailValue, passValue) => {

  let objWidthData = {
    login: emailValue,
    password: passValue
  };

  let responce = await fetch("http://95.37.24.118:5000/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objWidthData)
  });

  return await responce.json();
}

export default checkAuthorization;