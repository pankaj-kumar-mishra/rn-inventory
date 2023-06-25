import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  TextInput as Input,
  TextInputProps,
} from 'react-native';
import {colors, spacing} from '../utils';

interface Props extends TextInputProps {
  name: string;
  handleFormData: (key: string, value: string) => void;
}

const TextInput: FC<Props> = ({name, handleFormData, ...inputProps}) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        onChangeText={text => handleFormData(name, text)}
        {...inputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: spacing.x3,
    paddingVertical: spacing.x1,
    height: 40,
    marginVertical: spacing.x2,
  },
  input: {
    flex: 1,
  },
});

export default TextInput;
