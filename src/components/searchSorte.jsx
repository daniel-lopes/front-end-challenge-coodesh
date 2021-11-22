import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { ButtonSort } from './searchSorteCss'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function SearchSort({ flightNewsPoster, setFlightNewsPoster }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [posterOrder, setPosterOrder] = React.useState('RECENT')
  const RECENT = 'RECENT'
  const OLDER = 'OLDER'

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const toggleSortPoster = sort => {
    const newsPoster = [...flightNewsPoster]
    if((posterOrder === RECENT) && (sort === OLDER)){
      setPosterOrder(OLDER)
      setFlightNewsPoster(newsPoster.reverse())
    } else if(posterOrder === OLDER && sort === RECENT){
      setPosterOrder(RECENT)
      setFlightNewsPoster(newsPoster.reverse())
    }
    handleClose()
  }

  const iconButtonSearchSort = order => {
    if(order === OLDER)
      return <ArrowDropUpIcon />
    return <ArrowDropDownIcon />
  }

  return (
    <>
      <ButtonSort
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={iconButtonSearchSort(posterOrder)}
      >
        ordenar
      </ButtonSort>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        style={{marginTop: 15}}
      >
        <MenuItem onClick={() => toggleSortPoster(OLDER)}>Mais antigas <ArrowDropUpIcon /></MenuItem>
        <hr />
        <MenuItem onClick={() => toggleSortPoster(RECENT)}>Mais recentes <ArrowDropDownIcon /></MenuItem>
      </Menu>
    </>
  );
}
