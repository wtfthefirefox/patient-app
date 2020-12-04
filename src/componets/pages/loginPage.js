import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'; 
import { Link, withRouter } from 'react-router-native';
import styled from 'styled-components';

import FormInput from '../formInput';

import icons from '../../../assets/svg/icons';

import checkAuthorization from '../../utils/checkAuthorization';

const LoginPage = ({history}) => {
  const [emailValue, ChangeEmailValue] = useState('');
  const [passwordValue, ChangePasswordValue] = useState('');

  return (
    <Wrapper>
      <Link to="/" style={{position: "absolute", left: 0, top: 15}} >
        <icons.BtnReturnLeft width={30} height={30} />
      </Link>
      <ContentWrapper>
        <FormInput formType="email-address" placeholderValue="example@mail.com" formName="Почта" marginBottomValue="30px" textChangerFunc={ChangeEmailValue} />
        <FormInput formType="default" placeholderValue="********" formName="Пароль" marginBottomValue="100px" isPasswrod={true} textChangerFunc={ChangePasswordValue} />
        <TouchableOpacity onPress={async ()  => {
          let res = await checkAuthorization(emailValue, passwordValue);

          if (res.ans === "true") {
            history.push('/timetable'); 
          } else {
            history.push('/');
          }
        }} style={{width: "60%"}} >
          <BtnWrapper>
            <BtnValue>Войти</BtnValue>
          </BtnWrapper>
        </TouchableOpacity>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  position: relative;
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

export default withRouter(LoginPage);