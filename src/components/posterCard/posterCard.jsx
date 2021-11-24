import React from 'react'
import {
  Container,
  CardImage,
  CardInformation,
  CardTitle,
  CardHeader,
  CardDate,
  ButtonNewsSite,
  CardSummary,
  ButtonGoToSite
} from './style'

export default function PosterCard({
  newsCardData,
  leftImage,
  children,
  ismodal
}) {
  const formatDate = (date) => {
    if (!date) return
    const unformattedDate = new Date(date.substr(0, date.indexOf('T')))
    const formattedDate = unformattedDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    return formattedDate
  }
  
  return (
    <>
      { newsCardData &&
        <Container leftImage={leftImage} ismodal={ismodal}>
          <CardImage srcImage={newsCardData.imageUrl} ismodal={ismodal}/>
          <CardInformation leftImage={leftImage}>
            <CardTitle>
              { newsCardData.title }
            </CardTitle>
            <CardHeader>
              <CardDate>
                { formatDate(newsCardData.updatedAt) }
              </CardDate>
              <ButtonNewsSite 
                underline="none"
                target="_blank"
                rel="noopener"
                href={newsCardData.url}
              >
                { newsCardData.newsSite }
              </ButtonNewsSite>
            </CardHeader>
            <CardSummary>
              { newsCardData.summary }
            </CardSummary>
            <ButtonGoToSite
              underline="none"
              target="_blank"
              rel="noopener"
              href={newsCardData.url}
              ismodal={ismodal}
            >
              Ir para o site
            </ButtonGoToSite>
            { children }
          </CardInformation>
        </Container>
      }
    </>
  )
}