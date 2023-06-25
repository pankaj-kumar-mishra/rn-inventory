import {
  ProductModel,
  ProductInsertRequestModel,
  ProductUpdateRequestModel,
  ProductDeleteRequestModel,
} from '../../utils';

export const prepareInsertRequestData = (
  data: ProductModel,
): ProductInsertRequestModel => {
  return {
    insertOne: {
      document: data,
    },
  };
};

export const prepareUpdateRequestData = (
  data: ProductModel,
): ProductUpdateRequestModel => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {_id, ...restData} = data;
  return {
    updateOne: {
      filter: {
        sku: restData.sku,
      },
      update: {
        $set: restData,
      },
    },
  };
};

export const prepareDeleteRequestData = (
  sku: string,
): ProductDeleteRequestModel => {
  return {
    deleteMany: {
      filter: {
        sku,
      },
    },
  };
};
