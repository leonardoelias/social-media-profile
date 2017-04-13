import React from 'react';
import { connect } from 'react-redux';
import { Content, CardContent, Card, CardImage, Image} from 're-bulma'

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
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Profile);
