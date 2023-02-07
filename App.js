import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import { SafeAreaView } from 'react-native';
import MainStack from './src/navigation/MainStack';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1, backgroundColor: '#117A65'}}>
        <MainStack />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
