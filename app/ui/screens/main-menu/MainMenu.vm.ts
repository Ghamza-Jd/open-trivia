import {useNavigation} from '@react-navigation/native';

export interface IMainMenuViewModel {
  openGameOptions: () => void;
  openFavourites: () => void;
  openSettings: () => void;
  openRandomInfo: () => void;
}

export const useMainMenuViewModel = (): IMainMenuViewModel => {
  const navigation = useNavigation();

  const openGameOptions = () => {
    navigation.navigate('GameOptions' as never);
  };
  const openFavourites = () => {
    console.log('openFavourites');
  };
  const openSettings = () => {
    console.log('openSettings');
  };
  const openRandomInfo = () => {
    console.log('openRandomInfo');
  };

  return {
    openGameOptions,
    openFavourites,
    openSettings,
    openRandomInfo,
  };
};
