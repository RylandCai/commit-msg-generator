import React, { Component } from 'react';

import './MsgEditor.css';

import MsgSubject from './MsgSubject/MsgSubject';
import MsgBody from './MsgBody/MsgBody';
import MsgFooter from './MsgFooter/MsgFooter';

function formatSubject(el) {
  const type = el.type.value;
  const scope = el.scope && el.scope.value ? `(${el.scope.value})` : '';
  const subject = el.subject ?
    el.subject.value
      .replace(/\b\w?/, (w) => w.toLowerCase())
      .replace(/[.]+$/, '') :
    '';

  return `${type}${scope}: ${subject}`;
}

function formatBody(el) {
  const body = el.body ? el.body.value : '';

  return `${body}`;
}

function formatFooter(el) {
  const footerType = el.footerType ? `${el.footerType.value}\n` : '';
  const footer = el.footer ? el.footer.value : '';

  return `${footerType}${footer}`;
}

export default class MsgEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: true,
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    const el = ev.target.elements;
    const commitMsg = {
      header: formatSubject(el),
      body: formatBody(el),
      footer: formatFooter(el),
    };

    this.props.onSubmit(commitMsg);
  }

  handleSubjectTextChange = (subjectText) => {
    this.setState({ validation: subjectText.length <= 70 });
  }

  render() {
    return (
      <form className="block"
        onSubmit={this.handleSubmit}>
        <MsgSubject
          validation={this.state.validation}
          onSubjectTextChange={this.handleSubjectTextChange} />
        <MsgBody />
        <MsgFooter />
        <button
          disabled={!this.state.validation}>Generate</button>
      </form>
    );
  }
}
