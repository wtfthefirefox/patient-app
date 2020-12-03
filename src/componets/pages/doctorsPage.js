import React, { useState } from 'react';
import styled from 'styled-components';
import Portal from '@burstware/react-native-portal';

import DoctorCard from '../doctorCard';
import LeaveWindow from '../leaveWindow';

import icons from '../../../assets/svg/icons';

const DoctorsPage = () => {

  const [isDoctorLeave, turnDoctorLeave] = useState(true);

  return (
    <Wrapper>
      { isDoctorLeave && 

        <Portal>
          <LeaveWindow />
        </Portal>
      }
      <icons.BtnReturn />
      <ContentWrapper>
        <DoctorCard />
        <DoctorCard isLast/>
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

export default DoctorsPage;