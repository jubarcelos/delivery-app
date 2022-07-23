import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import Saller from '../pages/saller';
import Customers from '../pages/customers';
import Admin from '../pages/admin';
import Products from '../pages/products';
import CustomerOrders from '../pages/customerOrders';
import Checkout from '../pages/checkout';
import SellerOrders from '../pages/sellerOrders';
import details from '../pages/details';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/customer" component={ Customers } />
            <Route exact path="/customer/products" component={ Products } />
            <Route exact path="/customer/orders" component={ CustomerOrders } />
            <Route exact path="/customer/checkout" component={ Checkout } />
            <Route exact path="/customer/orders/:id" component={ details } />
            <Route exact path="/seller" component={ Saller } />
            <Route exact path="/seller/orders" component={ SellerOrders } />
            <Route exact path="/admin" component={ Admin } />
          </Switch>
        </main>
      </div>
    );
  }
}
