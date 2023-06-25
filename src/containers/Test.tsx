import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, getUsers} from '../redux';

interface Props {}

const Test: FC<Props> = () => {
  const {count, data, loading} = useSelector(state => state.test);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleGetUsers = () => {
    dispatch(getUsers());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textCounter}>{count}</Text>
      <View style={styles.btnCover}>
        <TouchableOpacity
          onPress={handleDecrement}
          activeOpacity={0.8}
          style={styles.btn}>
          <Text style={styles.btnText}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleIncrement}
          activeOpacity={0.8}
          style={styles.btn}>
          <Text style={styles.btnText}>Increment</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.usersCover}>
        <TouchableOpacity
          onPress={handleGetUsers}
          activeOpacity={0.8}
          style={styles.btn}>
          {loading ? (
            <ActivityIndicator size="small" color="goldenrod" />
          ) : (
            <Text style={styles.btnText}>Get Users</Text>
          )}
        </TouchableOpacity>
        {data.length > 0 && (
          <Text style={styles.text}>{JSON.stringify(data)}</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textCounter: {
    fontSize: 30,
    textAlign: 'center',
    color: 'goldenrod',
    marginVertical: 20,
  },
  btnCover: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    width: '40%',
    height: 50,
    borderWidth: 1,
    borderColor: 'goldenrod',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    color: 'goldenrod',
  },
  usersCover: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Test;
