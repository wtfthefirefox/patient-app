import _apiBase from './apiBase';

const getTimetableForPatient = async (login) => {
  
  let data = {
    email: login
  };

  let responce = await fetch(`${_apiBase}/get_appointment`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json();
}

export default getTimetableForPatient;