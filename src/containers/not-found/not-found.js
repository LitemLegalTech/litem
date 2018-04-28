import React from 'react';
import { pageView } from './../../services/ga-helpers';
import Container from './../../components/styled-components/container';
import Title from './../../components/styled-components/title';
//import Header from './../../components/styled-components/header';

export default () => {
  pageView(window.location.pathname);
  return (
    <Container>
      <Title>Sorry, page not found!</Title>
    </Container>
  );
};
