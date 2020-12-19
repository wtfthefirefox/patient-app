import { addLogin } from '../redux/actionsCreator';
import md5 from 'md5';


const checkAuthorization = (emailValue, passValue) => async (dispatch) => {

  let objWidthData = {
    login: emailValue,
    password: md5(passValue)
  };

  let responce = await fetch("http://95.37.6.22:5000/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objWidthData)
  });

  let res = await responce.json()

  if (res) {
    dispatch(addLogin(emailValue));
  }

  return await res
}

export default checkAuthorization;