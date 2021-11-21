import React from 'react'
import {
  Container,
  CardInformation,
  CardTitle,
  CardHeader,
  CardDate,
  ButtonNewsSite,
  CardSummary
} from './posterCardCss'

export default function PosterCard({ newsCardData }) {
  const formatDate = (date) => {
    if (!date) return
    const unformattedDate = new Date(date.substr(0, date.indexOf('T')))
    const formattedDate = unformattedDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    return formattedDate
  }

  console.log(newsCardData)

  return (
    <>
      { newsCardData &&
        <Container>
          <img src={newsCardData.imageUrl} width={300}/>
          <CardInformation>
            <CardTitle>
              { newsCardData.title }
            </CardTitle>
            <CardHeader>
              <CardDate>
                { formatDate(newsCardData.updatedAt) }
              </CardDate>
              <ButtonNewsSite>{ newsCardData.newsSite }</ButtonNewsSite>
            </CardHeader>
            <CardSummary>
              { newsCardData.summary }
            </CardSummary>
          </CardInformation>
        </Container>
      }
    </>
  )
}