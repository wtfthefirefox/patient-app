const getRegisteration = async (login, pass) => {
  let data = {
    login,
    password: pass
  };

  let res = await fetch("http://95.37.24.118:5000/reg", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await res.json()
}

export default getRegisteration;