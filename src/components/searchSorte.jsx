import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'

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

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Sort
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => toggleSortPoster(OLDER)}>Most Older</MenuItem>
        <hr />
        <MenuItem onClick={() => toggleSortPoster(RECENT)}>Most Recent</MenuItem>
      </Menu>
    </div>
  );
}
