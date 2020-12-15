import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import icons from '../../../assets/svg/icons';

import getTimeToAppointment from '../../utils/getTimeToAppointment';

import TimetableWindow from '../timetableWindow';

const PatientForm = ( {closeWindow} ) => {

  const [textWindow, changeTextWindow] = useState('');
  const [isTimeWindowActive, changeIsTimeWidndowActive] = useState(false);

  if (isTimeWindowActive) {
    return <TimetableWindow closeFunc={changeIsTimeWidndowActive} />
  } else if (textWindow == '') {
    return (
      <PatientWrapper>
        <ContentWrapper>
          <TouchableOpacity style={{position: "absolute", right: 5, top: -5}} onPress={() => closeWindow(false)} > 
            <icons.Cross width={30} height={30} />
          </TouchableOpacity>
          <PatientHeaderText>Пожалуйста, выберите дату приёма и врача:</PatientHeaderText>
          <PatientBodyWrapper>
            <DirectionWrapper>
              <FormName>Направление:</FormName>
              <FormWrap>
                <FormValue>Психолог</FormValue>
              </FormWrap> 
            </DirectionWrapper>
            <DateWrapper>
              <DayWrap>
                <FormName>День:</FormName>
                <FormWrap >
                  <FormValue>01</FormValue>
                  <CounterWrap>
                    <icons.TriangleTop width={20} height={20} /> 
                    <icons.TriangleBottom width={20} height={20} /> 
                  </CounterWrap>
                </FormWrap> 
              </DayWrap>
              <MonthWrap>
                <FormName>Месяц:</FormName>
                <FormWrap >
                  <FormValue>Январь</FormValue>
                  <CounterWrap>
                    <icons.TriangleTop width={20} height={20} /> 
                    <icons.TriangleBottom width={20} height={20} /> 
                  </CounterWrap>
                </FormWrap> 
              </MonthWrap>
              <YearWrap>
                <FormName>Год:</FormName>
                <FormWrap >
                  <FormValue>2012</FormValue>
                  <CounterWrap>
                    <icons.TriangleTop width={20} height={20} /> 
                    <icons.TriangleBottom width={20} height={20} /> 
                  </CounterWrap>
                </FormWrap> 
              </YearWrap>
              <TimeWrapper>
                <FormName>Время приёма:</FormName>
                <FormWrap >
                  <FormValue>Выберите время</FormValue>
                  <CounterWrap>
                    <icons.TriangleTop width={20} height={20} /> 
                    <icons.TriangleBottom width={20} height={20} /> 
                  </CounterWrap>
                </FormWrap>
              </TimeWrapper>
            </DateWrapper>
            <DoctorWrapper>
              <FormName FormName>Доктор:</FormName>
              <FormWrap>
                <FormValue>Иванов Михаил Петрович</FormValue>
              </FormWrap>  
            </DoctorWrapper>
          </PatientBodyWrapper>
        </ContentWrapper>
        <TouchableOpacity onPress={async () => {
          let res = await getTimeToAppointment();

          changeTextWindow(res.ans);
        }} >
          <SubmitBtn>
            <SubmitBtnText>Записаться</SubmitBtnText>
          </SubmitBtn>
        </TouchableOpacity>
      </PatientWrapper>
    )
  } else {
    return(
      <PatientWrapper>
        <ContentWrapper>
          <TouchableOpacity style={{position: "absolute", right: 5, top: -5}} onPress={() => closeWindow(false)} > 
            <icons.Cross width={30} height={30} />
          </TouchableOpacity>
          <PatientHeaderText>{`Ваш приём будет длиться: \n ${textWindow} минут`}</PatientHeaderText>
        </ContentWrapper>
      </PatientWrapper>
    )
  }
}

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
  height: 500px; 
  background-color: #A0BFFA;
  border-radius: 40px;
  margin-top: 50px;
  padding-top: 15px;
  margin-bottom: 20px;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;

const CounterWrap = styled.View`
  position: absolute;
  top: 0;
  right: 5px;
  width: 30px;
  height: 50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FormName = styled.Text`
  color: #2A52BE;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const FormWrap = styled.View`
  position: relative;
  background-color: #ffffff; 
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  border-radius: 30px;
`;

const FormValue = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.5);
`;

const DirectionWrapper = styled.View`
  width: 180px;
  height: 40px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const DateWrapper = styled.View`
  width: 100%;
  height: 250px;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const DayWrap = styled.View`
  width: 80px;
  height: 40px; 
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const MonthWrap = styled.View`
  width: 120px;
  height: 40px; 
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const YearWrap = styled.View`
  width: 100px;
  height: 40px; 
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const TimeWrapper = styled.View`
  width: 220px;
  height: 40px;
  flex-direction: column;
  justify-content: flex-start;
`;

const DoctorWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SubmitBtn = styled.View`
  background-color: #41CE58;
  width: 150px;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;

const SubmitBtnText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  line-height: 24px;
`;

export default PatientForm;