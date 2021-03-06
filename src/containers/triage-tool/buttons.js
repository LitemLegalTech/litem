import React from 'react';
import { observer, inject } from 'mobx-react';
import DOMPurify from 'dompurify';
import { clicked } from './../../services/ga-helpers';

import Header from './../../components/styled-components/header';
import Btn from './../../components/styled-components/btn';
import BtnGroup from './../../components/styled-components/btn-group';

const Buttons = inject('RootStore')(
  observer(props => {
    const title = { __html: DOMPurify.sanitize(props.q.title) };
    return (
      <BtnGroup>
        <Header center t="45px" b="30px" dangerouslySetInnerHTML={title} />
        {props.q.btnvalues.map((item, i) => {
          return (
            <Btn
              b="15px"
              key={i}
              type="submit"
              onClick={() => {
                props.callback(item.ansId, item.nxtQId);
                clicked(`triage-tool next on ${props.q.qId}`);
              }}
            >
              {item.ansLabel}
            </Btn>
          );
        })}
      </BtnGroup>
    );
  })
);
export default Buttons;
