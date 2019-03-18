import React, { Component } from 'react'
import { Typography, Button } from '@material-ui/core';

export default class UserFreq extends Component {
  render() {
    return (
        <div className="row text-le my-3 mx-auto justify-content-center">
          <div className="col-sm-4">
            <div className="my-3">
              <Typography variant="headline" className="my-4 font-weight-bold">
                Do your House Frequency stream online?
              </Typography>
              <div className="row justify-content-center">
                <Button onClick={(e) => this.props.handleStream(true)} variant={ this.props.state.streamMore === true  ? "contained" : "outlined"} className="mx-2" color="primary">
                  Yes
                </Button>
                <Button onClick={(e) => this.props.handleStream(false)} variant={ this.props.state.streamMore === false ? "contained" : "outlined"} className="mx-2" color="secondary">
                  No
                </Button>
              </div>
            </div>
            <div className="my-3">
              <Typography variant="headline" className="my-4 font-weight-bold">
                Would You consider your houshold to be heavy internet users?
              </Typography>
              <div className="row  justify-content-center">
                <Button onClick={(e) => this.props.handleHeavyData(true)} variant={ this.props.state.heavyData === true ? "contained" : "outlined"} className="mx-2" color="primary">
                  Yes
                </Button>
                <Button onClick={(e) => this.props.handleHeavyData(false)} variant={ this.props.state.heavyData === false ? "contained" : "outlined"} className="mx-2" color="secondary">
                  No
                </Button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
