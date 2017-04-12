import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import { Subtitle } from 're-bulma'
import ListItem from './ListItem'

const FriendList = ({ friends: { profile, isLoading } }) => {

  const friendsElements = profile.map(function(item, index) {
    return (
      <ListItem picture={ item.avatar } user={ item.name } key={ "friends-" + index } />
    );
  });

  return (
    <div>
        <Subtitle size="is3">Friends</Subtitle>
        <br />
        { friendsElements }
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadFriends: () => {
      dispatch(fetchFriends());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
