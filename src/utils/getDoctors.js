import _apiBase from './apiBase';

const getDoctors = async (directionValue) => {
  let data = {
    direction: directionValue
  };

  let responce = await fetch(`${_apiBase}/get_doctors`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json()
}

export default getDoctors;