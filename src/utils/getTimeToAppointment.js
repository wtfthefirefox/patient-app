const getTimeToAppointment = async () => {
  const data = {
    name: "fg"
  };

  let responce = await fetch("http://95.37.24.118:5000/time", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json()
}

export default getTimeToAppointment;