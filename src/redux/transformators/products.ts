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
  return {
    updateOne: {
      filter: {
        sku: data.sku,
      },
      update: {
        $set: data,
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
