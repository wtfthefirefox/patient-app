import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-native';

const FirstPage = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Link to="/registerNavigate">
          <BtnWrapper>
            <BtnValue>Зарегистрироваться</BtnValue>
          </BtnWrapper>
        </Link>
        <TextOr>ИЛИ</TextOr>
        <Link to="/login">
          <BtnWrapper last>
            <BtnValue>Войти</BtnValue>
          </BtnWrapper>
        </Link>
      </ContentWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.View`
  width: 100%;
  height: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ContentWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #A0BFFA;
  border-radius: 40px;
  margin-bottom: ${props => props.last ? 0 : "80px"};
`;

const BtnValue = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  line-height: 24px;
`;

const TextOr = styled.Text`
  color: #000000;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 80px;
  text-align: center;
`;

export default FirstPage;