import React from 'react';

import Tone from '../Tone';


import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
}));
  
function getSteps() {
    return ['Sign up or sign in', 'Enter some text in Tone Analyzer', 'See the emotion!'];
}
  
function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Create your account. This will allow you to use the service';
      case 1:
        return 'Emotional intelligence is very important and a hard skill to have. Start entering some text under the Tone Analyzer and see how others may perceive it.';
      case 2:
        return `Try out different ad text to see what emotion a text can bring.`;
      default:
        return 'Unknown step';
    }
}


const Demo = () => {
    // const classes = useStyles();
    // const [activeStep, setActiveStep] = React.useState(0);
    // const steps = getSteps();

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    return(
        <div className='demo'>
          <div>
            <h1>About Speech Audit</h1>
            <p>Helping others to understand tone.</p>
          </div>
          <div>
            <p>
              Tone is the general character or attitude of a place, piece of writting, situation, etc and can helps clarifies and conveys meaning. Similar to putting ones best foot foward, understanding your tone or someone else can affect how people perceive you. Speech Audit's mission is to help other understand tone. 
            </p>
            <blockquote>
              "10% of conflict is due to difference of opinion and 90% is due to delivery and tone of voice."
            </blockquote>
          </div>
          {/* <div className={classes.root}>
              <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                  <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                          <Typography>{getStepContent(index)}</Typography>
                          <div className={classes.actionsContainer}>
                              <div>
                                  <Button
                                  disabled={activeStep === 0}
                                  onClick={handleBack}
                                  className={classes.button}
                                  >
                                  Back
                                  </Button>
                                  <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={handleNext}
                                  className={classes.button}
                                  >
                                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                  </Button>
                              </div>
                          </div>
                      </StepContent>
                  </Step>
              ))}
              </Stepper>
              {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography>All steps completed - you&apos;re finished</Typography>
                  <Button onClick={handleReset} className={classes.button}>
                  Reset
                  </Button>
              </Paper>
        )}
        </div> */}
      <div>
        <Tone/>
      </div>
    </div>
    )
}

export default Demo;
