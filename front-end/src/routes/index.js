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
import AllOrders from '../pages/allOrders';

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
            <Route exact path="/customers" component={ Customers } />
            <Route exact path="/customers/products" component={ Products } />
            <Route exact path="/customers/orders" component={ CustomerOrders } />
            <Route exact path="/customers/checkout" component={ Checkout } />
            <Route exact path="/seller" component={ Saller } />
            <Route exact path="/seller/orders" component={ AllOrders } />
            <Route exact path="/admin" component={ Admin } />
          </Switch>
        </main>
      </div>
    );
  }
}
