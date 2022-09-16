import classes from './MainPage.module.css';
import React, {useState,useEffect,useHistory} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Basis from '../comps/Basis'
import Positiv from '../comps/Positiv'
import Negativ from '../comps/Negativ'



    const steps = ['', '', ''];
    const heading = ["Basisinformationen zum Projekt","Was ist positiv gelaufen?","Was ist negativ gelaufen? Welche Maßnahmen wurden ergriffen?"]
    
function MainPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
    return step === false;
    };

    const isStepSkipped = (step) => {
    return skipped.has(step);
    };

    const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
    });
    };

    const handleReset = () => {
    setActiveStep(0);
    };

    return (
    <div className={classes.container}> 

        {/** Top */}
        <div className={classes.top}>
            <div className={classes.heading}>
                {heading[activeStep]}
            </div>

            <div className={classes.stepper}>
                <Stepper activeStep={activeStep} >
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                    <Step key={label} {...stepProps}>
                        <StepLabel sx={{color:'red'}} {...labelProps}>{label}</StepLabel>
                    </Step>
                    );
                })}
                </Stepper>
            </div>
        </div>
            
        {/** Content */}
        <div className={classes.content}>
            {activeStep===0 && <Basis/>}
            {activeStep===1 && <Positiv/>}
            {activeStep===2 && <Negativ/>}
        </div>
            

        {/** Buttons */}
        <div className={classes.buttons}>
            <Button variant="contained" color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1, height: '40px',width:'150px' }} >
                Back
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />

            <Button variant="contained" onClick={handleNext} sx={{ mr: 1, height: '40px',width: '150px'}}>
                {activeStep  >= steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </div>
            
    
    </div>
    );
}

export default MainPage;