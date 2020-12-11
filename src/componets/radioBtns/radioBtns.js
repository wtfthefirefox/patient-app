import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const RadioBtns = ({ borderColor, trueColor, arrayOfData, funcToGetActiveValue }) => {
  
  const [activeBtnId, chagneActiveBtnId] = useState(0);

  useEffect(() => {
    funcToGetActiveValue(arrayOfData[activeBtnId - 1]);
  }, [activeBtnId]);

  return (
    <RadioListWrap>
      {
        arrayOfData.map((item, idx) => {
          return (
            <TouchableOpacity style={{width: "100%"}} onPress={() => {
              if (activeBtnId !== idx + 1) {
                chagneActiveBtnId(idx + 1);
              }
            }}>
              <RadioWrap>
                <BtnWrap borderColor={borderColor}>
                  <CheckedWrap isChecked={activeBtnId == idx + 1} trueColor={trueColor} />
                </BtnWrap>
                <RadioText>{item}</RadioText>
              </RadioWrap>
            </TouchableOpacity>
          )
        })
      }
    </RadioListWrap>
  )
}

const BtnWrap = styled.View`
  width: 35px;
  height: 35px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 4px;
  border-color: ${props => props.borderColor};
  border-radius: 50;
  margin-right: 5px;
`;

const CheckedWrap = styled.View`
  display: ${props => props.isChecked ? "flex" : 'none'};
  background-color: ${props => props.trueColor};
  width: 20px;
  height: 20px;
  border-radius: 50;
`;

const RadioListWrap = styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 40px; // tempoarary
`;

const RadioWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioText = styled.Text`
  color: #2A52BE;
  font-size: 24px;
  line-height: 24px;
`;

export default RadioBtns;