import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 2200px;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: ${props => {
    if (props.leftImage)
      return 'row'
    return 'row-reverse';
  }};
`;

export const CardInformation = styled.div`
  max-width: 500px;
`;

export const CardTitle = styled.h3``;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardDate = styled.div``;

export const ButtonNewsSite = styled.button``;

export const CardSummary = styled.div`
  
`;