import * as React from "react";
import dynamic from 'next/dynamic'
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import useSignUpStore from "../hooks/useSignupStore";
import { Stack } from "@mui/material";
const CreateAccount = dynamic(()=>import("./CreateAccount"))
const CompleteProfile = dynamic(()=>import("./CompleteProfile"))
const NextSteps = dynamic(()=>import("./NextSteps"))

export default function Singup() {
  const [steps, activeStep, setActiveStep] = useSignUpStore((state) => [
    state.steps,
    state.activeStep,
    state.setActiveStep,
  ]);

  return (
    <Stack justifyContent={"center"} alignItems={"center"} padding={3}>
      <Stack minWidth={"600px"} padding={2} gap={8}>
        <Stepper alternativeLabel>
          {steps.map((step, idx) => (
            <Step
              key={step.label}
              completed={activeStep > idx}
              active={activeStep === idx}
            >
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && <CreateAccount />}
        {activeStep === 1 && <CompleteProfile />}
        {activeStep === 2 && <NextSteps />}
      </Stack>
    </Stack>
  );
}
