import React from 'react';
import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Categories from './components/Categories';
import Users from './components/Users';
import PrivateRoute from 'core/components/Routes/PrivateRoutes';
import { getEnabledCategories } from 'trace_events';

import './styles.scss';

const Admin = () => (
    <div className="admin-container">

     <Navbar />
       <div className="admin-content">
           <Switch>
               <PrivateRoute path="/admin/products">
                    <Products/>
               </PrivateRoute>
               <PrivateRoute path="/admin/categories" allowedRoutes={['ROLE_ADMIN']}>
                    <Categories/>
               </PrivateRoute>
               <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
                    <Users/>
               </PrivateRoute>
               
          </Switch>

       </div>
    </div>
);
export default Admin;