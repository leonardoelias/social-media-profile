const feedDefaults = {
  posts: [],
  friends: []
}

export default (state = feedDefaults, action)=> {

  switch (action.type) {
    case 'FETCHFEED':
        return {
          ...state,
          posts: [
            ...action.payload.data.reverse()
          ]
        };
    case 'SET_FRIENDS':
        return {
          ...state,
          friends: [
            ...action.payload.data            
          ],
        };
    default:
        return state
  }
}