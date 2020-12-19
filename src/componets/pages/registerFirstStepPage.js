import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

import icons from '../../../assets/svg/icons';

import FormInput from '../formInput';
import RadioBtns from '../radioBtns';

const RegisterFirstStepPage = ({ funcToChangeData }) => {
  
  const [lastNameValue, changeLastNameValue] = useState('');
  const [firstNameValue, changeFirstNameValue] = useState('');
  const [patronymicValue, changePatronymicValue] = useState('');
  const [birthDayValue, changeBirthDayValue] = useState('');
  const [polisValue, changePolisValue] = useState('');
  const [snilsValue, changeSnilsValue] = useState('');
  const [genderValue, changeGenderValue] = useState('');

  return (
    <ScrollView>
      <Wrap>
        <Link to="/" style={{position: "absolute", left: 0, top: 45}} >
          <icons.BtnReturnLeft width={30} height={30} />
        </Link>
        <ContentWrapper>
          <FormInput formType="default" placeholderValue="Иванов" formName="Фамилия" marginBottomValue="30px" isPassword={false} textChangerFunc={changeLastNameValue} />
          <FormInput formType="default" placeholderValue="Иван" formName="Имя" marginBottomValue="30px" isPassword={false} textChangerFunc={changeFirstNameValue} />
          <FormInput formType="default" placeholderValue="Иванович" formName="Отчество" marginBottomValue="30px" isPassword={false} textChangerFunc={changePatronymicValue} />
          <FormInput formType="numeric" placeholderValue="Ваш возраст" formName="Возраст" marginBottomValue="30px" isPassword={false} textChangerFunc={changeBirthDayValue} />
          <FormInput formType="default" placeholderValue="12345678912" formName="Снилс" marginBottomValue="30px" isPassword={false} textChangerFunc={changeSnilsValue} />
          <FormInput formType="default" placeholderValue="1234567891234567" formName="Полис" marginBottomValue="30px" isPassword={false} textChangerFunc={changePolisValue} />
          <RadioBtns borderColor="#A0BFFA" trueColor="rgba(65, 206, 88, 0.5)" isChecked="true" arrayOfData={["Мужской", "Женский"]} funcToGetActiveValue={changeGenderValue} />
        </ContentWrapper>
        <TouchableOpacity style={{width: "80%"}} onPress={() => {
          if (lastNameValue != '' && firstNameValue != '' && patronymicValue != '' && genderValue != undefined && snilsValue.length === 11 && polisValue.length === 16 && birthDayValue != '') {
            funcToChangeData({
              surname: lastNameValue,
              name: firstNameValue,
              patronymic: patronymicValue,
              gender: genderValue,
              snils: snilsValue,
              polis: polisValue,
              birth: birthDayValue
            });
          }
        }}>
          <BtnWrapper 
            bgColor={lastNameValue != '' && firstNameValue != '' && patronymicValue != '' && genderValue != undefined && snilsValue.length === 11 && polisValue.length === 16 && birthDayValue != '' ? "rgba(160, 192, 250, 1)" : "rgba(160, 192, 250, 0.5)"}
          >
            <BtnValue>Продолжить</BtnValue>
          </BtnWrapper>
        </TouchableOpacity>
      </Wrap>
    </ScrollView>
  )
}

const Wrap = styled.View`
  position: relative;
  width: 100%;
  height: 1000px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentWrapper = styled.View`
  margin-top: 90px;
  width: 100%;
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

export default RegisterFirstStepPage;