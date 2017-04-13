const friendsDefaults = {
  profile: []
}

export default (state = friendsDefaults, action)=> {
  switch (action.type) {
    case 'LOAD_MORE_FRIENDS':
        console.log(action)
        return {
          ...state,
          profile: [
            ...action.payload.data
          ]
        };
    default:
      return state;
  }
}
