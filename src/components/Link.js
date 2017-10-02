import React, { Component } from 'react'

class Link extends Component {

  render() {
    return (
      <div>
        <div>{this.props.link.description} (<a href={this.props.link.url}>link</a>)</div>
      </div>
    )
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }

}

export default Link
