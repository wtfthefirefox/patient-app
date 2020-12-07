import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';
import Portal from '@burstware/react-native-portal';

import store from './src/redux/store';
import AppPage from './src/componets/appPage';

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Portal.Host>
          <SafeAreaView style={{backgroundColor: "#c4c4c4"}}>
            <View style={{backgroundColor: '#ffffff'}}>
              <AppPage />
            </View>
          </SafeAreaView>
        </Portal.Host>
      </NativeRouter>
    </Provider>
  )
}

export default App;