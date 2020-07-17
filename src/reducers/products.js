import * as Types from './../constants/ActionTypes';

var initialState = [];

var findIndex = (products, id) => {
   var result = -1;

   result= products.map((product, index) => {
      if (product.id === id) {
         result = index;
      }
   })
   return result;
}

const products = (state = initialState, action) => {
   var { product } = action;
   var index = -1;


   switch (action.type) {
      case Types.FETCH_PRODUCT:
         state = action.products;
         return [...state];

      case Types.DELETE_PRODUCT:
         state = state.filter(el => el.id !== action.id);
         return [...state];

      case Types.UPDATE_PRODUCT:
         index = findIndex(state, product.id);
         state[index] = product;
         return [...state];

      case Types.ADD_PRODUCT:
         state.push(product);
         return [...state];

      default:
         return [...state];
   }
};

export default products;
