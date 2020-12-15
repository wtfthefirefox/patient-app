import React from 'react';
import styled from 'styled-components';

const PatientCard = ({ isLast, time, cabinet, data}) => {
  return (
    <CardWrapper last={isLast}>
      <DateWrapper>
        <ItemTitle marginRightValue="0">Дата приёма:</ItemTitle>
        <ItemValue>{time}</ItemValue>
      </DateWrapper>
      <RoomWrapper>
        <ItemTitle marginRightValue="5px">Кабинет:</ItemTitle>
        <ItemValue>{cabinet}</ItemValue>
      </RoomWrapper>
      <DoctorWrapper>
        <ItemTitle marginRightValue="5px">Врач:</ItemTitle>
        <DoctorList>
          <DoctorItem>{data.split(' ')[0]}</DoctorItem>
          <DoctorItem>{data.split(' ')[1]}</DoctorItem>
          <DoctorItem>{data.split(' ')[2]}</DoctorItem>
        </DoctorList>
      </DoctorWrapper>
      <CancelBtnWrapper>
        <CancelBtnText>Отменить</CancelBtnText>
      </CancelBtnWrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.View`
  position: relative;
  width: 100%;
  height: 170px;
  background-color: #A0BFFA;
  border-radius: 30px;
  margin-bottom: ${props => props.last ? "70px" : "40px"};
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

const RoomWrapper = styled.View`
  position: absolute;
  left: 20px;
  bottom: 10px;
  flex-direction: row;
  justify-content: flex-start;
`;

const DoctorWrapper = styled.View`
  position: absolute;
  right: 20px;
  top: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const DoctorList = styled.View`
  min-width: 120px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const DoctorItem = styled.Text`
  color: #ffffff;
  font-size: 18px;
  line-height: 20px;
`;

const CancelBtnWrapper = styled.View`
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 150px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #E83548;
  border-radius: 40px;
`;

const CancelBtnText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  line-height: 22px;
`;

export default PatientCard;