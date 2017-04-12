import React from 'react';
import { connect } from 'react-redux';
import { Content, CardFooter, CardFooterItem, CardContent, Card, CardImage, Image} from 're-bulma'

const Profile = ({ user: { profile } }) => {

  const { avatar, username, description } = profile;

  return (
    <Card>
      <CardImage>
        <Image src={ avatar } />
      </CardImage>
      <CardContent>
        <Content>
          <h2>{ username }</h2>
          { description }
        </Content>
      </CardContent>
      <CardFooter>
        <CardFooterItem>
          TWEETS
          3,105
        </CardFooterItem>
        <CardFooterItem>
          FOLLOWING
          265
        </CardFooterItem>
        <CardFooterItem>
          FOLLOWERS
          288
        </CardFooterItem>
      </CardFooter>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
