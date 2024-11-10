import React from 'react';
import StackNavigator from './src/navigations/stackNavigation';
import { ReduxProvider } from './src/redux/reduxProvider';

function App() {
  return (
    <ReduxProvider>
      <StackNavigator/>
    </ReduxProvider>
  );
}

export default App;
