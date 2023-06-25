import React, {FC, memo, useCallback, useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {colors, FALLBACK_IMAGE, ProductModel, spacing} from '../utils';
import Button from './Button';

interface Props extends ProductModel {
  handleEditPress: (_id: string) => void;
  handleDeletePress: (_id: string) => void;
}

const ProductCard: FC<Props> = memo(
  ({
    _id,
    name,
    image,
    price,
    quantity,
    sku,
    handleEditPress,
    handleDeletePress,
  }) => {
    const [isValidImage, setIsValidImage] = useState(false);

    useLayoutEffect(() => {
      Image.getSize(
        image,
        () => {
          setIsValidImage(true);
        },
        () => {},
      );
    }, [image]);

    const onEditPress = useCallback(() => {
      handleEditPress?.(_id);
    }, [_id, handleEditPress]);

    const onDeletePress = useCallback(() => {
      handleDeletePress?.(_id);
    }, [_id, handleDeletePress]);

    return (
      <View style={styles.container}>
        <View style={styles.leftCover}>
          <Text style={styles.title}>Name: {name}</Text>
          <Text style={styles.text}>Price: {price}</Text>
          <Text style={styles.text}>Quantity: {quantity}</Text>
          <View style={styles.btnCover}>
            <Button text="Edit" onPress={onEditPress} />
            <Button
              text="Delete"
              viewStyle={styles.deleteBtn}
              textStyle={styles.deleteBtnText}
              onPress={onDeletePress}
            />
          </View>
        </View>
        <View>
          <Text style={styles.subTitle}>SKU: {sku}</Text>
          <Image
            source={{uri: isValidImage ? image : FALLBACK_IMAGE}}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.white,
  },
  leftCover: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 70,
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  text: {
    fontSize: 16,
    color: colors.black,
    marginVertical: 5,
  },
  subTitle: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
  btnCover: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteBtn: {borderColor: colors.red, marginLeft: spacing.x2},
  deleteBtnText: {color: colors.red},
});

export default ProductCard;
