import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actGetProductRequest, actUpdateProductRequest, actAddProductRequest } from '../../actions';


class ProductActionPage extends Component {
   constructor(props) {    // eslint-disable-line
      super(props);
      this.state = {
         id: '',
         txtName: '',
         txtPrice: '',
         chkbStatus: false
      }
   }

   componentDidMount() {
      var { match } = this.props;
      if (match) {

         var id = match.params.id;
         this.props.onGetProduct(id);
      }
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.props.itemEditing !== prevProps.itemEditing) {
         var { itemEditing } = this.props;
         this.setState({
            id: itemEditing.id,
            txtName: itemEditing.name,
            txtPrice: itemEditing.price,
            chkbStatus: itemEditing.status
         });
      }
   }


   onChange = (e) => {
      var target = e.target;
      var name = target.name;
      var value = (target.type === 'checkbox') ? target.checked : target.value;
      this.setState({
         [name]: value
      });
   }

   onSave = (e) => {
      e.preventDefault();
      var { id, txtName, txtPrice, chkbStatus } = this.state;
      var { history } = this.props;
      var product = {
         id: id,
         name: txtName,
         price: txtPrice,
         status: chkbStatus
      }

      if (id) {
         this.props.onUpdateProduct(product);
      } else {
         this.props.onAddProduct(product);
      }
      history.push('/product-list');
   }



   render() {

      var { id, txtName, txtPrice, chkbStatus } = this.state;
      var nameLegend = id === '' ? 'Create new product' : 'Update product';
      return (
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            <form onSubmit={this.onSave}>
               <legend>{nameLegend}</legend>
               <div className="form-group">
                  <label>Tên sản phẩm</label>
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Input name"
                     name="txtName"
                     value={txtName || ''}
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group">
                  <label>Giá</label>
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Input price"
                     name="txtPrice"
                     value={txtPrice || ''}
                     onChange={this.onChange}
                  />
               </div>
               <div className="form-group">
                  <label>Trạng thái</label>
               </div>
               <div>
                  <label>
                     <input
                        style={{ marginRight: "10px" }}
                        type="checkbox"
                        name="chkbStatus"
                        value={chkbStatus || ' '}
                        onChange={this.onChange}
                        checked={chkbStatus}
                     />
                      Còn hàng

                 </label>
               </div>
               <Link to='/product-list' className='btn btn-danger mr-10'>
                  Back
               </Link>
               <button type="submit" className="btn btn-primary">Save</button>

            </form>

         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      itemEditing: state.itemEditing
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      onGetProduct: (id) => {
         dispatch(actGetProductRequest(id));
      },
      onUpdateProduct: (product) => {
         dispatch(actUpdateProductRequest(product));
      },
      onAddProduct: (product) => {
         dispatch(actAddProductRequest(product));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
