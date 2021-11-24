import styled from 'styled-components';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import rocketImg from '../../images/rocket2.webp';

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  flex-wrap: wrap;
  align-items: flex-start;
  background-color: #FBFBFB;
  box-shadow: 1px 1px 4px rgba(0,0,0,.5);
  padding: 25px 10px;
  
  flex-direction: ${props => {
    if (props.leftImage)
      return 'row'
    return 'row-reverse';
  }};
  
  margin-bottom: ${props => {
    if (!props.ismodal) return '50px'
  }};

  @media(min-width: 800px) {
    padding: 80px 50px;
  }

  @media(max-width: 1114px) {
    width: 90%;
    align-items: center;
  }
`;

export const CardImage = styled.div`
  background-image: url(
    ${props => { return props.srcImage} }
  ), url(${rocketImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 242px;
  height: 192px;

  @media(max-width: ${props => {
    if(props.ismodal) return '1784px'
    return '1114px'
  }}) {
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CardInformation = styled.div`
  width: 500px;
  min-height: 192px;
  font-family: 'Roboto Condensed Regular';
  padding-left: 10px;
  padding-right: 10px;

  @media(min-width: 800px) {
    margin: ${props => {
      if (props.leftImage)
        return 'auto auto auto 30px'
      return 'auto 30px auto auto';
    }};
  }

  @media(max-width: 1114px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const CardTitle = styled.h2`
  font-family: 'Roboto Condensed Bold';
  font-size: 22px;
  margin-top: 0px;
  margin-bottom: 10px;

  @media(max-width: 1114px) {
    font-size: 20px;
    margin-top:15px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  font-size: 13px;
`;

export const ButtonNewsSite = styled(Link)`
  color: #1E2022 !important;
  background-color: #fff;
  border: 1px solid #1E2022 !important;
  padding: 5px 30px;
  transition: .4s;

  &:hover {
    background-color: #302E5E;
    text-shadow: 1px 1px 1px #1E2022;
    color: #FFF !important;
  }
`;

export const CardSummary = styled.div`
  line-height: 26px;
`;

export const ButtonGoToSite = styled(Button)`
  border: solid 1px #D07017 !important;
  color: #FFF !important;
  text-shadow: 1px 1px 1px #1E2022;
  font-weight: normal !important;
  transition: .4s;
  margin-top: 15px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  background-color: #D07017 !important;
  display: ${props => {
    if (!props.ismodal) return 'none !important';
  }};

  &:hover {
    background-color: #914D0E !important;
  }
`;