import _apiBase from './apiBase';

const cancelAppointment = async (appointmentId) => {
  const data = {
    appointmentId
  };

  let responce = await fetch(`${_apiBase}/close_appointment`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json();
}

export default cancelAppointment;