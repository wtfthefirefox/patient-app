import { addLogin } from '../redux/actionsCreator';
import md5 from 'md5';

import _apiBase from './apiBase'

const getRegisteration = (data) => async (dispatch) => {
  
  let dataObj = {
    ...data,
    password: md5(data.password)
  }

  let responce = await fetch(`${_apiBase}/reg`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataObj)
  });

  let res = await responce.json();

  if (res) {
    dispatch(addLogin(data.login));
  }

  return res
}

export default getRegisteration;