import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserNo from './components/UserNo';
import CUsage from './components/CorprateUsage'

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    fontWeight: 'bold',
  },
  bg: {
    background: 'transparent',
    padding: 0,
  },
  bandwidth:{
    fontSize: '6rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: '10rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '9rem'
    },
  }
});

function getSteps() {
  return ['Number of People in Corpration', 'Corpration User Usage'];
}

function getStepContent(step, state, handleChange, calculateBandwidth, setNumberUser, props) {
  switch (step) {
    case 0:
      return <UserNo {...{handleChange, props, state, setNumberUser}} tag="Company" />;
    case 1:
      return <CUsage {...{handleChange, state, calculateBandwidth}}/>;
    default:
      return 'Unknown step';
  }
}

class CSteppers extends React.Component {
  state = {
    activeStep: 0,
    videoConferencing: { count: 0, value: 2, clicked: false},
    downloadLargeFile: { count: 0, value: 2.5, clicked: false},
    webEmailUsage: { count: 0, value: 0.5, clicked: false},
    mediaFileSharing: { count: 0, value: 2, clicked: false},
    uploadingLargeFiles: { count: 0, value: 3, clicked: false},
    streamingMusic: { count: 0, value: 0.5, clicked: false},
    voip: { count: 0, value: 0.5, clicked: false},
    streamingVideo: { count: 0, value: 5, clicked: false},
    noUsers: 1,
    bandwidth: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      bandwidth: 0,
      videoConferencing: { count: 0, value: 2, clicked: false},
      downloadLargeFile: { count: 0, value: 2.5, clicked: false},
      webEmailUsage: { count: 0, value: 0.5, clicked: false},
      mediaFileSharing: { count: 0, value: 2, clicked: false},
      uploadingLargeFiles: { count: 0, value: 3, clicked: false},
      streamingMusic: { count: 0, value: 0.5, clicked: false},
      voip: { count: 0, value: 0.5, clicked: false},
      streamingVideo: { count: 0, value: 5, clicked: false},
    });
  };

  setNumberUser = num => (
    this.setState({
      noUsers : num
    })
  )

  handleChange = name => event => {
    const bea = {...this.state[name]};
    bea.count = event.target.value;
    this.setState({ [name]: bea });
  };

  calculateBandwidth = ( ) => {
    const c = {...this.state};
    let b = 0.5;
    for(let item in c) {
      if(item !== 'activeStep'){
        if( item !== 'noUsers'){
          if(item !== 'bandwidth'){
            b +=  this.state[item].value * this.state[item].count 
          }
        }
      }
    }
    return b
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.bg}>
          {steps.map(label => (
            <Step key={label}>
              <StepButton>{label}</StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography variant="h4" className={classes.instructions}>Bandwidth Needed</Typography>
              <Typography variant="display4" className={`font-weight-bolder text-success ${classes.bandwidth}`}>{(this.calculateBandwidth()).toFixed(2)} mbps</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div className={`${classes.instructions} my-3 mx-auto`}>{getStepContent( activeStep, this.state, this.handleChange, this.calculateBandwidth, this.setNumberUser, this.props)}</div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={ activeStep === steps.length - 1 ? (this.calculateBandwidth && this.handleNext) : this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

CSteppers.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(CSteppers);