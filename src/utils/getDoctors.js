const getDoctors = async (directionValue) => {
  let data = {
    direction: directionValue
  };

  let responce = await fetch("http://95.37.6.22:5000/get_doctors", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json()
}

export default getDoctors;