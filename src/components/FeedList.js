import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem'

const FeedList = ({ feed: { posts, isLoading } }) => {

  const feedElements = posts.map(function(item, index) {

    const userToProfile = 'https://pbs.twimg.com/profile_images/420826194083213312/CP1RmLa3_200x200.jpeg';
    const anonymous     = 'https://pbs.twimg.com/profile_images/805766017993605120/nnsBQaVv_200x200.jpg';

    if (item.user !== '') {
      return (
        <ListItem picture={ userToProfile } user={ item.id } text={ item.text } key={"profile-" +  index } />
      );
    }else{
      return (
        <ListItem picture={ anonymous } user="Anonymou" text={ item.text } key={ index } />
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

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
