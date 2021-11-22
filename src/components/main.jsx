import React, { useState } from 'react'
import PosterCard from './posterCard'
import Search from './search'
import {
  Container,
  Menu,
  Title,
  ButtonLoadMore,
  Rocket,
  HorizontalBar
} from './maincss'
import SearchSort from './searchSorte'

export default function Main() {
  const InitialNumberPosters = 2
  const [flightNewsPoster, setFlightNewsPoster] = useState([])
  const [numberFlightNewsPoster, setNumberFlightNewsPoster] = useState(InitialNumberPosters)
  document.title = "Space Flight News"

  const renderFlightNewsPoster = (newsPoster) => {
    if(!Object.keys(newsPoster).length) return

    return newsPoster.map((poster, idx) => {
      return (
        <PosterCard
          newsCardData={poster}
          key={idx}
          leftImage={idx % 2 === 0}
        />
      )
    })
  }

  console.log(flightNewsPoster)

  return (
    <>
      <Menu>
        <Search 
          numberFlightNewsPoster={numberFlightNewsPoster}
          setFlightNewsPoster={setFlightNewsPoster}
          setNumberFlightNewsPoster={setNumberFlightNewsPoster}
          flightNewsPoster={flightNewsPoster}
        />
        <SearchSort flightNewsPoster={flightNewsPoster} setFlightNewsPoster={setFlightNewsPoster} />
      </Menu>
      <Rocket />
      <Container>
        <Title>Space Flight News</Title>
        <HorizontalBar />
        { renderFlightNewsPoster(flightNewsPoster) }
        <ButtonLoadMore onClick={() => setNumberFlightNewsPoster(numberFlightNewsPoster + 1)}>Carregar Mais</ButtonLoadMore>
      </Container>
  </>
  )
}