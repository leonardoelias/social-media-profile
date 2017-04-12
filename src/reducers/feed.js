const feedDefaults = {
  posts: [],
  isLoading: false
}

export default (state = feedDefaults, action)=> {

  switch (action.type) {
    case 'FETCHFEED':
        return {
          ...state,
          posts: [
            ...action.payload.data.reverse()
          ],
          isLoading: false
        };
    default:
        return state
  }
}
