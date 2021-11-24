import styled from 'styled-components';
import rocketImg from '../../images/rocket.png';
import Button from '@mui/material/Button'

export const Container = styled.div`
  max-width: 80%;
  margin: 230px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  overflow: hidden;

  @media(max-width: 1114px) {
    min-width: 100%;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
`;

export const Menu = styled.div`
  background-color: #1E2022;
  display: flex;
  justify-content: flex-end;
  height: 60px;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  overflow: hidden;
`

export const Rocket = styled.div`
  background-image: url(${rocketImg});
  background-size: 100px;
  width: 100px;
  height: 200px;
  position: absolute;
  background-repeat: no-repeat;
  animation-name: rocket-animation;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;

  @keyframes rocket-animation {
    0% { top: 250px; left: 30%; transform: rotate(45deg)}
    100% { top: 90px; left: calc(50% - 40px); transform: rotate(45deg)}
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto Condensed Regular';
  margin-bottom: 80px;
`;

export const ButtonLoadMore = styled(Button)`
  color: #1E2022 !important;
  padding: 5px 30px !important;
  background-color: #302E5E !important;
  text-shadow: 1px 1px 1px #1E2022;
  color: #FFF !important;
  transition: .4s;

  &:hover {
    background-color: #1C1B3C !important;
  }
`;