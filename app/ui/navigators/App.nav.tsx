import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useMainMenuViewModel, MainMenu} from '&screens/main-menu';
import {GameOptions} from '&screens/game-options/GameOptions.view';

const {Navigator, Screen} = createNativeStackNavigator();

export const AppNav = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          children={() => <MainMenu vm={useMainMenuViewModel()} />}
          name="MainMenu"
        />
        <Screen name="GameOptions" component={GameOptions} />
      </Navigator>
    </NavigationContainer>
  );
};
