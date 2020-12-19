import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

import icons from '../../../assets/svg/icons';

import getTimeToAppointment from '../../utils/getTimeToAppointment';

import TimetableWindow from '../timetableWindow';
import PatientDirectionWindow from '../patientDirectionWindow';
import PatientDoctorsWindow from '../patientDoctorsWindow';

const PatientForm = ( { closeWindow, login } ) => {

  const [textWindow, changeTextWindow] = useState('');

  const [isTimeWindowActive, changeIsTimeWidndowActive] = useState(false);
  const [isDirectionWindowActive, changeIsDirectionWindowActive] = useState(false);
  const [isDoctorsWindowActive, changeIsDoctorsWindowActive] = useState(false);

  const [dayValue, changeDayValue] = useState(1);
  const [monthIdx, changeMonthIdx] = useState(11);
  const [yearValue, changeYearValue] = useState(2020);
  const [timeValue, changeTimeValue] = useState('');
  const [directionValue, changeDirectionValue] = useState('');
  const [doctorValue, changeDoctorValue] = useState('');

  const addingZeroToDay = (num) => {
    if (num <= 9) {
      return '0' + num
    } else {
      return num
    }
  }

  if (isTimeWindowActive) {
    return <TimetableWindow 
      closeFunc={changeIsTimeWidndowActive} 
      changeTimeFunc={changeTimeValue} 
      date={`${addingZeroToDay(dayValue)}.${addingZeroToDay(monthIdx + 1)}.${yearValue}`}
      directionValue={directionValue}
      />
  } else if (isDirectionWindowActive) {
    return <PatientDirectionWindow 
      closeFunc={changeIsDirectionWindowActive}
      changerFunc={changeDirectionValue}
      date={`${addingZeroToDay(dayValue)}.${addingZeroToDay(monthIdx + 1)}.${yearValue}`} />
  } else if (isDoctorsWindowActive) {
    return <PatientDoctorsWindow  
      closeFunc={changeIsDoctorsWindowActive}
      changerFunc={changeDoctorValue}
      directionValue={directionValue}
      />
  } else if (textWindow == '') {
    return (
      <PatientWrapper>
        <ContentWrapper>
          <TouchableOpacity style={{position: "absolute", right: 5, top: -5}} onPress={() => closeWindow(false)} > 
            <icons.Cross width={30} height={30} />
          </TouchableOpacity>
          <PatientHeaderText>Пожалуйста, выберите дату приёма и врача:</PatientHeaderText>
          <PatientBodyWrapper>
            <DateWrapper>
              <DayWrap>
                <FormName>День:</FormName>
                <FormWrap>
                  <FormValue>{addingZeroToDay(dayValue)}</FormValue>
                  <CounterWrap>
                    <TouchableOpacity onPress={() => changeDayValue(dayValue + 1 <= 31 ? dayValue + 1 : dayValue)} >
                      <icons.TriangleTop width={20} height={20} />
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => changeDayValue(dayValue - 1 >= 1 ? dayValue - 1 : dayValue)} >
                      <icons.TriangleBottom width={20} height={20} />
                    </TouchableOpacity>
                  </CounterWrap>
                </FormWrap> 
              </DayWrap>
              <MonthWrap>
                <FormName>Месяц:</FormName>
                <FormWrap>
                  <FormValue>{["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"][monthIdx]}</FormValue>
                  <CounterWrap>
                    <TouchableOpacity onPress={() => changeMonthIdx(monthIdx + 1 <= 11 ? monthIdx + 1 : 0)} >
                      <icons.TriangleTop width={20} height={20} />
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => changeMonthIdx(monthIdx - 1 >= 0 ? monthIdx - 1 : 11)} >
                      <icons.TriangleBottom width={20} height={20} />
                    </TouchableOpacity>
                  </CounterWrap>
                </FormWrap> 
              </MonthWrap>
              <YearWrap>
                <FormName>Год:</FormName>
                <FormWrap>
                  <FormValue>{yearValue}</FormValue>
                  <CounterWrap>
                    <TouchableOpacity onPress={() => changeYearValue(yearValue + 1)} >
                      <icons.TriangleTop width={20} height={20} />
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => changeYearValue(yearValue - 1 >= 2020 ? yearValue - 1 : yearValue)} >
                      <icons.TriangleBottom width={20} height={20} />
                    </TouchableOpacity>
                  </CounterWrap>
                </FormWrap> 
              </YearWrap>
            </DateWrapper>
            <DirectionWrapper>
              <FormName>Направление:</FormName>
              <TouchableOpacity style={{width: "100%"}} onPress={() => {changeIsDirectionWindowActive(true)}} >
                <FormWrap>
                  <FormValue>{directionValue ? directionValue : "Выберите направление"}</FormValue>
                </FormWrap>
              </TouchableOpacity>
            </DirectionWrapper>
            <TimeWrapper>
                <FormName>Время приёма:</FormName>
                <TouchableOpacity onPress={() => {
                  changeIsTimeWidndowActive(true);
                }} >
                  <FormWrap>
                    <FormValue>{!timeValue ? 'Выберите время' : `Вы выбрали ${timeValue}`}</FormValue>
                  </FormWrap>
                </TouchableOpacity>
              </TimeWrapper>
            <DoctorWrapper>
              <FormName>Доктор:</FormName>
              <TouchableOpacity 
                style={{width: "100%"}} 
                onPress={() => {
                  if (directionValue != "") {
                    changeIsDoctorsWindowActive(true)
                  }
                }}
              >
                <FormWrap>
                  <FormValue>{doctorValue ? doctorValue : 'Вы ещё не выбрали своего доктора'}</FormValue>
                </FormWrap> 
              </TouchableOpacity>
            </DoctorWrapper>
          </PatientBodyWrapper>
        </ContentWrapper>
        <TouchableOpacity onPress={async () => {
          if (timeValue) {
            let res = await getTimeToAppointment(login, `${addingZeroToDay(dayValue)}.${addingZeroToDay(monthIdx + 1)}.${yearValue}`, timeValue, directionValue, doctorValue);

            changeTextWindow(res.ans);
          }
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
          <PatientHeaderText>{`Ваш приём назначен на \n ${textWindow}`}</PatientHeaderText>
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
  height: 520px; 
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
  height: 180px;
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
  width: 100%; 
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const DateWrapper = styled.View`
  width: 100%;
  height: 180px;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  width: 125px;
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
  width: 190px;
  height: 70px;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
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

const mapStateToProps = ({login}) => {
  return {
    login
  }
}

export default connect(mapStateToProps)(PatientForm);