import React, { Component } from 'react';

export default class MsgBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleUIChange = (e) => {
    this.setState({ show: e.target.checked });
  }

  render() {
    return (
      <div className="block">
        <h4>Message Body</h4>
        <div className="block">
          <input type="checkbox"
            id="hasBody"
            onChange={this.handleUIChange} />
          <label htmlFor="hasBody">Has Body?</label>
          {
            this.state.show ?
              <textarea name="body" /> :
              null
          }
        </div>
      </div>
    );
  }
}
