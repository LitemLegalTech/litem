import styled from 'styled-components';
//content: '\\2B9F';

const BtnScrollDown = styled.div`
  position: fixed;
  bottom: 4px;
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
    border-top: 20px solid ${props => props.theme.colors.color1};
  }

  animation: bounce 4s infinite;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 0.9;
    }
    40% {
      transform: translateY(-10px);
      opacity: 0.4;
    }
    60% {
      transform: translateY(-4px);
      opacity: 0.9;
    }
  }
`;

export default BtnScrollDown;
