import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { findOwner } from '../actions';
import ListItem from './ListItem'

const FeedList = ({ feed: { posts, friends } }) => {

  const feedElements = posts.map(function(item, index) {
    if (item.user !== '') {
      let getUser = findOwner(item.user, friends)
      return (
        <ListItem picture={ getUser.avatar } user={ getUser.name } text={ item.text } key={"profile-" +  index } />
      );
    }else{
      const anonymous = 'https://pbs.twimg.com/profile_images/805766017993605120/nnsBQaVv_200x200.jpg';
      return (
        <ListItem picture={ anonymous } user="Anonymous" text={ item.text } key={"profile-" +  index } />
      );
    }
  });

  return (
    <div>
      <br />
      { feedElements }
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ findOwner }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
