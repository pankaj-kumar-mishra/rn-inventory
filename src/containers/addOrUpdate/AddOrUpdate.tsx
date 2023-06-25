import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from '../../components';
import {colors, spacing} from '../../utils';
import {useAddOrUpdateLogic} from './hooks';

interface Props {}

const AddOrUpdate: FC<Props> = () => {
  const {formData, handleFormData, handleSubmit, params} =
    useAddOrUpdateLogic();
  const {name, price, image, quantity, sku} = formData;

  return (
    <View style={styles.container}>
      <TextInput
        name="name"
        placeholder="Product Name"
        value={name}
        handleFormData={handleFormData}
      />
      <TextInput
        name="price"
        placeholder="Product Price"
        value={price}
        handleFormData={handleFormData}
        keyboardType="numeric"
      />
      <TextInput
        name="image"
        placeholder="Product photo"
        value={image}
        handleFormData={handleFormData}
      />
      <TextInput
        name="quantity"
        placeholder="Product QTY"
        value={quantity}
        handleFormData={handleFormData}
        keyboardType="numeric"
      />
      <TextInput
        name="sku"
        placeholder="Product SKU"
        value={sku}
        handleFormData={handleFormData}
      />

      <Button
        text={params?._id ? 'Update' : 'Save'}
        onPress={handleSubmit}
        viewStyle={styles.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.x5,
  },
  btn: {
    marginTop: spacing.x5,
    backgroundColor: colors.white,
    height: 50,
  },
});

export default AddOrUpdate;
