import React, { Component } from 'react';

import './MsgSubject.css';

export default class MsgSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleUIChange = (e) => {
    this.setState({ show: e.target.checked });
  }

  handleSubjectTextChange = (e) => {
    this.props.onSubjectTextChange(e.target.value);
  }

  render() {
    return (
      <div className="block">
        <h4>Message Subject</h4>
        <div className="block">
          <select name="type">
            {
              ['feat', 'fix', 'refactor', 'docs', 'test', 'style', 'chore'].map(
                (type) => <option key={type} value={type}>{type}</option>
              )
            }
          </select>
        </div>
        <div className="block">
          <input type="checkbox" id="has-scope"
            onChange={this.handleUIChange} />
          <label htmlFor="has-scope">Has Scope?</label>
          {
            this.state.show ?
              <input type="text" name="scope" /> :
              null
          }
        </div>
        <div className="block">
          {
            this.props.validation ?
              null :
              <span className='errorMsg'>Subject text length cannot be longer than 70 characters.</span>
          }
          <input type="text" name="subject"
            className={this.props.validation ? '' : 'error'}
            onChange={this.handleSubjectTextChange} />
        </div>
      </div>
    );
  }
}
