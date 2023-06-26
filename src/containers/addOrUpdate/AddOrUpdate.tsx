import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Button, TextInput} from '../../components';
import {colors, spacing} from '../../utils';
import {useAddOrUpdateLogic} from './hooks';

interface Props {}

const AddOrUpdate: FC<Props> = () => {
  // TODO: Use Formik
  const {formData, handleFormData, handleSubmit, params} =
    useAddOrUpdateLogic();
  const {name, price, image, quantity, sku} = formData;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'height' : undefined}
        keyboardVerticalOffset={100}>
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
          editable={!params?._id}
          viewStyle={params?._id ? styles.disabled : {}}
        />

        <Button
          text={params?._id ? 'Update' : 'Save'}
          onPress={handleSubmit}
          viewStyle={styles.btn}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.x5,
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    marginTop: spacing.x5,
    backgroundColor: colors.white,
    height: 40,
    alignSelf: 'center',
  },
  disabled: {
    backgroundColor: colors.disabled,
  },
});

export default AddOrUpdate;
