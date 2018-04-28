import React from 'react';
//import { Button } from 'styled-button-component';
import { CustomBottomButton } from './customized-components';

class Navigation extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: 'inline-flex',
            justifyContent: 'space-between',
            marginTop: 'auto',
            marginBottom: '10px'
          }}
        >
          {this.props.navItems.map((item, key) => (
            <CustomBottomButton key={key} onClick={() => this.props.callback({ item })}>
              {item}
            </CustomBottomButton>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Navigation;
