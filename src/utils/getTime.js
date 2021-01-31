import _apiBase from './apiBase';

const getTime = async (date, direction) => {
  let data = {
    data: date,
    direction
  }

  let responce = await fetch(`${_apiBase}/get_time`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json()
}

export default getTime;