import * as Types from '../constants/ActionTypes';

var initialState ={
   id: '',
   txtName: '',
   txtPrice: '',
   chkbStatus: ''
};


const itemEditing = (state = initialState , action) => {
   switch(action.type){
      case Types.DETAIL_PRODUCT:
        
         return action.product;

      default:
         return state;
   }
};

export default itemEditing;
