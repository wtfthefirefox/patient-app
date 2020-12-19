const getTime = async (date, direction) => {
  let data = {
    data: date,
    direction
  }

  let responce = await fetch("http://95.37.6.22:5000/get_time", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json()
}

export default getTime;