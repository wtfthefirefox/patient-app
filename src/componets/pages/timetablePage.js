import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components';
import Portal from '@burstware/react-native-portal';

import PatientCard from '../patientCard';
import PatientForm from '../patientForm';
import LeaveWindow from '../leaveWindow';

import icons from '../../../assets/svg/icons';

const TimetablePage = () => {
  
  const [isPatientFormActive, turnPatientForm] = useState(false);
  const [isLeave, turnLeave] = useState(false);

  return (
    <Wrapper>
      <TouchableOpacity style={{position: "absolute", right: 0, top: 15}} onPress={() => turnLeave(true)}>
        <icons.BtnReturnRight width={30} height={30} />
      </TouchableOpacity>

      {
        isPatientFormActive &&

        <Portal>
          <PatientForm closeWindow={turnPatientForm} /> 
        </Portal>
      }

      {
        isLeave &&

        <Portal>
          <LeaveWindow turnLeave={turnLeave} />
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
  position: relative;
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