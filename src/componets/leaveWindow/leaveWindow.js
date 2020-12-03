import React from 'react';
import styled from 'styled-components';

const LeaveWindow = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LeaveText>Вы уверены, что хотите выйти из личного кабинета?</LeaveText>
      </ContentWrapper>
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
  background-color: #e83548;
  border-radius: 40px;
  margin-top: 50px;
  padding-top: 15px;
`;

const LeaveText = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  line-height: 24px;
`;

export default LeaveWindow;