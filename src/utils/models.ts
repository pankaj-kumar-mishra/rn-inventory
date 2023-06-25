export interface ProductModel {
  _id: string;
  name: string;
  price: string;
  image: string;
  quantity: string;
  sku: string;
}

export interface ProductInsertRequestModel {
  insertOne: {
    document: ProductModel;
  };
}

export interface ProductUpdateRequestModel {
  updateOne: {
    filter: {
      sku: string;
    };
    update: {
      $set: Partial<Omit<ProductModel, '_id'>>;
    };
  };
}

export interface ProductDeleteRequestModel {
  deleteMany: {
    filter: {
      sku: string;
    };
  };
}

// export interface ProductsRequestModelTest extends Array<Record<string, string>> {}

// const x: ProductsRequestModelTest = [{id: 'ID'}, {ab: 'AB'}];

export interface ProductsRequestModel {
  [index: number]: {
    insertOne?: {
      document: ProductModel;
    };
    updateOne?: {
      filter: {
        sku: string;
      };
      update: {
        $set: Partial<Omit<ProductModel, '_id' | 'sku'>>;
      };
    };
    deleteMany?: {
      filter: {
        sku: string;
      };
    };
  };
}

// export interface ProductsRequestModel {
//   [index: number]: {
//     insertOne?: {
//       document: {
//         name: string;
//         price: string;
//         image: string;
//         quantity: number;
//         sku: string;
//       };
//     };
//     updateOne?: {
//       filter: {
//         sku: string;
//       };
//       update: {
//         $set: {
//           name: string;
//           quantity: number;
//         };
//       };
//     };
//     deleteMany?: {
//       filter: {
//         sku: string;
//       };
//     };
//   };
// }
