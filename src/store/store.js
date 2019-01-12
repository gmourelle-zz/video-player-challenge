import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import rootReducer from './rootReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  videoPlayer: {
    clips: {}
  }
};

const reducer = persistCombineReducers(
  {
    key: 'root',
    storage
  },
  rootReducer
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
//persistor.purge(); //uncomment to clean localStorage
