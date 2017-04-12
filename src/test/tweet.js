const TweetDefauls = {
  description: ''
}

export default (state = TweetDefauls, action) => {
    switch(action.type) {
        case 'TWEET_CHANGED':
            return { ...state, description: action.payload }
        case 'TWEET_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}
