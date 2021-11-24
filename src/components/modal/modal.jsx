import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import ButtonViewMore from './style'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function ModalPoster(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonViewMore onClick={handleOpen}>Ver Mais</ButtonViewMore>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.children}
        </Box>
      </Modal>
    </>
  );
}