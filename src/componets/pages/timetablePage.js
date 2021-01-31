import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Portal from '@burstware/react-native-portal';

import PatientCard from '../patientCard';
import PatientForm from '../patientForm';
import LeaveWindow from '../leaveWindow';

import icons from '../../../assets/svg/icons';

import getTimetableForPatient from '../../utils/getTimetableForPatient';

const TimetablePage = ({ login }) => {
  
  const [isPatientFormActive, turnPatientForm] = useState(false);
  const [isLeave, turnLeave] = useState(false);
  const [refreshing, turnRefreshing] = useState(false);
  const [loading, turnLoading] = useState(true);
  const [items, changeItems] = useState('');

  const getTimetablePatient = async () => {
    let res = await getTimetableForPatient(login);

    changeItems(res.ans);
    turnLoading(false);
  } 

  useEffect( () => {
    (async () => {
      getTimetablePatient();
    })()
  }, [isPatientFormActive]);

  if (loading) {
    return (
      <Wrapper>
        <ActivityIndicator size="large" color="#2A52BE" style={{marginTop: 100}} />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ScrollView 
        style={{width: "100%", height: "100%"}} 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => getTimetablePatient()}/>
        }
      >
        <TouchableOpacity style={{position: "absolute", right: 0, top: 45}} onPress={() => turnLeave(true)}>
          <icons.BtnReturnRight width={30} height={30} />
        </TouchableOpacity>

        {
          isPatientFormActive &&

          <Portal>
            <PatientForm closeWindow={turnPatientForm} loadingFunc={turnLoading} changerItems={changeItems} /> 
          </Portal>
        }
    
        {
          isLeave &&

          <Portal>
            <LeaveWindow turnLeave={turnLeave} />
          </Portal>
        }
          
        <ContentWrapper>

          {
            items.map((item, idx) => {
              return <PatientCard 
                key={item.id} 
                time={`${item.timestart} ${item.data}`} 
                cabinet={item.room} 
                doctor={item.doctor} 
                appointmentId={item.id}
                changerLoading={turnLoading}
                changerItems={changeItems}
                last={idx != items.length - 1 ? true : false} 
                login={login}
              />
            })
          }

          <TouchableOpacity onPress={() => turnPatientForm(true)} style={{width: "75%"}}>
            <AddingBtn>
              <AddingBtnValue>Записаться к врачу</AddingBtnValue>
            </AddingBtn>
          </TouchableOpacity>
        </ContentWrapper>
      </ScrollView>
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

const AddingBtn = styled.View`
  width: 100%;
  height: 60px;
  background-color: #A0BFFA;  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const AddingBtnValue = styled.Text`
  color: #ffffff;
  line-height: 28px;
  font-size: 28px;
`;

const mapStateToProps = ({login}) => {
  return {
    login
  }
}

export default connect(mapStateToProps)(TimetablePage);