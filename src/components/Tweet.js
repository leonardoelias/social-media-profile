import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { add, clear, changeDescription } from '../actions';
import { Button } from 're-bulma'

class Tweet extends Component {

  constructor(props) {
      super(props)
      this.keyHandler = this.keyHandler.bind(this)
      this.sendTweet = this.sendTweet.bind(this)
  }

  keyHandler(e) {
      const { add, description } = this.props

      if (e.key === 'Enter') {
          add(description)
      } else if (e.key === 'Escape') {
          clear()
      }
  }

  sendTweet(){
    const { add, description } = this.props

    add(description)
  }

  render(){
    return (
      <div className="Tweet">
        <textarea id='description'
          value={this.props.description}
          onChange={this.props.changeDescription}
          onKeyUp={this.keyHandler}
          placeholder="What happening?"
        />
        <Button onClick={this.sendTweet}>Tweet</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({description: state.tweet.description})


const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
