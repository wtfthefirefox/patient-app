const getTimetableForPatient = async (login) => {
  
  let data = {
    email: login
  };

  let responce = await fetch("http://95.37.6.22:5000/get_appointment", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json();
}

export default getTimetableForPatient;