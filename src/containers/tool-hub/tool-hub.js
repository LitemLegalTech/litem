import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import * as Scroll from 'react-scroll';
import { pageView, handleNavClick } from './../../services/ga-helpers';

import P from './../../components/styled-components/p';
import Header from './../../components/styled-components/header';
import Title from './../../components/styled-components/title';
import Btn from './../../components/styled-components/btn';
import BtnGroup from './../../components/styled-components/btn-group';
import Container from './../../components/styled-components/container';
import Checkbox from './../../components/styled-components/checkbox';
import Link from './../../components/styled-components/link';

@inject('RootStore')
@observer
class ToolHub extends Component {
  state = {
    show: false
  };
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    if (this.props.history.location.pathname === '/tool-hub')
      this.props.RootStore.UIStore.setCurrentSection('tool-hub');
  }
  componentDidMount() {
    pageView(window.location.pathname);
    this.props.RootStore.SessionStore.setUserObj();
  }

  render() {
    return (
      <Container t="40px">
        <Title center>Welcome to Litem.</Title>
        <Header center>Before we get going...</Header>
        <P>
          Litem is designed to give quick advice on any cycling incident from hit and runs to potholes. It has been
          checked by personal injury lawyers with over 25 years combined experience.
        </P>
        <P>
          However, this advice is not a substitute for a lawyer and we accept no liability for the outcome of your case.
        </P>
        <P>
          Please tick once you've read this
          <Checkbox
            onClick={() => {
              this.setState({ show: !this.state.show });
              if (!this.state.show) Scroll.animateScroll.scrollToBottom();
            }}
          />
        </P>
        <div className={this.state.show ? 'show' : 'hide'}>
          <P>
            It might help to have a look through{' '}
            <Link
              name="guides"
              onClick={() => {
                this.props.history.push('guides');
                this.props.setSection('guides');
              }}
            >
              our guides
            </Link>{' '}
            first. This includes a practical example of how someone would settle their case using Litem. If you are
            ready to get started please select one of our tools:
          </P>
          {/*<Header>Please select one of the following:</Header>*/}
          <BtnGroup>
            <Btn b="20px" onClick={e => handleNavClick(e, this.props.history)} id="tool-hub case" name="pre-case-tool">
              Do I have a case?
            </Btn>
            <Btn
              b="20px"
              onClick={e => handleNavClick(e, this.props.history)}
              id="tool-hub valuer"
              name="pre-valuer-tool"
            >
              What is my case worth?
            </Btn>
            {/*<Btn b="20px" onClick={e => handleNavClick(e, this.props.history)} id="tool-hub guides" name="guides">
              Or have a look through our guides?
            </Btn>*/}
          </BtnGroup>
          {/*<P>
            If you decide that you would prefer to use a lawyer, feel free to contact us{' '}
            <Link onClick={e => handleNavClick(e, this.props.history)} id="tool-hub contact" name="contact">
              here
            </Link>{' '}
            or email us at info@litem.co.uk and we will send you some suggestions. We are not paid to recommend these
            law firms and we will never pass your details on to anyone.
          </P>*/}
        </div>
      </Container>
    );
  }
}

export default ToolHub;
