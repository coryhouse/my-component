import React, {Component} from 'react'

export default class extends Component {
  render() {
    return <div>
      <h2>Hi {this.props.username}, {this.props.message} </h2>
    </div>
  }
}
