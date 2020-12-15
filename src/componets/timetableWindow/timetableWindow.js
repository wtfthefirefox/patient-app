import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import icons from '../../../assets/svg/icons';

const TimetableWindow = ({ closeFunc }) => {
  return (
    <BlackWrap>
      <MainWrap>
        <ContentWrap>
          <TouchableOpacity  style={{position: "absolute", right: 0, top: -5}} onPress={() => closeFunc(false)}>
            <icons.Cross width={30} height={30} />
          </TouchableOpacity>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 00</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap isLast>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 00</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap isLast>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 00</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap isLast>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={false} >12 : 00</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap isLast>
            <TimeValue isEmpty={true} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 00</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap isLast>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 00</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap>
            <TimeValue isEmpty={true} >12 : 15</TimeValue>
          </TimeWrap>
          <TimeWrap isLast>
            <TimeValue isEmpty={false} >12 : 15</TimeValue>
          </TimeWrap>
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
  flex-wrap: wrap;
  padding: 15px 25px 15px 25px;
`;

const TimeWrap = styled.View`
  width: 70px;
  height: 40px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: ${props => props.isLast ? 0 : '20px'};
  margin-bottom: 20px;
`;

const TimeValue = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: ${props => props.isEmpty ? 'rgba(42, 82, 190, 1)' : 'rgba(42, 82, 190, 0.5);'};
`;

export default TimetableWindow;