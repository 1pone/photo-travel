import React, { FC } from 'react'

import { ChooseUserPhoto, GeneratePhoto, PageWrapper } from '../../components'
import TargetTravel from './TargetTravel'

const Join: FC = () => {
  const [step, setStep] = React.useState<number>(0)

  return (
    <PageWrapper>
      {step === 0 ? (
        <TargetTravel ptId={'xxx'} onNext={() => setStep(step => step + 1)} />
      ) : step === 1 ? (
        <ChooseUserPhoto onNext={() => setStep(step => step + 1)} />
      ) : (
        <GeneratePhoto />
      )}
    </PageWrapper>
  )
}

export default Join
