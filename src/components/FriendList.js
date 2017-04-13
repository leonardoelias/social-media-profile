import React from 'react';
import { connect } from 'react-redux';
import { Subtitle } from 're-bulma'
import ListItem from './ListItem'

const FriendList = ({ friends: { profile } }) => {

  const friendsElements = profile.map(function(item, index) {
    const anonymous = 'https://pbs.twimg.com/profile_images/805766017993605120/nnsBQaVv_200x200.jpg';

    if (item.name !== '') {
      return (
        <ListItem picture={ item.avatar } user={ item.name } key={ "friends-" + index } />
      );
    }else{
      return (
        <ListItem picture={ anonymous } user='anonymous' key={ "friends-" + index } />
      );
    }
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
