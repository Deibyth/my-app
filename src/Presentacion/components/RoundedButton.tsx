import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { MyColors } from "../theme/AppTheme";
import React from "react";

interface Props {
  text: string;
  onPress: () => void;
}

const RoundedButton = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.RoundedButton} onPress={() => onPress()}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  RoundedButton: {
    width: '100%',
    height: 50,
    backgroundColor: MyColors.primary,
    alignItems: 'center',
    borderRadius: 15
  },
  textButton: {
    color: 'white',
    top: 13
  }
})

export default RoundedButton;
