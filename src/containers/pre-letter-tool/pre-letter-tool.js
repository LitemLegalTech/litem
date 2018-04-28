import React from 'react';
import Lightbox from './../../components/lightbox/lightbox';
import Container from './../../components/styled-components/container';
import Title from './../../components/styled-components/title';
//import Header from './../../components/styled-components/header';
import P from './../../components/styled-components/p';
import { pageView } from './../../services/ga-helpers';

class PreTool extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
  }
  render() {
    return (
      <Container>
        <Title t="50px" center>
          Write to the defendant
        </Title>
        <P>We're going to ask you around 5 more questions to generate a letter to notify the defendants.</P>
        <P>It will look a little like this:</P>
        <Lightbox />
        <br />
        <P b="90px">
          If you have the defendant's registration you can find out if they are insured and get the details to notify
          the insurers directly. You need to use the Motor Insurer's Database{' '}
          <a href="http://www.askmid.com/askmidenquiry.aspx" target="_blank" rel="noopener noreferrer">
            here
          </a>{' '}
          which as a fee of £4.
        </P>
      </Container>
    );
  }
}
export default PreTool;
