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
  ButtonViewMore,
} from './style'
import ModalPoster from '../modal'

export default function PosterCard({ newsCardData, leftImage }) {
  const formatDate = (date) => {
    if (!date) return
    const unformattedDate = new Date(date.substr(0, date.indexOf('T')))
    const formattedDate = unformattedDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    return formattedDate
  }

  return (
    <>
      <ModalPoster />
      { newsCardData &&
        <Container leftImage={leftImage}>
          
          <CardImage srcImage={newsCardData.imageUrl} width={300}/>
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
                rel="noreferrer"
                href={newsCardData.url}
              >
                { newsCardData.newsSite }
              </ButtonNewsSite>
            </CardHeader>
            <CardSummary>
              { newsCardData.summary }
            </CardSummary>
            <ButtonViewMore>Ver Mais</ButtonViewMore>
          </CardInformation>
        </Container>
      }
    </>
  )
}