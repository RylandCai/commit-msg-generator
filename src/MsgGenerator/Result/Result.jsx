import React, { Component } from 'react';

import './Result.css';

export default class Result extends Component {
  render() {
    return (
      <div className="block">
        <div>Here's your commit message:</div>
        <div className="block result">
          <div>{this.props.commitMsg.header}</div>
          {
            this.props.commitMsg.body ?
              <div><br />{this.props.commitMsg.body}</div> :
              null
          }
          {
            this.props.commitMsg.footer ?
              <div><br />{this.props.commitMsg.footer}</div> :
              null
          }
        </div>
      </div>
    );
  }
}
