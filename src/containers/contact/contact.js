import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { observer, inject } from 'mobx-react';
import Container from './../../components/styled-components/container';
import Title from './../../components/styled-components/title';
import Header from './../../components/styled-components/header';
import P from './../../components/styled-components/p';
import Btn from './../../components/styled-components/btn';
import BtnGroup from './../../components/styled-components/btn-group';

import ContactForm from './../../components/styled-components/contact-form';

import { pageView } from './../../services/ga-helpers';

@inject('RootStore')
@observer
class Contact extends Component {
  state = {
    messageTitle: '',
    messageBody: '',
    emailAddress: '',
    sent: false
  };

  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }
  componentDidMount() {
    pageView(window.location.pathname);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ sent: true }, () => {
      const message = {
        messageTitle: this.state.messageTitle,
        messageBody: this.state.messageBody,
        emailAddress: this.state.emailAddress
      };
      this.props.RootStore.SessionStore.sendMessage(message);
      this.props.RootStore.UIStore.handleFadeIn();
      this.resetState();
      ReactGA.event({
        category: 'contact form',
        action: `message sent: ${this.props.id}`,
        label: this.props.id
      });
    });
  };
  resetState = () => {
    setTimeout(() => {
      this.setState({
        messageTitle: '',
        messageBody: '',
        emailAddress: '',
        sent: false
      });
    }, 3000);
  };
  render() {
    return (
      <Container notFull={this.props.history.location.pathname === '/'}>
        <Title center t="10px">
          Get in Touch
        </Title>
        <Header justify>Feel free to drop us an email at info@litem.co.uk.</Header>
        <Header justify>Alternatively, please send us a message below.</Header>
        <form name="contact" method="post">
          <ContactForm.Input type="hidden" name="form-name" value="contact" />
          <ContactForm.Input type="text" name="name" t="20px" placeholder="name" required />
          <ContactForm.Input type="email" name="email" t="20px" placeholder="email" autoComplete="email" required />
          <ContactForm.TextArea name="message" t="20px" b="20px" placeholder="message" rows="10" cols="100" required />
          <BtnGroup>
            <Btn t="50px" b="50px" type="submit">
              Send
            </Btn>
          </BtnGroup>
        </form>
        {/*!this.state.sent ? (
          <React.Fragment>
            <Title center t="10px">
              Get in Touch
            </Title>
            <Header justify>Feel free to drop us an email at info@litem.co.uk.</Header>
            <Header justify>Alternatively, please send us a message below.</Header>
            <form onSubmit={this.handleSubmit}>
              <ContactForm.Input
                type="email"
                placeholder="email"
                t="20px"
                required="required"
                autoComplete="email"
                value={this.state.emailAddress}
                onChange={e => this.setState({ emailAddress: e.target.value })}
              />
              <ContactForm.Input
                type="text"
                t="20px"
                placeholder="name"
                required
                value={this.state.messageTitle}
                onChange={e => this.setState({ messageTitle: e.target.value })}
              />
              <ContactForm.TextArea
                t="20px"
                b="20px"
                placeholder="message"
                rows="10"
                cols="100"
                required
                value={this.state.messageBody}
                onChange={e => this.setState({ messageBody: e.target.value })}
              />
              <BtnGroup>
                <Btn b="50px" type="submit">
                  Send
                </Btn>
              </BtnGroup>
            </form>
          </React.Fragment>
        ) : (
          <Title>Message Sent!</Title>
        )*/}
      </Container>
    );
  }
}

export default Contact;
