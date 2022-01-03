import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import {Provider} from 'react-redux';
import configureStore from './redux/reducers/configureStore';

const store = configureStore();

const App = (props) => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}; 

export default App;
