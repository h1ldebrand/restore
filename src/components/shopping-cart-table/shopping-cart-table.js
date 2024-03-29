import React from 'react';
import { connect } from 'react-redux'

import './shopping-cart-table.css'

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (item, index) => {
        const {id, name, count, total} = item;
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ name }</td>
                <td>{ count }</td>
                <td>{ total }</td>
                <td>
                    <button className="btn btn-outline-danger"
                            onClick={() => onDelete(id)}
                    >
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button className="btn btn-outline-success"
                            onClick={() => onIncrease(id)}
                    >
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-warning"
                            onClick={() => onDecrease(id)}
                    >
                        <i className="fa fa-minus-circle"/>
                    </button>
                </td>
            </tr>
        )}

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(renderRow) }
                </tbody>
            </table>
            <div className="total">
                Total: { total }
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    onIncrease: () => {
        console.log('onIncrease')
    },
    onDecrease: () => {
        console.log('onDecrease')
    },
    onDelete: () => {
        console.log('onDelete')
    }
}

export default connect(state => ({
    items: state.cartItems,
    total: state.orderTotal
}), mapDispatchToProps)(ShoppingCartTable);