import React, {ComponentType, FC, useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {NotFound, ProductCard, Separator} from '../../components';
import {ProductModel} from '../../utils';
import {useHomeLogic} from './hooks';

interface Props {}

const Home: FC<Props> = () => {
  const {products, handleEditPress, handleDeletePress} = useHomeLogic();

  const renderItem: ListRenderItem<ProductModel> = useCallback(
    ({item}) => (
      <ProductCard
        {...item}
        handleEditPress={handleEditPress}
        handleDeletePress={handleDeletePress}
      />
    ),
    [handleDeletePress, handleEditPress],
  );

  const keyExtractor = useCallback((item: ProductModel) => item._id, []);

  return (
    <FlatList
      data={products}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={<NotFound />}
      ItemSeparatorComponent={(<Separator />) as unknown as ComponentType<any>}
      initialNumToRender={10}
      removeClippedSubviews={true}
    />
  );
};

export default Home;
