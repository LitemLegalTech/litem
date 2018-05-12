import React from 'react';
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
            position: 'fixed',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0)'
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
