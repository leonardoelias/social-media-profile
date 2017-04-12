import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import promiseMiddleware from 'redux-promise'
import multiMiddleware from 'redux-multi'

import reducers from './reducers';

const rootReducer = combineReducers({
  ...reducers
});

const middlewares = [
  thunkMiddleware,
  multiMiddleware,
  promiseMiddleware
];

if (process.env.NODE_ENV === 'development') {
  const logger = loggerMiddleware({
    collapsed: true,
    duration: true,
  });

  middlewares.push(logger);
}

let storeCreator = applyMiddleware.apply(null, middlewares)

if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
  require('set.prototype.tojson');
  require('map.prototype.tojson');

  storeCreator = compose(storeCreator, window.devToolsExtension());
}


export default storeCreator(createStore)(rootReducer);


// import { createStore, combineReducers, applyMiddleware } from 'redux';

// import thunk from 'redux-thunk';
// import promise from 'redux-promise'
// import multi from 'redux-multi'

// const userDefaults = {
//   profile: {
//     id: 1,
//     firstname: 'Elton',
//     lastname: 'Minetto',
//     username: 'eminetto',
//     avatar: 'https://pbs.twimg.com/profile_images/522091874291421184/P5uDCQsS_200x200.jpeg',
//     description: 'Co-founder of @coderockr and @planrockr. Author of http://bit.ly/zf2napratica  and http://bit.ly/doctrinenapratica '
//   }
// }

// const user = (state = userDefaults, action) => {

//   switch (action.type) {

//     case 'TOGGLE_FOLLOW':

//     default: return state;

//   }
// }


// const feedDefaults = {
//   posts: [],
//   isLoading: false
// }

// const feed = (state = feedDefaults, action)=> {

//   switch (action.type) {
//     case 'FETCHFEED':
//         return {
//           ...state,
//           posts: [
//             ...action.payload.data.reverse()
//           ],
//           isLoading: false
//         };
//       break;
//     default: return state;
//   }
// }

// const friendsDefaults = {
//   profile: []
// }

// const friends = (state = friendsDefaults, action)=> {
//   switch (action.type) {
//     case 'LOAD_MORE_FRIENDS':
//         return {
//           ...state,
//           profile: [
//             ...action.payload.data
//           ]
//         };
//       break;
//     default: return state;
//   }
// }

// const TweetDefauls = {
//   description: ''
// }

// const tweet = (state = TweetDefauls, action) => {
//     switch(action.type) {
//         case 'TWEET_CHANGED':
//             return { ...state, description: action.payload }
//         case 'TWEET_CLEAR':
//             return { ...state, description: '' }
//         default:
//             return state
//     }
// }


// const reducers = combineReducers({ user, feed, friends, tweet });
// const middleware = applyMiddleware(thunk, multi, promise);

// const store = createStore(
//   reducers,
//   middleware
// );

// export default store;
