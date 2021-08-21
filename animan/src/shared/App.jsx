// LIBRARY
import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// STYLE
import theme from '../shared/style';

// PAGES
import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterSelect from '../pages/RegisterSelect';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import WishList from '../pages/WishList';
import Review from '../pages/Review';
import ReviewDetail from '../pages/ReviewDetail';
import ReviewWrite from '../pages/ReviewWrite';
import ProductDetail from '../pages/ProductDetail';

// COMPONENTS
import Header from '../components/Header';

// REDUX

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Route path='/' exact component={Main} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/registerselect' exact component={RegisterSelect} />
      <Route path='/shop' exact component={Shop} />
      <Route path='/cart' exact component={Cart} />
      <Route path='/wishList' exact component={WishList} />
      <Route path='/review' exact component={Review} />
      <Route path='/rdetail' exact component={ReviewDetail} />
      <Route path='/wrtie' exact component={ReviewWrite} />
      <Route path='/pdetail' exact component={ProductDetail} />
    </ThemeProvider>
  );
}

export default App;
