import React, { Component } from 'react'

export default class MsgFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  handleUIChange = (e) => {
    this.setState({ show: e.target.checked })
  }

  render() {
    return (
      <div className="block">
        <h4>Message Footer</h4>
        <div className="block">
          <input type="checkbox" id="hasFooter" name="show"
            onChange={this.handleUIChange} />
          <label htmlFor="hasFooter">Has Footer?</label>
          {
            this.state.show ?
              (<div>
                <input type="radio" id="breakChange" name="footerType"
                  value="BREAKING CHANGE:" />
                <label htmlFor="breakChange">Break Change</label>
                <input type="radio" id="closeIssue" name="footerType"
                  value="Closes:" />
                <label htmlFor="closeIssue">Close Issue</label>
                <textarea name="footer"></textarea>
              </div>) :
              null
          }
        </div>
      </div>
    )
  }
}
