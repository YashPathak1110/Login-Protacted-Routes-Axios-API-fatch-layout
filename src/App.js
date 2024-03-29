
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import MyOrders from "./MyOrders/MyOrders";
import MyBlog from "./MyBlog/MyBlog";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.root);

  return (
    <Router>
    
        <Routes>
          <Route path="/login" element={<Login />} />
          {isAuthenticated ? (
            
            <Route path="/" element={<AuthenticatedRoutes />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      
    </Router>
  );
};

// AuthenticatedRoutes component contains protected routes
const AuthenticatedRoutes = () => (
  <React.Fragment>
     <Layout>
    <Routes>   
    <Route path="/" element={<Home />} />
    <Route path="/admin/dashboard" element={<ProtectedRoute adminRoute={true} component={<Dashboard />} />} />
    <Route path="/profile" element={<ProtectedRoute adminRoute={true} component={<Profile />} />} />
    <Route path="/myorders" element={<MyOrders />} />
    <Route path="/myblog" element={<MyBlog />} />
    </Routes>
    </Layout>
  </React.Fragment>
);

export default App;
