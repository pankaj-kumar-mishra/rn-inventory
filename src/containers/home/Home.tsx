import React, {ComponentType, FC, useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {NotFound, ProductCard, Separator} from '../../components';
import {ProductModel} from '../../utils';
import {useAppSync, useHomeLogic} from './hooks';

interface Props {}

const Home: FC<Props> = () => {
  const {loading, handleFetchProducts} = useAppSync();
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

  const keyExtractor = useCallback(
    (item: ProductModel) => item._id + '_' + item.sku,
    [],
  );

  return (
    <FlatList
      data={products}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={<NotFound />}
      ItemSeparatorComponent={(<Separator />) as unknown as ComponentType<any>}
      initialNumToRender={10}
      removeClippedSubviews={true}
      refreshing={loading}
      onRefresh={handleFetchProducts}
    />
  );
};

export default Home;
