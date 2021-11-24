import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { ButtonSort, Line } from './style'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function SearchSort({ orderResults, setOrderResults }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const DESC = 'DESC'
  const ASC = 'ASC'

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const sortByMostRecent = () => {
    setOrderResults(DESC)
    handleClose()
  }

  const sortByOldest = () => {
    setOrderResults(ASC)
    handleClose()
  }

  const iconButtonSearchSort = order => {
    if(order === ASC)
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
        endIcon={iconButtonSearchSort(orderResults)}
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
        <MenuItem onClick={sortByOldest}>Mais Antigas <ArrowDropUpIcon /></MenuItem>
        <Line />
        <MenuItem onClick={sortByMostRecent}>Mais Recentes <ArrowDropDownIcon /></MenuItem>
      </Menu>
    </>
  );
}
