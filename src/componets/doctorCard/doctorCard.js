import React from 'react';
import styled from 'styled-components';

const DoctorCard = ({isLast}) => {
  return (
    <CardWrapper last={isLast}>
      <DateWrapper>
        <ItemTitle marginRightValue="0">Дата приёма:</ItemTitle>
        <ItemValue>19:00 12.12.2021</ItemValue>
      </DateWrapper>
      <BtnWrap bgColor={"#41CE58"} horizontalValue={"left: 20px;"}>
        <BtnValue>Увеличить время приёма</BtnValue>
      </BtnWrap>
      <BtnWrap bgColor={"#E83548"} horizontalValue={"right: 20px;"}>
        <BtnValue>Окончить приём</BtnValue>
      </BtnWrap>
      <DoctorWrapper>
        <ItemTitle marginRightValue="5px">Врач:</ItemTitle>
        <DoctorList>
          <DoctorItem>Зубенко</DoctorItem>
          <DoctorItem>Иван</DoctorItem>
          <DoctorItem>Петрович</DoctorItem>
        </DoctorList>
      </DoctorWrapper>
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

const BtnWrap = styled.View`
  position: absolute;
  ${props => props.horizontalValue};
  bottom: 10px;
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