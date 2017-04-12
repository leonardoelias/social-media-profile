import React from 'react';
import { connect } from 'react-redux';
import { addFeed } from '../actions';
import { Image, Button, Label,  Textarea} from 're-bulma'

const Header = ({ user: { isFollowing, profile }, addFeed,toggleFollow }) => {

  const { avatar, username, firstname, lastname, description } = profile;

  return (
    <div className="Header">
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
