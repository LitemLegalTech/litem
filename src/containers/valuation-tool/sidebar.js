import React from 'react';
import styled from 'styled-components';
import P from './../../components/styled-components/p';

const Menu = styled.nav`
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;
  height: 100%;
  transition: width 0.2s;
  width: ${props => (props.open ? '25%' : '0')};
  background-color: ${props => props.theme.colors.color3};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-around;
  padding-top: 50px;
  & p {
    transition: opacity 0.4s;
    opacity: ${props => (props.open ? '1' : '0')};
    color: white;
  }
`;

const Sidebar = props => {
  return (
    <React.Fragment>
      <Menu open={props.open} onClick={props.callback}>
        {props.lastQs.map((item, key) => <P key={key}>{item.answer[0].label}</P>)}
      </Menu>
    </React.Fragment>
  );
};

export default Sidebar;
