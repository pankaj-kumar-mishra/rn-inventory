import React, {FC, memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors, spacing} from '../utils';

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
    paddingVertical: spacing.x1,
    paddingHorizontal: spacing.x3,
    borderRadius: spacing.x1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default Button;
