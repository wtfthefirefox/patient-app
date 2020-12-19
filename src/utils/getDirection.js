const getDirection = async (date) => {
  let dataObj = {
    data: date
  }

  let responce = await fetch("http://95.37.6.22:5000/get_direction", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataObj)
  });

  return await responce.json()
}

export default getDirection;