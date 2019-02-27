import React, { Component } from 'react';

import './MsgGenerator.css';
import MsgEditor from './MsgEditor/MsgEditor';
import Result from './Result/Result';

export default class MsgGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commitMsg: {
        header: null,
        body: null,
        footer: null,
      },
    }
  }

  handleSubmit = (commitMsg) => {
    this.setState({ commitMsg: commitMsg });
  }

  render() {
    return (
      <div className="root">
        <h2>Commit Message Generator</h2>
        <MsgEditor
          commitMsg={this.state.commitMsg}
          onSubmit={this.handleSubmit} />
        <Result
          commitMsg={this.state.commitMsg} />
      </div>
    );
  }
}
