import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {}

const Separator: FC<Props> = memo(() => {
  return <View style={styles.container} />;
});

const styles = StyleSheet.create({
  container: {
    height: 5,
  },
});

export default Separator;
