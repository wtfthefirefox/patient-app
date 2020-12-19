import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import cancelAppointment from '../../utils/cancelAppointment';
import getAppoitmentsForDoctor from '../../utils/getAppoitmentsForDoctor';
import increaseTime from '../../utils/increaseTime';

const DoctorCard = ({ date, name, idAppointment, isLast, changerItems, login, changerLoading }) => {
  return (
    <CardWrapper last={isLast}>
      <DateWrapper>
        <ItemTitle marginRightValue="0">Дата приёма:</ItemTitle>
        <ItemValue>{date}</ItemValue>
      </DateWrapper>
      <TouchableOpacity style={{position: "absolute", bottom: 10, left: 20}} onPress={() => {
        (async () => {
          let res = await increaseTime(idAppointment);

          if (res) {
            changerLoading(true);

            let query = await getAppoitmentsForDoctor(login);

            changerLoading(false);
            changerItems(query.ans);
          }
        })()
        }} >
        <BtnWrap bgColor={"#41CE58"} >
          <BtnValue>Увеличить время приёма</BtnValue>
        </BtnWrap>
      </TouchableOpacity>
      <TouchableOpacity onPress={ async () => {
        let res = await cancelAppointment(idAppointment);

        if (res) {
          changerLoading(true);

          let query = await getAppoitmentsForDoctor(login);

          changerLoading(false);
          changerItems(query.ans);
        }
      }} style={{position: "absolute", bottom: 10, right: 20}}>
        <BtnWrap bgColor={"#E83548"} >
          <BtnValue>Окончить приём</BtnValue>
        </BtnWrap>
      </TouchableOpacity>
      <PatientWrapper>
        <ItemTitle marginRightValue="5px">Пациент:</ItemTitle>
        <PatientList>
          <PatientItem>{name.split(' ')[0]}</PatientItem>
          <PatientItem>{name.split(' ')[1]}</PatientItem>
          <PatientItem>{name.split(' ')[2]}</PatientItem>
        </PatientList>
      </PatientWrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.View`
  position: relative;
  width: 100%;
  height: 170px;
  background-color: #A0BFFA;
  border-radius: 30px;
  margin-bottom: ${props => props.last ? 0 : "40px"};
`;

const DateWrapper = styled.View`
  position: absolute;
  left: 20px;
  top: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ItemTitle = styled.Text`
  color: #2A52BE;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 5px;
  margin-right: ${props => props.marginRightValue};
`;

const ItemValue = styled.Text`
  color: #ffffff;
  font-size: 20px;
  line-height: 24px;
  max-width: 100px;
`;

const PatientWrapper = styled.View`
  position: absolute;
  right: 20px;
  top: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PatientList = styled.View`
  min-width: 120px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PatientItem = styled.Text`
  color: #ffffff;
  font-size: 18px;
  line-height: 20px;
`;

const BtnWrap = styled.View`
  width: 150px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  border-radius: 40px;
`;

const BtnValue = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  line-height: 22px;
`;

export default DoctorCard;