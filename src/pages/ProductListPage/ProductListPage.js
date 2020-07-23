import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions';

class ProductListPage extends Component {
   constructor(props) {    // eslint-disable-line 
      super(props);
   }

   componentDidMount() {
      this.props.onFetchAllProduct();
   }

   onDelete = (id) => {
      this.props.onDeleteProduct(id);
   }


    findIndex = (products, id) => {
      var result = -1;
      products.map((product, index) => { // eslint-disable-line
         if(product.id === id)
         {
            result = index;
         }      
      });
      return result;
   }
   
   render() {
       var {products} =this.props;
       console.log(this.props);
      return (
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/product/add" className="btn btn-info mb-10">
               Create new product
            </Link>
            <ProductList> 
                {this.showProducts(products)}
            </ProductList>
         </div> 
      );

   }

   showProducts = products => {
      var result = null;
      if(products.length > 0) {
         result= products.map((product, index) => {
            return <ProductItem
                  key={index}
                  product={product}
                  index={index}
                  onDelete={this.onDelete}
            />
         })
      }

      return result;
   }
}

const mapStateToProps = (state) => {
   return {
      products: state.products
   };
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      onFetchAllProduct: () => {
         dispatch(actFetchProductsRequest());
      },
      onDeleteProduct: (id) => {
         dispatch(actDeleteProductRequest(id));
      }
   }
}

   export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
