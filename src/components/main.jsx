import React, { useState } from 'react'
import PosterCard from './posterCard'
import Search from './search'
import { ButtonLoadMore } from './maincss'
import SearchSort from './searchSorte'

export default function Main() {
  const InitialNumberPosters = 2
  const [flightNewsPoster, setFlightNewsPoster] = useState([])
  const [numberFlightNewsPoster, setNumberFlightNewsPoster] = useState(InitialNumberPosters)

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

  return (
    <div>
      Space Flight News
      <Search 
        numberFlightNewsPoster={numberFlightNewsPoster}
        setFlightNewsPoster={setFlightNewsPoster}
        setNumberFlightNewsPoster={setNumberFlightNewsPoster}
        flightNewsPoster={flightNewsPoster}
      />
      <SearchSort flightNewsPoster={flightNewsPoster} setFlightNewsPoster={setFlightNewsPoster} />
      { renderFlightNewsPoster(flightNewsPoster) }
      <ButtonLoadMore onClick={() => setNumberFlightNewsPoster(numberFlightNewsPoster + 1)}>Ver Mais</ButtonLoadMore>
    </div>
  )
}