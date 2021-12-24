import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

interface MenuButtonProps {
  text: string;
  onPress: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const {text, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    width: 200,
  },
});
