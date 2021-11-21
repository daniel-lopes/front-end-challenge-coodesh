import React, { useState } from 'react'
import PosterCard from './posterCard'
import Search from './search'
import { ButtonLoadMore } from './maincss'

export default function Main() {
  const [flightNewsPoster, setFlightNewsPoster] = useState({})
  const [numberFlightNewsPoster, setNumberFlightNewsPoster] = useState(1)

  const renderFlightNewsPoster = (newsPoster) => {
    if(!Object.keys(newsPoster).length) return

    return newsPoster.map(poster => {
      return (
        <PosterCard newsCardData={poster} />
      )
    })
  }

  return (
    <div>
      Space Flight News
      <Search 
        numberFlightNewsPoster={numberFlightNewsPoster}
        setFlightNewsPoster={setFlightNewsPoster}
      />
      { renderFlightNewsPoster(flightNewsPoster) }
      <ButtonLoadMore onClick={() => setNumberFlightNewsPoster(numberFlightNewsPoster + 1)}>Ver Mais</ButtonLoadMore>
    </div>
  )
}