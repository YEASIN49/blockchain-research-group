import { Spin } from 'antd';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './Components/Layout/ProtectedRoute';

import { Home, Members, Login } from "./Pages";
import UserDetail from './Pages/UserDataContainer';
import UserProfile from './Pages/UserProfile';

class App extends React.PureComponent {
  
  render(){

    const isAuthenticated = true
    const isValidating = false
    const token = true

    return (
      <div >
        <BrowserRouter>
          <Routes>
            <Route
              exact={true}
              path='/'

              element={
                token && isAuthenticated && !isValidating?
                  isValidating ? <Spin size="large" /> : <Navigate to='/home' /> : <Navigate to='/home' />
              }
            />

            <Route
              exact={true}
              path='/home'

              element={
                isValidating ? <Spin size="large" /> 
                  : 
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/members'

              element={
                token && isAuthenticated && !isValidating ?
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Members />  
                  </ProtectedRoute>
                  : isValidating ? <Spin size="large" /> : <Navigate to='/members' />
              }
            />

            <Route
              exact={true}
              path='/Login'

              element={
                token && isAuthenticated && !isValidating ?
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Login />
                  </ProtectedRoute>
                  : isValidating ? <Spin size="large" /> : <Navigate to='/Login' />
              }
            />

            <Route
              exact={true}
              path='/user/:id'

              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UserDetail />
                </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/userprofile'

              element={
                token && isAuthenticated && !isValidating ?
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <UserProfile />
                  </ProtectedRoute>
                  : isValidating ? <Spin size="large" /> : <Navigate to='/Login' />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
