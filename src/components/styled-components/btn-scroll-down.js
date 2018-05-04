import styled from 'styled-components';
//content: '\\2B9F';

const BtnScrollDown = styled.button`
  position: fixed;
  bottom: 10px;
  left: 50%;
  margin-left: -26px;
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  &:after {
    content: '';
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid black;
    opacity: 0.3;
  }

  animation: bounce 5s infinite;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-7px);
    }
  }
`;

export default BtnScrollDown;
