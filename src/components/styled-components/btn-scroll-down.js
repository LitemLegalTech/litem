import styled from 'styled-components';

const arrow1 = `
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 60px;
  height: 25px;
  width: 25px;
	border: 1px solid #3cc;
	border-width: 0 2px 2px 0;`;

const arrow2 = `
  position: fixed;
  bottom: 4px;
  left: 50%;
  margin-left: -20px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid #3cc
    }`;

const BtnScrollDown = styled.div`
  cursor: pointer;
  ${arrow1};
  animation: bounce 4s infinite;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) rotate(45deg);
      opacity: 0.9;
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
      opacity: 0.4;
    }
    60% {
      transform: translateY(-4px) rotate(45deg);
      opacity: 0.9;
    }
  }
`;

export default BtnScrollDown;
