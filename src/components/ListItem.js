import React from 'react';

import { Box, Media, MediaLeft, MediaContent, Content, Image } from 're-bulma';

const ListItem = ({ user, picture, text }) => {
  return (
    <Box>
      <Media>
        <MediaLeft>
          <Image src={ picture } size='is48X48' />
        </MediaLeft>
        <MediaContent>
          <Content>
            <p>
              <strong>{ user }</strong> <small></small>
              <br />
              { text }
            </p>
          </Content>
        </MediaContent>
      </Media>
    </Box>
  )
}

export default ListItem;
