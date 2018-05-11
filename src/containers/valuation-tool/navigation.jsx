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
            alignItems: 'flex-end',
            marginTop: 'auto',
            marginBottom: '50px'
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
