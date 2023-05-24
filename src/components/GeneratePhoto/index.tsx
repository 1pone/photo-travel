import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import CheckIcon from '@mui/icons-material/Check'
import ReplayIcon from '@mui/icons-material/Replay'
import ShareIcon from '@mui/icons-material/Share'
import { Box, Button, Modal, Typography } from '@mui/material'
import { QRCodeSVG } from 'qrcode.react'
import React, { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { ReactComponent as BoySVG } from '../../assets/Group_8023.svg'
import BottomActionWrapper from '../BottomActionWrapper'
import { BottomPrimaryButton } from '../index'
const GeneratePhoto: FC = () => {
  const [open, setOpen] = React.useState(0) // 0: close, 1: photo, 2: share
  const [modalImgUrl, setModalImgUrl] = React.useState('/images/generatedPhoto.png')
  const [imgUrlList, setImgUrlList] = React.useState([
    '/images/generatedPhoto.png',
    '/images/generatedPhoto.png',
    '/images/generatedPhoto.png'
  ])

  return (
    <>
      <Box sx={{ mt: '30%' }}>
        <Typography variant={'button'} color='white' sx={{ mt: 1 }}>
          请选择一张照片
        </Typography>

        <Carousel
          centerMode
          showArrows
          showIndicators
          swipeable
          emulateTouch
          showStatus={false}
          showThumbs={false}
          centerSlidePercentage={85}
          onChange={index => {
            console.log(index)
          }}
        >
          {imgUrlList.map((url, index) => (
            <div
              key={index}
              onClick={() => {
                setModalImgUrl(url)
                setOpen(1)
              }}
            >
              <img src={url} alt='generatedPhoto' style={{ width: '100%', borderRadius: '24px', padding: '8px' }} />
            </div>
          ))}
        </Carousel>

        <Box textAlign={'center'}>
          <Button disableElevation size='small' variant='contained' startIcon={<ReplayIcon />} sx={{ mt: 1 }}>
            重新生成
          </Button>
        </Box>
      </Box>

      <BottomPrimaryButton title='分 享' endIcon={<ShareIcon />} onClick={() => setOpen(2)} />

      <Modal
        open={!!open}
        onClose={() => setOpen(0)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          {open === 2 && (
            <>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                图片旅行
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                我发起了一场图片旅行，快来加入吧！
              </Typography>
            </>
          )}

          <img src={modalImgUrl} alt='generatedPhoto' style={{ width: '100%', borderRadius: '24px', padding: '8px' }} />

          {open === 2 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <BoySVG style={{ width: '60%', height: '120px', margin: '-24px' }} />
              <QRCodeSVG value='https://reactjs.org/' width={64} height={64} style={{ margin: '8px' }} />
            </Box>
          )}
        </Box>
      </Modal>
    </>
  )
}

export default GeneratePhoto
