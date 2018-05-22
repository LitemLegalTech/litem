import React from 'react';
import { CustomNavigationWrapper, CustomBottomButton } from './customized-components';

class Navigation extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <CustomNavigationWrapper>
          {this.props.navItems.map((item, key) => (
            <CustomBottomButton key={key} onClick={() => this.props.callback({ item })}>
              {item}
            </CustomBottomButton>
          ))}
        </CustomNavigationWrapper>
      </React.Fragment>
    );
  }
}
export default Navigation;
