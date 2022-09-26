import React from 'react';
// import {Provider} from 'react-redux';
import MainNavigation from './src/navigation';
// import store from './src/redux/state';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

Ionicons.loadFont();
MaterialIcons.loadFont();

const App = () => (
  // <Provider store={store}>
  <MainNavigation />
  // </Provider>
);

export default App;
