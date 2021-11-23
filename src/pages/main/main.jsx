import React, { useState } from 'react'
import PosterCard from '../../components/posterCard'
import Search from '../../components/search'
import {
  Container,
  Menu,
  Title,
  ButtonLoadMore,
  Rocket
} from './style'
import SearchSort from '../../components/searchSorte'

export default function Main() {
  const InitialNumberPosters = 10
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
        { renderFlightNewsPoster(flightNewsPoster) }
        <ButtonLoadMore onClick={() => setNumberFlightNewsPoster(numberFlightNewsPoster + 10)}>Carregar Mais</ButtonLoadMore>
      </Container>
  </>
  )
}