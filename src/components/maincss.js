import styled, { keyframes } from 'styled-components';
import rocketImg from '../images/foguete.png';

export const Container = styled.div`
  max-width: 80%;
  margin: 250px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Menu = styled.div`
  background-color: #1E2022;
  display: flex;
  justify-content: flex-end;
  height: 60px;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`

export const Rocket = styled.div`
  background-image: url(${rocketImg});
  background-size: 100px;
  width: 100px;
  height: 200px;
  position: absolute;
  background-repeat: no-repeat;
  animation-name: rocket-animation;
  animation-duration: 5s;
  animation-iteration-count: initial;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @keyframes rocket-animation {
    0% { top: ${window.screen.height}px; left: -10%; transform: rotate(0deg)}
    100% { top: 80px; left: 50%; transform: rotate(45deg)}
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto Condensed Regular';
  margin-bottom: 50px;
`;

export const HorizontalBar = styled.div`

`;

export const ButtonLoadMore = styled.button`
  
`