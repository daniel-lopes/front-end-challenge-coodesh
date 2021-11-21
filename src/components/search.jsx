import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Search({numberFlightNewsPoster, setFlightNewsPoster}) {

  useEffect(() => {
    async function fetchData() {
      const flightNewsPoster = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${numberFlightNewsPoster}`)
      setFlightNewsPoster(await flightNewsPoster.json())
    }
    fetchData()
  }, [numberFlightNewsPoster])

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Space Flight News"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}