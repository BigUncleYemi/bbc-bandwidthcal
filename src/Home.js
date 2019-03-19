import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserNo from './components/UserNo';
import UserDevices from './components/UserDevices';
import UserUsage from './components/UserUsage';
// import UserFreq from './components/UserFreq'

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
  return ['Number of Users', 'User Devices', 'User Device Usage'];
}

function getStepContent(step, handleChange, state, handleClick, handleHeavyData, handleStream, setNumberUser, props) {
  switch (step) {
    case 0:
      return <UserNo {...{handleChange, props, state, setNumberUser}} tag="household" />;
    case 1:
      return <UserDevices {...{handleChange, state}}/>;
    case 2:
      return <UserUsage {...{handleClick, state}}/>;
    // case 3:
    //     return <UserFreq {...{handleHeavyData, handleStream, state}}/>;
    default:
      return 'Unknown step';
  }
}

class Steppers extends React.Component {
  state = {
    activeStep: 0,
    noUsers: 1,
    smartTvs: { count: 0, value: 0.5, freq: '', clicked: false},
    gamingConsole: { count: 0, value: 2, freq: '', clicked: false},
    smartPhones: { count: 0, value: 0.5, freq: '', clicked: false},
    tablets: { count: 0, value: 0.5, freq: '', clicked: false},
    laptops: { count: 0, value: 0.5, freq: '', clicked: false},
    smartHomeDevices: { count: 0, value: 0.5, freq: '', clicked: false},
    streamMore: '',
    heavyData: ''
  };

  handleStream = (data) => {
    this.setState(state => ({
      streamMore: data
    }))
  }

  handleHeavyData = (data) => {
    this.setState({
      heavyData: data
    })
  } 

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
      smartTvs: { count: 0, value: 0.5, freq: '', clicked: false},
      gamingConsole: { count: 0, value: 2, freq: '', clicked: false},
      smartPhones: { count: 0, value: 0.5, freq: '', clicked: false},
      tablets: { count: 0, value: 0.5, freq: '', clicked: false},
      laptops: { count: 0, value: 0.5, freq: '', clicked: false},
      smartHomeDevices: { count: 0, value: 0.5, freq: '', clicked: false},
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

  handleClick =( name, cat )=> event => {
    if(this.state[cat].clicked === false){
      const bea = {...this.state[cat]};
      bea.freq = name;
      bea.clicked = true;
      this.setState({[cat]: bea });
    }else{
      if(this.state[cat].freq !== undefined){
        const bea = {...this.state[cat]};
        bea.freq = name;
        this.setState({[cat]: bea });
      }else if (this.state[cat].freq === undefined && this.state[cat].clicked === true) {
        console.log('here')
        const bea = {...this.state[cat]};
        bea.freq = '';
        bea.clicked = false;
        this.setState({[cat]: bea });
      }
    }
  }

  calculateBandwidth = ( ) => {
    const c = {...this.state};
    let b = 1.5 * this.state.noUsers;
    for(let item in c) {
      if(item !== 'activeStep'){
        if( item !== 'noUsers'){
          if(item !== 'streamMore'){
            if ( item !== 'heavyData'){
              switch (this.state[item].freq) {
                case 'daily':
                console.log(b, item);
                  b +=  this.state[item].value * this.state[item].count * 5;
                  console.log(b)
                  break;
                case 'weekly':
                console.log(b);
                  b +=  this.state[item].value * this.state[item].count * 4;
                  console.log(b)
                  break;
                case 'rarely':
                console.log(b);
                  b +=  this.state[item].value * this.state[item].count * 3;
                  console.log(b)
                  break;
                default:
                  break;
              }
            }
          }
        }
      }
    }
    console.log(b)
    return b
  }

  componentDidMount(){
    console.log(this.calculateBandwidth())
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState !== this.state){
      console.log(this.calculateBandwidth())
    }
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
              <Typography variant="display4" className={`font-weight-bolder text-success ${classes.bandwidth}`}>{(this.calculateBandwidth() ).toFixed(2)} mbps</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div className={`${classes.instructions} my-3 mx-auto`}>{getStepContent(activeStep, this.handleChange, this.state, this.handleClick, this.handleHeavyData, this.handleStream, this.setNumberUser, this.props)}</div>
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

Steppers.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Steppers);