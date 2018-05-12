import React from 'react';
import Header from './../../components/styled-components/header';
import FinancialInput from './../../components/styled-components/financial-input';

const FinancialInputs = props => {
  const handleChange = e => {
    const val = e.target.value === undefined ? 0 : e.target.value.replace(/^0+(?!\.|$)/, '');
    props.callback(e.target.name, val, props.q.nxtQId);
  };
  return (
    <React.Fragment>
      <Header center t="45px" b="10px">
        Please detail your finacial losses
      </Header>
      {props.q.inputs.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <FinancialInput.Label htmlFor={item.qId}>{item.title}</FinancialInput.Label>
            <FinancialInput.Input
              type="number"
              id={item.qId}
              name={`value${index + 1}`}
              required
              onChange={e => {
                handleChange(e);
              }}
            />
            <span />
          </React.Fragment>
        );
      })}
      <div style={{ paddingBottom: '70px' }} />
    </React.Fragment>
  );
};
export default FinancialInputs;
