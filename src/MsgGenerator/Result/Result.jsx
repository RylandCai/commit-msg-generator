import React, { Component } from 'react'

import './Result.css'

export default class Result extends Component {
  render() {
    let { header, body, footer } = this.props.commitMsg

    return (
      <div className="block">
        <div>Here's your commit message:</div>
        <div className="block result">
          <div>{header}</div>
          {
            body ?
              <div><br />{body}</div> :
              null
          }
          {
            footer ?
              <div><br />{footer}</div> :
              null
          }
        </div>
      </div>
    )
  }
}
