import styled from 'styled-components';
import { Button } from 'styled-button-component';
import { Dropdown, DropdownItem, DropdownMenu } from 'styled-dropdown-component';

export const CustomDropdown = styled(Dropdown)`
  max-width: 98vw;
  margin-left: auto;
  margin-right: auto;
  line-height: 2em;
  font-family: 'Quicksand';
`;

export const CustomDropdownButton = styled(Button)`
  max-width: 98vw;
  min-width: 400px;
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

export const CustomDropdownMenu = styled(DropdownMenu)`
  width: 92%;
  margin-left: 4%;
  border: none;
`;

export const CustomDropdownItem = styled(DropdownItem)`
  border-bottom: 1px solid lightgrey;
  white-space: normal;
  word-break: break-word;
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

/*position: fixed;
left: 10px;
bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: bottom;*/
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
