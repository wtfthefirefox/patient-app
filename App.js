import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NativeRouter } from 'react-router-native';
// import { Provider } from 'react-redux';
import Portal from '@burstware/react-native-portal';

import AppPage from './src/componets/appPage';

const App = () => {
  return (
    <NativeRouter>
      <Portal.Host>
        <SafeAreaView style={{backgroundColor: "#c4c4c4"}}>
          <View style={{backgroundColor: '#ffffff'}}>
            <AppPage />
          </View>
        </SafeAreaView>
      </Portal.Host>
    </NativeRouter>
  )
}

export default App;