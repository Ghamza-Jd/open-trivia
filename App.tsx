import React from 'react';
import {enableScreens} from 'react-native-screens';

import {AppNav} from '&navigators/App.nav';

enableScreens();

export const App = () => {
  return <AppNav />;
};
