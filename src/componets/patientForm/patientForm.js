import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import styled from 'styled-components';

const PatientForm = () => {
  return (
    <PatientWrapper>
      <ContentWrapper>
        <PatientHeaderText>Пожалуйста, выберите дату приёма и врача:</PatientHeaderText>
        <PatientBodyWrapper>
          <DateWrapper>
            <FormName>Дата:</FormName>
            <TextInput style={styles.Form} placeholder="ДД-ММ-ГГ" /> 
          </DateWrapper>
          <DirectionWrapper>
            <FormName>Направление:</FormName>
            <TextInput style={styles.Form} placeholder="Психолог" /> 
          </DirectionWrapper>
          <DoctorWrapper>
            <FormName FormName>Доктор:</FormName>
            <TextInput style={styles.Form} placeholder="Иванов Михаил Петрович" /> 
          </DoctorWrapper>
        </PatientBodyWrapper>
      </ContentWrapper>
    </PatientWrapper>
  )
}

const styles = StyleSheet.create({
  Form: {
    backgroundColor: "#ffffff", 
    width: "100%", 
    height: 40, 
    borderRadius: 30,
    paddingLeft: 20,
    fontSize: 15,
    lineHeight: 18,
    color: "rgba(0, 0, 0, 0.5)"
  }
});

const PatientWrapper = styled.View`
  width: 100%;
  height: 1000px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentWrapper = styled.View`
  width: 100%;
  height: 250px; 
  background-color: rgb(74, 231, 216);
  border-radius: 40px;
  margin-top: 50px;
  padding-top: 15px;
`;

const PatientHeaderText = styled.Text`
  text-align: center;
  color: #2A52BE;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 20px;
`;

const PatientBodyWrapper = styled.View`
  position: relative;
  width: 100%;
  height: 160px;
`;

const FormName = styled.Text`
  color: #2A52BE;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 5px;
`;

const DateWrapper = styled.View`
  position: absolute; 
  left: 20px;
  top: 0;
  width: 120px;
  height: 150px;
  flex-direction: column;
  justify-content: flex-start;
`;

const DirectionWrapper = styled.View`
  position: absolute;
  right: 20px;
  top: 0;
  width: 180px;
  height: 150px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const DoctorWrapper = styled.View`
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 90%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default PatientForm;