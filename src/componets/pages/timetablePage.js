import React, { Component, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Portal from '@burstware/react-native-portal';

import PatientCard from '../patientCard';
import PatientForm from '../patientForm';

const TimetablePage = () => {
  
  const [isPatientFormActive, turnPatientForm] = useState(false);

  return (
    <Wrapper>
        {
          isPatientFormActive &&

          <Portal>
            <PatientForm /> 
          </Portal>
        }
        
      <ContentWrapper>
        <PatientCard />
        <PatientCard isLast />
        <TouchableOpacity onPress={() => turnPatientForm(true)}>
          <AddingBtn>
            <AddingBtnValue>Записаться к врачу</AddingBtnValue>
          </AddingBtn>
        </TouchableOpacity>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: 100%;  
  height: 1000px;
`;

const ContentWrapper = styled.View`
  width: 100%;
  margin-top: 50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AddingBtn = styled.View`
  width: 75%;
  height: 60px;
  background-color: #A0BFFA;  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const AddingBtnValue = styled.Text`
  color: #ffffff;
  line-height: 28px;
  font-size: 28px;
`;

export default TimetablePage;