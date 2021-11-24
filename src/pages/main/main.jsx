import React, { useState } from 'react'
import PosterCard from '../../components/posterCard'
import Search from '../../components/search'
import {
  Container,
  Menu,
  Title,
  ButtonLoadMore,
  Rocket,
  Body
} from './style'
import SearchSort from '../../components/searchSorte'
import ModalPoster from '../../components/modal'

export default function Main() {
  const InitialNumberPosters = 10
  const [flightNewsPoster, setFlightNewsPoster] = useState([])
  const [numberFlightNewsPoster, setNumberFlightNewsPoster] = useState(InitialNumberPosters)
  const [orderResults, setOrderResults] = useState('DESC')

  document.title = "Space Flight News"

  const renderFlightNewsPoster = (newsPoster) => {
    if(!Object.keys(newsPoster).length) return

    return newsPoster.map((poster, idx) => {
      return (
        <Body key={poster.id}>
          <PosterCard
            newsCardData={poster}        
            leftImage={idx % 2 === 0}
          >
            <ModalPoster>
              <PosterCard
                newsCardData={poster}
                leftImage={idx % 2 === 0}
                ismodal
              />
            </ModalPoster>
          </PosterCard>
        </Body>
      )
    })
  }

  return (
    <>
      <Menu>
        <Search 
          numberFlightNewsPoster={numberFlightNewsPoster}
          setFlightNewsPoster={setFlightNewsPoster}
          setNumberFlightNewsPoster={setNumberFlightNewsPoster}
          flightNewsPoster={flightNewsPoster}
          orderResults={orderResults}
        />
        <SearchSort orderResults={orderResults} setOrderResults={setOrderResults} />
      </Menu>
      <Rocket />
      <Container>
        <Title>Space Flight News</Title>
        { renderFlightNewsPoster(flightNewsPoster) }
        <ButtonLoadMore onClick={() => setNumberFlightNewsPoster(numberFlightNewsPoster + 10)}>Carregar Mais</ButtonLoadMore>
      </Container>
  </>
  )
}