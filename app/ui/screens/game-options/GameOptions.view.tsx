import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useGameOptionsViewModel} from './GameOptions.vm';

export const GameOptions = () => {
  const vm = useGameOptionsViewModel();

  React.useEffect(() => {
    vm.getCategories().then((res) => {
      console.log(res[0].name);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Game Options</Text>
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
