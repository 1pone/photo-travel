import React, { FC } from 'react'

import { ChooseUserPhoto, GeneratePhoto, PageWrapper } from '../../components'
import ScenicSpot from './ScenicSpot'

const Create: FC = () => {
  const [step, setStep] = React.useState<number>(0)
  const [city, setCity] = React.useState('left')

  return (
    <PageWrapper>
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
