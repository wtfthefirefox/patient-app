import React, { useState } from 'react';

import { RegisterFirstStepPage, RegisterSecondStepPage } from '../pages';

const RegisterNavigatorPage = () => {

  const [dataFromFirstStep, changeDataFromFirstStep] = useState('');
  
  if (dataFromFirstStep == '') {
    return (
      <RegisterFirstStepPage funcToChangeData={changeDataFromFirstStep} />
    )
  } else {
    return (
      <RegisterSecondStepPage dataFromFirstStep={dataFromFirstStep} />
    )
  }
}

export default RegisterNavigatorPage;