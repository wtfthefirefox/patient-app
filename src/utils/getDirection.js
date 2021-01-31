import _apiBase from './apiBase';

const getDirection = async (date) => {
  let dataObj = {
    data: date
  }

  let responce = await fetch(`${_apiBase}/get_direction`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataObj)
  });

  return await responce.json()
}

export default getDirection;