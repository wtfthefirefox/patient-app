import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import styled from 'styled-components';

import icons from '../../../assets/svg/icons';

import getTime from '../../utils/getTime';

const TimetableWindow = ({ closeFunc, changeTimeFunc, directionValue, date  }) => {

  const [isLoading, changeIsLoading] = useState(true);
  const [items, changeItems] = useState('');

  useEffect(() => {
    (async () => {
      let res = await getTime(date, directionValue);

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
                    changeTimeFunc(item.time);
                    setTimeout(() => closeFunc(false), 500);
                  }}>
                    <TimeWrap isLast={(idx + 1) % 4 == 0 ? true : false}>
                      <TimeValue isEmpty={!item.is_busy} >{item.time}</TimeValue>
                    </TimeWrap>
                  </TouchableOpacity>
                ) 
              } else {
                return (
                  <TimeWrap isLast={(idx + 1) % 4 == 0 ? true : false}>
                    <TimeValue isEmpty={!item.is_busy} >{item.time}</TimeValue>
                  </TimeWrap>
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

const TimeWrap = styled.View`
  width: 70px;
  height: 40px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: ${props => props.isLast ? 0 : '10px'};
  margin-bottom: 20px;
`;

const TimeValue = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: ${props => props.isEmpty ? 'rgba(42, 82, 190, 1)' : 'rgba(42, 82, 190, 0.5);'};
`;

export default TimetableWindow;