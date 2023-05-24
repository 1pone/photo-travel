import { Box } from '@mui/material'
import React, { FC } from 'react'

import { ReactComponent as GreetingSVG } from '../../assets/Greeting.svg'
import { ReactComponent as PlanetSVG } from '../../assets/Group_8024.svg'
import { ChooseUserPhoto, GeneratePhoto, PageWrapper } from '../../components'
import ScenicSpot from './ScenicSpot'

const Create: FC = () => {
  const [step, setStep] = React.useState<number>(0)
  const [city, setCity] = React.useState('left')

  return (
    <PageWrapper>
      <Box sx={{ py: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ pt: 4 }}>
          <GreetingSVG />
        </Box>
        <PlanetSVG />
      </Box>

      {step === 0 ? (
        <ScenicSpot value={city} onChange={setCity} onNext={() => setStep(step => step + 1)} />
      ) : step === 1 ? (
        <ChooseUserPhoto onNext={() => setStep(step => step + 1)} />
      ) : (
        <GeneratePhoto />
      )}
    </PageWrapper>
  )
}

export default Create
