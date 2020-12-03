import React from 'react';
import { Link } from 'react-router-native';
import styled from 'styled-components';

import Form from '../formInput';

const LoginPage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Form formType="email-address" placeholderValue="example@mail.com" formName="Почта" marginBottomValue="30px" />
        <Form formType="default" placeholderValue="********" formName="Пароль" marginBottomValue="100px" isPasswrod={true} />
        <Link to="/timetable" style={{width: "60%"}}>
          <BtnWrapper>
            <BtnValue>Войти</BtnValue>
          </BtnWrapper>
        </Link>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: 100%;  
  height: 1000px;
`;

const ContentWrapper = styled.View`
  width: 100%;
  margin-top: 50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BtnWrapper = styled.View`
  width: 100%;
  height: 60px;
  background-color: #A0BFFA;  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const BtnValue = styled.Text`
  color: #ffffff;
  line-height: 28px;
  font-size: 28px;
`;

export default LoginPage;