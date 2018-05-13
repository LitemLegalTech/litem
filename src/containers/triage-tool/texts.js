import React from 'react';
import DOMPurify from 'dompurify';
import Header from './../../components/styled-components/header';
import Input from './../../components/styled-components/input';

const Texts = props => {
  console.log(props.value);
  const title = { __html: DOMPurify.sanitize(props.q.title) };
  return (
    <React.Fragment>
      <Header center t="45px" b="30px" dangerouslySetInnerHTML={title} />
      <Input.Input type="text" value={props.value} onChange={e => props.callback(e.target.value, props.q.nxtQId)} />
    </React.Fragment>
  );
};
export default Texts;
