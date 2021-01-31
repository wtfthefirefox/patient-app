import _apiBase from './apiBase';

const increaseTime = async ( idAppointment ) => {
  let data = {
    id: idAppointment
  }

  let responce = await fetch(`${_apiBase}/add_time`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json()
}

export default increaseTime;