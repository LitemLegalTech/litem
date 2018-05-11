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
                this.props.RootStore.UIStore.setCurrentSection('guides');
              }}
            >
              our guides
            </Link>{' '}
            first. This includes a practical example of how someone would settle their case using Litem.
          </P>
          <P>
            If you are ready to see if you have a good case please click the button below. This will also create a
            letter to notify the defendant of your case.
          </P>
          <BtnGroup>
            <Btn
              t="20px"
              onClick={e => handleNavClick(e, this.props.history)}
              id="tool-hub triage"
              name="pre-triage-tool"
            >
              Case Evaluation and Letter Tool
            </Btn>
            <P>Alternatively, if you are ready to value your case please click the button below.</P>
            <Btn
              t="20px"
              b="50px"
              onClick={e => handleNavClick(e, this.props.history)}
              id="tool-hub valuer"
              name="pre-valuer-tool"
            >
              Valuation Tool
            </Btn>
          </BtnGroup>
        </div>
      </Container>
    );
  }
}

export default ToolHub;
