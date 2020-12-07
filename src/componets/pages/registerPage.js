import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'; 
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Form from '../formInput';

import icons from '../../../assets/svg/icons';

import getRegisteration from '../../utils/getRegisteration';
import { addLogin } from '../../redux/actionsCreator';

const RegisterPage = ({ history, addLogin }) => {
  
  const [emailValue, ChangeEmailValue] = useState('');
  const [passwordValue, ChangePasswordValue] = useState('');
  const [passwordRepeatedValue, changePasswordRepeatedValue] = useState('');

  return (
    <Wrapper>
      <Link to="/" style={{position: "absolute", left: 0, top: 45}} >
        <icons.BtnReturnLeft width={30} height={30} />
      </Link>
      <ContentWrapper>
        <Form formType="email-address" placeholderValue="example@mail.com" formName="Почта" marginBottomValue="30px" textChangerFunc={ChangeEmailValue} />
        <Form formType="default" placeholderValue="********" formName="Пароль" marginBottomValue="30px" isPassword={true} textChangerFunc={ChangePasswordValue} />
        <Form formType="default" placeholderValue="********" formName="Повторите пароль" marginBottomValue="100px" isPassword={true} textChangerFunc={changePasswordRepeatedValue} />
        <TouchableOpacity style={{width: "80%"}} onPress={ async () => {
          let res = await getRegisteration(emailValue, passwordValue);
          
          if (res) {
            history.push('/timetable');
            addLogin(emailValue);
          }
        }}>
          <BtnWrapper bgColor={emailValue != '' && passwordValue != '' && passwordRepeatedValue != '' && passwordValue === passwordRepeatedValue ? "rgba(160, 192, 250, 1)" : "rgba(160, 192, 250, 0.5)"}>
            <BtnValue>Зарегистрироваться</BtnValue>
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

const mapStateToProps = ({login}) => {
  return {
    login
  }
}

const mapDispatchToProps = {
  addLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterPage));