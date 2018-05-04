import styled from 'styled-components';

const BtnScrollDown = styled.button`
  position: fixed;
  bottom: 10px;
  left: 48%;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
  &:before {
    content: '⮟';
    font-size: 2rem;
    color: black;
    opacity: 0.4;
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
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

export default BtnScrollDown;
