import React, { useEffect } from 'react'
import {
    Box,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
  } from '@chakra-ui/react'
  import styles from 'pages/auth/patientForm/patientForm.module.css'
const MyStepper = (props) => {
    const {page} = props
    const steps = [
        { title: 'Contact Info' },
        { title: 'Medical Report'  },
        { title: 'Location Access' },
      ]
      const { activeStep, setActiveStep } = useSteps({
        index: page,
        count: steps.length,
      })
      useEffect(()=> {
        
        // console.log("activeStep: ",activeStep)
        // console.log("page: ",page)
        setActiveStep(page+1);
      },[page])
  return (
    <>
    

      <Stepper size='md' index={page}  colorScheme='teal' >
      {steps.map((step, index) => (
        <Step key={index} >
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
    
    </>
  )
}

export default MyStepper
