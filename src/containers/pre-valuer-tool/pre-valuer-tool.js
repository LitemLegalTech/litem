import React from 'react';
import { observer, inject } from 'mobx-react';

import { pageView, handleNavClick } from './../../services/ga-helpers';
import BtnGetStarted from './../../components/styled-components/btn-get-started';
import P from './../../components/styled-components/p';
import Title from './../../components/styled-components/title';
import Container from './../../components/styled-components/container';
import Link from './../../components/styled-components/link';

@inject('RootStore')
@observer
class PreTool extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
    this.props.RootStore.UIStore.setCurrentSection('valuer');
  }
  render() {
    return (
      <Container>
        <Title t="40px">What is my case worth?</Title>
        <P>
          This is designed to give you our best assessment of the value of your case from the information you give us.
          If you would like a more accurate valuation please speak with a solicitor.
        </P>
        <P>
          This tool is not for valuing fatal cases or serious injuries. In these circumstances you should speak with a
          solicitor.
        </P>
        <P b="30px">
          It is important that you are honest when you come to value your case. There can be severe penalties for
          dishonesty. See{' '}
          <Link
            name="guides"
            onClick={() => {
              this.props.history.push('guides');
              this.props.RootStore.UIStore.setCurrentSection('guides');
            }}
          >
            our guide
          </Link>, 'the importance of being honest' for more details.
        </P>
        <BtnGetStarted onClick={e => handleNavClick(e, this.props.history)} id="get started pre-valuer" name="valuer">
          Start
        </BtnGetStarted>
      </Container>
    );
  }
}
export default PreTool;
