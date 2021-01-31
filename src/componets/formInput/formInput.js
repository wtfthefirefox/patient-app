import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import styled from 'styled-components';

const FormInput = ({ formType, placeholderValue, formName, marginBottomValue, isPassword, maxSimbolsLength, textChangerFunc }) => {
  return (
    <FormWrapper marginBottomVal={marginBottomValue}>
      <FormName>{formName}</FormName>
      <TextInput style={styles.Form} keyboardType={formType} placeholder={placeholderValue} secureTextEntry={isPassword}  onChangeText={(text) => textChangerFunc(text)} maxLength={parseInt(maxSimbolsLength, 10)} /> 
    </FormWrapper>
  )
}

const styles = StyleSheet.create({
  Form: {
    backgroundColor: "#ffffff", 
    width: "100%", 
    height: 40, 
    borderRadius: 30,
    paddingLeft: 48,
    fontSize: 15,
    lineHeight: 18,
    color: "rgba(0, 0, 0, 0.5)"
  }
});

const FormWrapper = styled.View`
  max-width: 600px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${props => props.marginBottomVal};
`;

const FormName = styled.Text`
  font-size: 24px;
  line-height: 24px;
  color: #2A52BE;
  margin-bottom: 25px;
`;

export default FormInput;