import React, { Component } from 'react';


class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Products List</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered ">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {this.props.children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;