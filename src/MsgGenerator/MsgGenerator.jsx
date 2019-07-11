import React, { Component } from 'react'

import './MsgGenerator.css'
import MsgEditor from './MsgEditor/MsgEditor'
import Result from './Result/Result'

export default class MsgGenerator extends Component {
  constructor() {
    super()
    this.state = {
      commitMsg: {
        header: null,
        body: null,
        footer: null,
      },
    }
  }

  handleSubmit = (commitMsg) => {
    this.setState({ commitMsg: commitMsg })
  }

  render() {
    const { commitMsg } = this.state

    return (
      <div className="root">
        <h2>Commit Message Generator</h2>
        <MsgEditor
          commitMsg={commitMsg}
          onSubmit={this.handleSubmit} />
        <Result
          commitMsg={commitMsg} />
      </div>
    )
  }
}
