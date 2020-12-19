const cancelAppointment = async (appointmentId) => {
  const data = {
    appointmentId
  };

  let responce = await fetch("http://95.37.6.22:5000/close_appointment", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json();
}

export default cancelAppointment;