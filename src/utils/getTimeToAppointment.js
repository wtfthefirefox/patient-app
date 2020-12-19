const getTimeToAppointment = async (login, date, time, direction, doctor) => {
  const data = {
    direction,
    login,
    time,
    data: date,
    doctor
  };

  let responce = await fetch("http://95.37.6.22:5000/create_appointment", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json();
}

export default getTimeToAppointment;