import { createStore, combineReducers, applyMiddleware } from 'redux';

// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

// reducer
import user from './modules/user';
import cart from './modules/cart';
import comment from './modules/comment';
import image from './modules/image';
import product from './modules/product';
import review from './modules/review';
import wish from './modules/wish';

const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer,
  comment: comment.reducer,
  image: image,
  product: product.reducer,
  review: review.reducer,
  wish: wish.reducer,
  router: connectRouter(history),
});

// history 넣기, 로거사용
const middleware = [thunk.withExtraArgument({ history }), logger];

// 미들웨어와 리듀서 묶어서 store생성
const store = createStore(rootReducer, applyMiddleware(...middleware));
export { history };

export default store;
