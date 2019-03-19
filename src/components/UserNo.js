import React, { Component } from 'react'
import { Typography, TextField } from '@material-ui/core';

export default class UserNo extends Component {
  constructor(props){
    super(props);
    this.state={
      UserNo: 1
    }
  }

  handleChange = name => event => {
    this.props.setNumberUser(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div className="text-center justify-content-center row my-2">
        <div className="col-sm-12">{console.log(this.props)}
          { this.props.props.mode === 'home' && <Typography className="font-weight-bold" variant="h5">How many people use the internet in your {this.props.tag}?</Typography>}
          { this.props.props.mode === 'corprate' && <Typography className="font-weight-bold" variant="h5">What is the staff capacity of your {this.props.tag}?</Typography>}
        </div>
        <div className="my-4">
          <TextField 
            name="UserNo"
            value={this.state.UserNo}
            onChange={this.handleChange('UserNo')}
            type="number"
            min={1}
            inputProps={{
              min: '1'
            }}
          />
        </div>
      </div>
    )
  }
}
