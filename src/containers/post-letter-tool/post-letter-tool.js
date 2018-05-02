import React from 'react';

import Container from './../../components/styled-components/container';
import P from './../../components/styled-components/p';
import Title from './../../components/styled-components/title';
import Link from './../../components/styled-components/link';
import List from './../../components/styled-components/list';

import { pageView, handleNavClick } from './../../services/ga-helpers';

class PostLetter extends React.Component {
  componentDidMount() {
    pageView(window.location.pathname);
  }
  render() {
    return (
      <Container>
        <Title center t="50px">
          Action Plan
        </Title>
        <P>
          Now that we have given you some advice about your case, and prepared a letter for you to send to the defendant
          or their insurer the next steps are to:
        </P>
        <List.OrderedList>
          <List.Item>send the letter.</List.Item>
          <List.Item>
            find out what your case is worth (<Link
              id="post triage tool valuer"
              name="pre-valuer-tool"
              onClick={e => handleNavClick(e, this.props.history)}
            >
              get a valuation
            </Link>).
          </List.Item>
          <List.Item>chase the defendant for a response.</List.Item>
          <List.Item>get more evidence if they deny liability.</List.Item>
          <List.Item>consider settling your case if they admit liability.</List.Item>
        </List.OrderedList>
        <P b="50px">
          Alternatively, if you would like to get some further advice from a solicitor or if you have any queries, free
          to drop us an email at info@litem.co.uk.
        </P>
      </Container>
    );
  }
}
export default PostLetter;
