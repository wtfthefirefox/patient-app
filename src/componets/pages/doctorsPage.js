import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native'; 
import { connect } from 'react-redux';
import styled from 'styled-components';
import Portal from '@burstware/react-native-portal';

import DoctorCard from '../doctorCard';
import LeaveWindow from '../leaveWindow';

import icons from '../../../assets/svg/icons';

import getAppoitmentsForDoctor from '../../utils/getAppoitmentsForDoctor';

const DoctorsPage = ({ login }) => {

  const [isLoading, turnLoading] = useState(true);

  const [isLeave, turnLeave] = useState(false);

  const [items, changeItems] = useState('');

  useEffect( () => {
    (async () => {
      let res = await getAppoitmentsForDoctor(login);

      changeItems(res.ans);
      turnLoading(false);
    })()
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <ActivityIndicator size="large" color="#2A52BE" style={{marginTop: 100}} />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <TouchableOpacity style={{position: "absolute", right: 0, top: 45}} onPress={() => turnLeave(true)}>
        <icons.BtnReturnRight width={30} height={30} />
      </TouchableOpacity>

      { isLeave &&

        <Portal>
          <LeaveWindow turnLeave={turnLeave} />
        </Portal>
      }
      
      <ContentWrapper>

        {
          items.map((item, idx) => {
            return (
              <DoctorCard 
                name={item.name} 
                date={`${item.timestart} ${item.data}`} 
                idAppointment={item.id}
                isLast={idx === items.length - 1}
                login={login}
                changerItems={changeItems} 
                changerLoading={turnLoading}
              />
            )
          })
        }

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

const mapStateToProps = ({ login }) => {
  return {
    login
  }
}

export default connect(mapStateToProps)(DoctorsPage);