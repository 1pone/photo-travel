import ShareIcon from '@mui/icons-material/Share'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'
import React, { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ReactComponent as MemberBgSVG } from '../../assets/Member_bg.svg'
import { BottomPrimaryButton, PageWrapper } from '../../components'

const Detail: FC = () => {
  const nav = useNavigate()
  const { ptId } = useParams()

  const [open, setOpen] = React.useState(false)
  const [memberList, setMemberList] = React.useState<
    {
      userName: string // 成员 userName
      timestamp: number // 加入时间
    }[]
  >([
    {
      userName: '小红',
      timestamp: 1684927026161
    },
    {
      userName: 'Hindi',
      timestamp: 1684927037161
    },
    {
      userName: '阿沅',
      timestamp: 1684927226161
    }
  ])

  return (
    <PageWrapper>
      <Box>
        <Typography variant={'button'} color='white' sx={{ mt: 1 }}>
          你已经拥有 {10} 个小伙伴了
        </Typography>
        <Button
          disableElevation
          size='small'
          variant='contained'
          onClick={() => setOpen(true)}
          sx={{ ml: 2, color: '#eee' }}
        >
          查看伙伴
        </Button>
      </Box>

      <Box>
        <img
          src={'/images/generatedPhoto.png'}
          alt='generatedPhoto'
          style={{ width: '100%', borderRadius: '24px', padding: '8px' }}
        />
        <img
          src={'/images/generatedPhoto.png'}
          alt='generatedPhoto'
          style={{ width: '100%', borderRadius: '24px', padding: '8px' }}
        />
      </Box>

      <BottomPrimaryButton
        title='继续邀请'
        endIcon={<ShareIcon />}
        // onClick={}
        secondaryButtonProps={{ title: '发起新的旅行', onClick: () => nav('/create') }}
      />

      <Drawer
        anchor={'bottom'}
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '.MuiPaper-root': {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant='h6'>我们的伙伴们</Typography>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {memberList.map((member, index) => (
              <>
                {!!index && <Divider />}
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>{member.userName[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={member.userName} secondary={new Date(member.timestamp).toLocaleString()} />
                </ListItem>
              </>
            ))}
          </List>
        </Box>

        <MemberBgSVG style={{ width: '100%' }} />
      </Drawer>
    </PageWrapper>
  )
}

export default Detail
