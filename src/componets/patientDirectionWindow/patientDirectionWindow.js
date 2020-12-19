import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import styled from 'styled-components';

import getDirection from '../../utils/getDirection';

import icons from '../../../assets/svg/icons';

const PatientDirectionWindow = ({ closeFunc, changerFunc, date }) => {

  const [isLoading, changeIsLoading] = useState(true);
  const [items, changeItems] = useState('');

  useEffect(() => {
    (async () => {
      let res = await getDirection(date);

      changeItems(res.ans);
      changeIsLoading(false);
    })()
  }, [])

  if (isLoading) {
    return (
      <BlackWrap>
        <MainWrap>
          <ContentWrap>
            <ActivityIndicator size="large" color="#2A52BE" style={{marginTop: 100}} />
          </ContentWrap>
        </MainWrap>
      </BlackWrap>
    )
  }

  return (
    <BlackWrap>
      <MainWrap>
        <ContentWrap>
          <TouchableOpacity  style={{position: "absolute", right: 0, top: -5}} onPress={() => closeFunc(false)}>
            <icons.Cross width={30} height={30} />
          </TouchableOpacity>
          
          {
            items.map((item, idx) => {
              if (!item.is_busy) {
                return (
                  <TouchableOpacity onPress={() => {
                    changerFunc(item.name);
                    setTimeout(() => closeFunc(false), 500);
                  }}>
                    <CardWrap isLast={(idx + 1) % 2 == 0}>
                      <CardValue isEmpty={!item.is_busy}>{item.name}</CardValue>
                    </CardWrap>
                  </TouchableOpacity>
                )
              } else {
                return (
                  <CardWrap isLast={(idx + 1) % 2 == 0}>
                    <CardValue isEmpty={!item.is_busy}>{item.name}</CardValue>
                  </CardWrap>
                )
              }
            })
          }

        </ContentWrap>
      </MainWrap>
    </BlackWrap>
  )
}

const BlackWrap = styled.View`
  width: 100%;
  height: 1000px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  padding-right: 10px;
`;

const MainWrap = styled.View`
  margin-top: 100px;
  width: 100%;
  height: 400px;
  background-color: #A0BFFA;
  border-radius: 40px;
`;

const ContentWrap = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px 10px 15px 10px;
`;

const CardWrap = styled.View`
  width: 160px;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  margin-right: ${props => props.isLast ? 0 : '10px'};
  margin-bottom: 20px;
`;

const CardValue = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: ${props => props.isEmpty ? 'rgba(42, 82, 190, 1)' : 'rgba(42, 82, 190, 0.5);'};
`;

export default PatientDirectionWindow;