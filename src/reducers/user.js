const userDefaults = {
  profile: {
    id: 1,
    firstname: 'Elton',
    lastname: 'Minetto',
    username: 'eminetto',
    avatar: 'https://pbs.twimg.com/profile_images/522091874291421184/P5uDCQsS_200x200.jpeg',
    description: 'Co-founder of @coderockr and @planrockr. Author of http://bit.ly/zf2napratica  and http://bit.ly/doctrinenapratica '
  }
}

export default (state = userDefaults, action) => {

  switch (action.type) {

    case 'TOGGLE_FOLLOW':
      break
    default:
      return state;
  }
}
