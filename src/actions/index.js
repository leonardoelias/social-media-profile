import * as constants from '../constants';
import axios from 'axios'

const api = {
    baseUrl: 'https://api.backand.com:443/1/objects/',
    client_id: '7e507e02-3eaf-401d-b3a9-a33e823d632f',
    offset: 4
};

export const fetchFriends = () => {
    return (dispatch) => {
        axios.defaults.headers.common['AnonymousToken'] = api.client_id;
        return axios
                  .get(`${api.baseUrl}friends?pageSize=100`)
                  .then(resp => dispatch({type: constants.LOAD_MORE_FRIENDS, payload: resp.data}))
    }
}

export const fetchFeed = () => {
    return (dispatch) => {
        axios.defaults.headers.common['AnonymousToken'] = api.client_id;
        return axios
                  .get(`${api.baseUrl}status?pageSize=100&pageNumber=${api.offset}`)
                  .then(resp => dispatch({type: constants.FETCHFEED, payload: resp.data}))
    }
}

export const changeDescription = event => ({
    type: constants.TWEET_CHANGED,
    payload: event.target.value
})

export const clear = () => {
    return [{ type: constants.TWEET_CLEAR }]
}

export const add = (description) => {
    return dispatch => {
      axios.post('https://api.backand.com:443/1/objects/', { "text": description, "user": "1" })
          .then(resp => dispatch(clear()))
          .then(resp => dispatch(fetchFeed()))
    }
}

