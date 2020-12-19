const increaseTime = async ( idAppointment ) => {
  let data = {
    id: idAppointment
  }

  let responce = await fetch("http://95.37.6.22:5000/add_time", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json()
}

export default increaseTime;