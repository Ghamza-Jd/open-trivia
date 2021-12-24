import React from 'react';
import {enableScreens} from 'react-native-screens';

import {AppNav} from './app/ui/navigators/App.nav';

enableScreens();

export const App = () => {
  return <AppNav />;
};
