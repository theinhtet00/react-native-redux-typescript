import React from 'react';
import StackNavigator from './src/navigations/stackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

export default App;
