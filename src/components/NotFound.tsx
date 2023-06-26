import React, {FC, memo} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {colors, spacing} from '../utils';

interface Props {
  text?: string;
  onPress?: () => void;
}

const NotFound: FC<Props> = memo(({text = 'No record found!!!', onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {onPress ? (
        <Pressable onPress={onPress} style={styles.btn}>
          <Text style={styles.btnText}>Try Again</Text>
        </Pressable>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.x4,
    paddingVertical: spacing.x7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: colors.primary,
    marginTop: spacing.x4,
    borderRadius: spacing.x1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.x5,
    paddingVertical: spacing.x3,
  },
  btnText: {
    color: colors.black,
    fontWeight: '600',
  },
});

export default NotFound;
