const getAppoitmentsForDoctor = async (login) => {
  const data = {
    login
  };

  let responce = await fetch("http://95.37.6.22:5000/get_doctorappointments", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await responce.json();
}

export default getAppoitmentsForDoctor;