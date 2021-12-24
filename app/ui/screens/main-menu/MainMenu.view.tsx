import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IMainMenuViewModel} from './MainMenu.vm';
import {MenuButton} from '&components/buttons/MenuButton';

interface IMainMenu {
  vm: IMainMenuViewModel;
}

export const MainMenu: React.FC<IMainMenu> = (props) => {
  const {vm} = props;

  return (
    <View style={styles.container}>
      <MenuButton onPress={vm.openGameOptions} text="Play" />
      <MenuButton onPress={vm.openFavourites} text="Favourites" />
      <MenuButton onPress={vm.openSettings} text="Settings" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
