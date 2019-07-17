import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import IngredientsForm from '../components/IngredientsForm';
import { addOrderToCart } from '../store/actions';

const Order = ({ history }) => {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/ingredients').then(res => setIngredients(res.data));
  }, []);

  const handleAddToOrder = order => {
    dispatch(addOrderToCart(order));
    // TODO: redirect to '/'
    history.push('/');
  };

  return (
    <div>
      <IngredientsForm
        ingredients={ingredients}
        addToOrder={handleAddToOrder}
      />
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default withRouter(Order);
