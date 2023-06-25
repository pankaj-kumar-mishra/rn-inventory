import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {spacing} from '../../utils';

interface Props {}

const AddOrUpdate: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Add/Edit Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.x5,
  },
});

export default AddOrUpdate;
