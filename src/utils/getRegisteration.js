import { addLogin } from '../redux/actionsCreator';

const getRegisteration = (data) => async (dispatch) => {
  
  let responce = await fetch("http://95.37.24.118:5000/reg", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  let res = await responce.json();

  if (res) {
    dispatch(addLogin(data.login));
  }

  return res
}

export default getRegisteration;