import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-native';

import { FirstPage, LoginPage, RegisterPage, TimetablePage } from '../pages';

const AppPage = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} /> 
        <Route path="/timetable" component={TimetablePage} />
      </Switch>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(223, 244, 242, 0.69);
`;

export default AppPage;