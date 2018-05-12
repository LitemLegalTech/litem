import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import { clicked } from './../../services/ga-helpers';

import Header from './../../components/styled-components/header';
import {
  DropdownGroup,
  DropdownTitle,
  DropdownMenu,
  DropdownItem
} from './../../components/styled-components/dropdown';

class Dropdowns extends Component {
  state = {
    dropdownOpen: false,
    selected: 'please choose an option.',
    resetDropdown: this.props.resetDropdown
  };

  onDropdownClick = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  render() {
    const title = { __html: DOMPurify.sanitize(this.props.q.title) };
    if (this.props.resetDropdown !== this.state.resetDropdown && this.state.selected !== 'please choose an option.')
      this.setState({
        resetDropdown: !this.state.resetDropdown,
        selected: 'please choose an option.'
      });
    return (
      <React.Fragment>
        <Header center t="45px" b="10px" dangerouslySetInnerHTML={title} />
        <DropdownGroup>
          <DropdownTitle onClick={this.onDropdownClick}>{this.state.selected}</DropdownTitle>
          <DropdownMenu dropdownOpen={this.state.dropdownOpen} onClick={this.onDropdownClick}>
            {this.props.q.btnvalues.map((item, i) => {
              return (
                <DropdownItem
                  key={i}
                  onClick={() => {
                    this.props.callback(item.ansId, item.nxtQId);
                    this.setState({ selected: item.ansLabel });
                    clicked(`triage-tool next on ${this.props.q.qId}`);
                  }}
                >
                  {item.ansLabel}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </DropdownGroup>
      </React.Fragment>
    );
  }
}
export default Dropdowns;
