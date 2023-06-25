import React, {FC, useMemo} from 'react';
import {
  StyleSheet,
  View,
  TextInput as Input,
  TextInputProps,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import {colors, spacing} from '../utils';

interface Props extends TextInputProps {
  name: string;
  handleFormData: (key: string, value: string) => void;
  viewStyle?: StyleProp<ViewStyle>;
}

const TextInput: FC<Props> = ({
  name,
  handleFormData,
  viewStyle,
  ...inputProps
}) => {
  const formatLabel = useMemo(
    () => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
    [name],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{formatLabel}</Text>
      <View style={[styles.inputContainer, viewStyle]}>
        <Input
          style={styles.input}
          onChangeText={text => handleFormData(name, text)}
          {...inputProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.x2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.x1,
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 40,
    paddingHorizontal: spacing.x3,
    paddingVertical: spacing.x1,
  },
  input: {
    flex: 1,
  },
});

export default TextInput;
