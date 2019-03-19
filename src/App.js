import React, { Component } from 'react';
import './assets/css/App.css';
import Steppers from './Home';
import CStepper from './Corprate';
import {logo} from './assets/img/index';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: ''
    }
    this.switchMode = this.switchMode.bind(this);
  }
  
  switchMode = data => {
    this.setState({
      mode: data
    })
  }

  render() {
    return (
      <div className={this.state.mode === '' ? `App Apps py-3` : `py-5 App bens`}>
        <div className="" style={{zIndex: '999'}}>
          <img onClick={(e) => this.switchMode('')} style={{cursor: 'pointer'}} src={logo} alt="logo" />
          <Typography variant="h2" color="primary" className="title font-weight-bold my-3">Bandwidth Calculator</Typography>
        </div>
        {this.state.mode === 'corprate' && <CStepper mode={this.state.mode} />}
        {this.state.mode === 'home' && <Steppers mode={this.state.mode} /> }
        {this.state.mode === '' && <div className="row my-4">
          <Button size="large" onClick={(e) => this.switchMode('home')} variant="contained" className="mx-2" color="primary">
            Household
          </Button>
          <Button size="large" onClick={(e) => this.switchMode('corprate')} variant="outlined" className="mx-2" color="primary">
            Corprate 
          </Button>
        </div>}
      </div>
    );
  }
}

export default App;
