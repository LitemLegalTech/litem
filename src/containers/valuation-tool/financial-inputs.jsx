import React from 'react';
//import { Button } from 'styled-button-component';
import { CustomButton } from './customized-components';
import FinancialInput from './../../components/styled-components/financial-input';

class FinancialInputs extends React.Component {
  state = {};

  handleChange = e => {
    const val = e.target.value === undefined ? 0 : e.target.value.replace(/^0+(?!\.|$)/, '');
    this.setState({
      [e.target.id]: { id: e.target.id, value: val, label: e.target.name }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const answer = {
      question: this.props.q.id,
      answer: Object.values(this.state),
      nxtQ: this.props.q.answers[0].nxtQ
    };
    this.props.callback(answer);
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        {this.props.q.answers.map((item, index) => (
          <React.Fragment key={index}>
            <FinancialInput.Label htmlFor={item.qId}>{item.title}</FinancialInput.Label>
            <FinancialInput.Input
              type="number"
              id={item.id}
              name={item.title}
              required
              onChange={e => this.handleChange(e)}
            />
            <span />
          </React.Fragment>
        ))}
        <CustomButton type="submit">submit</CustomButton>
        <div style={{ paddingBottom: '70px' }} />
      </form>
    );
  }
}
export default FinancialInputs;
