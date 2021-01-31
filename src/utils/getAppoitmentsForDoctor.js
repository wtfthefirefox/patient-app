import _apiBase from './apiBase';

const getAppoitmentsForDoctor = async (login) => {
  const data = {
    login
  };

  let responce = await fetch(`${_apiBase}/get_doctorappointments`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json();
}

export default getAppoitmentsForDoctor;