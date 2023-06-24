import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface Props {}

const AddOrUpdate: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Add/Edit Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AddOrUpdate;
