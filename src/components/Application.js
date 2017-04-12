import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedList from './FeedList';
import FriendList from './FriendList';
import Profile from './Profile';
import Tweet from './Tweet';
import { fetchFriends, fetchFeed } from '../actions';

import { Container, Columns, Column } from 're-bulma';

class Application extends Component {

  componentWillMount() {
    this.props.dispatch(fetchFriends());
    this.props.dispatch(fetchFeed());
  }

  render() {
    return (
      <Container>
        <Columns>
          <Column >
            <Profile />
          </Column>
          <Column size="is6">
            <Tweet />
            <FeedList />
          </Column>
          <Column>
            <FriendList />
          </Column>
        </Columns>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Application);
