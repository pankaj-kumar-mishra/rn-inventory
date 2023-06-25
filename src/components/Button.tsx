import React, {FC, memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../utils';

interface Props {
  text: string;
  onPress: () => void;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: FC<Props> = memo(({text, onPress, viewStyle, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.btn, viewStyle]}>
      <Text numberOfLines={1} style={[styles.btnText, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default Button;
