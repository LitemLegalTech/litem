import React from 'react';
import BtnGetStarted from './../../components/styled-components/btn-get-started';
import P from './../../components/styled-components/p';
import Title from './../../components/styled-components/title';
import Container from './../../components/styled-components/container';

import { pageView, handleNavClick } from './../../services/ga-helpers';

class PreTool extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
  }
  render() {
    return (
      <Container>
        <Title center t="50px">
          Do I have a good case?
        </Title>
        <P justify b="50px">
          We're going to ask you around 10 easy questions to find out whether you've got a good case.
        </P>
        <P>Don't worry - you don't need to sign-up to get our advice and we don't take any personal details.</P>
        <BtnGetStarted onClick={e => handleNavClick(e, this.props.history)} id="get started pre-case" name="case-tool">
          Start
        </BtnGetStarted>
      </Container>
    );
  }
}
export default PreTool;
