import React from 'react';
import { TouchableOpacity } from 'react-native'; 
import { Link } from 'react-router-native';
import styled from 'styled-components';

const LeaveWindow = ({turnLeave}) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LeaveText>Вы уверены, что хотите выйти из личного кабинета?</LeaveText>
      </ContentWrapper>
      <BtnsWrapper>
        <Link to="/">
          <BtnWrapper bgColor="#41CE58">
            <BtnValue>Да</BtnValue>
          </BtnWrapper>
        </Link>
        <TouchableOpacity onPress={() => turnLeave(false)}>
          <BtnWrapper bgColor="#E83548">
            <BtnValue>Нет</BtnValue>
          </BtnWrapper>
        </TouchableOpacity>
      </BtnsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.View`
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
  height: 80px; 
  background-color: #A0BFFA;
  border-radius: 40px;
  margin-top: 50px;
  padding-top: 15px;
  margin-bottom: 20px;
`;

const LeaveText = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  line-height: 24px;
`;

const BtnsWrapper = styled.View`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const BtnWrapper = styled.View`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;

const BtnValue = styled.Text`
  color: #ffffff;
  font-size: 24px;
  line-height: 24px;
`;

export default LeaveWindow;