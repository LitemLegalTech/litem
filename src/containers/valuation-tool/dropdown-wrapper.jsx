import React from 'react';
import { CustomDropdownButton, CustomDropdown, CustomDropdownItem, CustomDropdownMenu } from './customized-components';

class DropdownWrapper extends React.Component {
  state = {
    hidden: false,
    label: `${this.props.q.placeholder ? this.props.q.placeholder : 'Please choose from the list'}`,
    answer: ''
  };

  handleOpenCloseDropdown = () => this.setState({ hidden: !this.state.hidden });

  handleClick = item => {
    this.setState({
      label: item.label,
      answer: item.id,
      hidden: !this.state.hidden
    });
    const answer = {
      question: this.props.q.id,
      answer: [{ id: item.id, value: item.id, label: item.label }],
      nxtQ: item.nxtQ
    };
    this.props.callback(answer);
    this.resetDropdown();
  };

  resetDropdown = () =>
    this.setState({
      hidden: false,
      label: `${this.props.q.placeholder ? this.props.q.placeholder : 'Please choose from the list'}`,
      answer: ''
    });

  render() {
    const hidden = this.state.hidden;
    const label = this.state.label;
    return (
      <CustomDropdown>
        <CustomDropdownButton lg dropdownToggle onClick={() => this.handleOpenCloseDropdown()}>
          {label}
        </CustomDropdownButton>
        <CustomDropdownMenu hidden={hidden}>
          {this.props.q.answers.map((item, key) => (
            <CustomDropdownItem key={key} onClick={() => this.handleClick(item)}>
              {item.label}
            </CustomDropdownItem>
          ))}
        </CustomDropdownMenu>
      </CustomDropdown>
    );
  }
}

export default DropdownWrapper;
