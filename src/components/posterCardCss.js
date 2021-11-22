import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: ${props => {
    if (props.leftImage)
      return 'row'
    return 'row-reverse';
  }};
  margin-bottom: 50px;
  background-color: #FBFBFB;
  box-shadow: 1px 1px 4px rgba(0,0,0,.5);
`;

export const CardInformation = styled.div`
  max-width: 500px;
  font-family: 'Roboto Condensed Regular';
`;

export const CardTitle = styled.h2`
  font-family: 'Roboto Condensed Bold';
  font-size: 22px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardDate = styled.div``;

export const ButtonNewsSite = styled.button``;

export const ButtonViewMore = styled.button``;

export const CardSummary = styled.div`
  
`;