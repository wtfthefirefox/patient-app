import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'; 
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FormInput from '../formInput';

import icons from '../../../assets/svg/icons';

import checkAuthorization from '../../utils/checkAuthorization';

const LoginPage = ({ history, checkAuthorization }) => {
  const [emailValue, ChangeEmailValue] = useState('');
  const [passwordValue, ChangePasswordValue] = useState('');

  return (
    <Wrapper>
      <Link to="/" style={{position: "absolute", left: 0, top: 45}} >
        <icons.BtnReturnLeft width={30} height={30} />
      </Link>
      <ContentWrapper>
        <FormInput formType="email-address" placeholderValue="example@mail.com" formName="Почта" marginBottomValue="30px" textChangerFunc={ChangeEmailValue} maxSimbolsLength="320" />
        <FormInput formType="default" placeholderValue="********" formName="Пароль" marginBottomValue="100px" isPassword={true} textChangerFunc={ChangePasswordValue} maxSimbolsLength="40" />
        <TouchableOpacity onPress={ () => {
          if (emailValue != '' && passwordValue != '') {
            (async ()  => {
              let res = await checkAuthorization(emailValue, passwordValue);

              if (res.ans) {
                if (res.type) {
                  history.push('/doctorsTimetable');
                } else {
                  history.push('/timetable');
                }
              } else {
                history.push('/');
              }
            })();
          }
        }} style={{width: "60%"}} >
          <BtnWrapper bgColor={emailValue != '' && passwordValue != '' ? "rgba(160, 192, 250, 1)" : "rgba(160, 192, 250, 0.5)"}>
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
  margin-top: 90px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const BtnWrapper = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${props => props.bgColor};  
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

const mapDispatchToProps = {
  checkAuthorization
}

export default connect(null, mapDispatchToProps)(withRouter(LoginPage));