import React, { useMemo, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Search({
  numberFlightNewsPoster,
  setFlightNewsPoster,
  setNumberFlightNewsPoster,
  flightNewsPoster,
  orderResults
}) {
  const [postSearchField, setPostSearchField] = useState('')
  const InitialNumberPosters = 10

  useMemo(() => {
    const baseUrl = `https://api.spaceflightnewsapi.net/v3/articles?_sort=id:${orderResults}&_limit=`
    let url
    let isSearchWithoutText = false
    if(postSearchField){
      url = `${baseUrl}${numberFlightNewsPoster}&title_contains=${postSearchField}`
    } else if (numberFlightNewsPoster - flightNewsPoster.length){
      url = `${baseUrl}${numberFlightNewsPoster - flightNewsPoster.length}&_start=${flightNewsPoster.length}`
      isSearchWithoutText = true
    } else {
      url = `${baseUrl}${numberFlightNewsPoster}`
    }

    async function fetchData() {
      const newsPoster = await fetch(url)
      if(isSearchWithoutText){
        let flightNewsPosterTemp = await newsPoster.json()
        setFlightNewsPoster(flightNewsPoster.concat(flightNewsPosterTemp))
      } else {
        setFlightNewsPoster(await newsPoster.json())
      }
    }
    fetchData()
  }, [numberFlightNewsPoster, postSearchField, setFlightNewsPoster, orderResults])

  return (
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350, height: 40 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquisar notícias de voos espaciais"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={e => {
          setPostSearchField(e.target.value)
          setNumberFlightNewsPoster(InitialNumberPosters)
        }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}