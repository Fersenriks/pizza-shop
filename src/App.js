import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './scss/app.scss';
import { Route } from 'react-router-dom';
import { Header } from './components';
import Home from './pages/Home';
import Cart from './pages/Cart';
import axios from 'axios';
import setPizzas from './redux/actions/pizzas';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route exact path={'/cart'} component={Cart} />
      </div>
    </div>
  );
}

export default App;
