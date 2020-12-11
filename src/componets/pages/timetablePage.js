import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Portal from '@burstware/react-native-portal';

import PatientCard from '../patientCard';
import PatientForm from '../patientForm';
import LeaveWindow from '../leaveWindow';

import icons from '../../../assets/svg/icons';

const TimetablePage = ({login}) => {
  
  const [isPatientFormActive, turnPatientForm] = useState(false);
  const [isLeave, turnLeave] = useState(false);

  return (
    <Wrapper>
      <TouchableOpacity style={{position: "absolute", right: 0, top: 45}} onPress={() => turnLeave(true)}>
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
        <HelloText>{`Привет ${login}`}</HelloText>
        <PatientCard />
        <PatientCard isLast />
        <TouchableOpacity onPress={() => turnPatientForm(true)} style={{width: "75%"}}>
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
  margin-top: 90px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HelloText = styled.Text`
  font-size: 30px;
  line-height: 30px;
  color: #2A52BE;
`;

const AddingBtn = styled.View`
  width: 100%;
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

const mapStateToProps = ({login}) => {
  return {
    login
  }
}

export default connect(mapStateToProps)(TimetablePage);