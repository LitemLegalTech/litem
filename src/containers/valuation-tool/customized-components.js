import styled from 'styled-components';
import { Button } from 'styled-button-component';
import { Dropdown, DropdownItem, DropdownMenu } from 'styled-dropdown-component';

export const CustomDropdown = styled(Dropdown)`
  display: inline-block;
  max-width: 98vw;
  margin-left: auto;
  margin-right: auto;
  line-height: 2em;
  font-family: 'Quicksand';
`;

export const CustomDropdownButton = styled(Button)`
  max-width: 98vw;
  min-width: 350px;
  border-radius: 50px;
  background-color: rgba(252, 207, 77, 0.4);
  padding-left: 25px;
  padding-right: 25px;
  white-space: normal;
  word-break: break-word;
  border: none;
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export const CustomDropdownMenu = styled(DropdownMenu)`
  display: inline-block;
  z-index: auto;
  width: 92%;
  margin-left: 4%;
  border: none;
`;

export const CustomDropdownItem = styled(DropdownItem)`
  border-bottom: 1px solid lightgrey;
  white-space: normal;
  word-break: break-word;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const CustomButton = styled(Button)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-top: 20px;
  max-width: 100%;
  min-width: 200px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.color2};
  padding-left: 25px;
  padding-right: 25px;
  white-space: normal;
  word-break: break-word;
  border: none;
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export const CustomBottomButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.color2};
  border: none;
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export const BtnPop = styled.div`
  position: relative;
  top: -10px;
  line-height: 0.9rem;
  display: inline-block;
  &:after {
    content: '?';
    margin: auto;
    display: inline-block;
    text-align: center;
    border: 1px solid ${props => props.theme.colors.color1};
    color: ${props => props.theme.colors.color1};
    border-radius: 100%;
    width: 0.9rem;
    height: 0.9rem;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;
