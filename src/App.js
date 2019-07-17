import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OrderList from './pages/OrderList';
import Order from './pages/Order';
import './App.css';

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Heading</h1>
      <div>{children}</div>
      <h2>Footer</h2>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={OrderList} />
        <Route path="/order" exact component={Order} />
      </Layout>
    </Router>
  );
}

export default App;
