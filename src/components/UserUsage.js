import React, { Component } from 'react'
import { Typography, Button } from '@material-ui/core';

export default class UserUsage extends Component {
  render() {
    const {state} = this.props;
    return (
      <>
        <div className="col-sm-12 my-5">
          <Typography className="font-weight-bold" variant="h5">How Frequent do they use these devices?</Typography>
        </div>
        <div className="row text-left my-3 mx-auto justify-content-start">
          { state.smartTvs.count > 0 && <div className="my-3 col-sm-4">
            <Typography className="font-weight-bold my-4" variant="headline">
              Smart Tvs
            </Typography>
            <div className="row">
              <Button onClick={this.props.handleClick('daily', 'smartTvs')} variant={state.smartTvs.clicked && (state.smartTvs.freq === 'daily') ? "contained" : "outlined"} className="mx-2" style={state.smartTvs.clicked && (state.smartTvs.freq === 'daily') ? {backgroundColor: 'black', color: 'white'}: {}}>
                Daily
              </Button>
              <Button onClick={this.props.handleClick('weekly', 'smartTvs')} variant={state.smartTvs.clicked && (state.smartTvs.freq === 'weekly') ? "contained" : "outlined"} className="mx-2" color="primary">
                Weekly
              </Button>
              <Button onClick={this.props.handleClick('rarely', 'smartTvs')} variant={state.smartTvs.clicked && (state.smartTvs.freq === 'rarely') ? "contained" : "outlined"} className="mx-2" color="secondary">
                Rarely
              </Button>
            </div>
          </div>}
          { state.gamingConsole.count > 0 && <div className="my-3 col-sm-4">
            <Typography className="font-weight-bold my-4" variant="headline">
              Gaming Console
            </Typography>
            <div className="row">
              <Button onClick={this.props.handleClick('daily','gamingConsole')} variant={state.gamingConsole.clicked && (state.gamingConsole.freq === 'daily') ? "contained" : "outlined"} className="mx-2" style={state.gamingConsole.clicked && (state.gamingConsole.freq === 'daily') ? {backgroundColor: 'black', color: 'white'}: {}}>
                Daily
              </Button>
              <Button onClick={this.props.handleClick('weekly','gamingConsole')} variant={state.gamingConsole.clicked && (state.gamingConsole.freq === 'weekly') ? "contained" : "outlined"} className="mx-2" color="primary">
                Weekly
              </Button>
              <Button onClick={this.props.handleClick('rarely','gamingConsole')} variant={state.gamingConsole.clicked && (state.gamingConsole.freq === 'rarely') ? "contained" : "outlined"} className="mx-2" color="secondary">
                Rarely
              </Button>
            </div>
          </div>}
          { state.smartPhones.count > 0 && <div className="my-3 col-sm-4">
            <Typography className="font-weight-bold my-4" variant="headline">
              Smart Phones
            </Typography>
            <div className="row">
              <Button onClick={this.props.handleClick('daily', 'smartPhones')} variant={state.smartPhones.clicked && (state.smartPhones.freq === 'daily') ? "contained" : "outlined"} className="mx-2" style={state.smartPhones.clicked && (state.smartPhones.freq === 'daily') ? {backgroundColor: 'black', color: 'white'}: {}}>
                Daily
              </Button>
              <Button onClick={this.props.handleClick('weekly', 'smartPhones')} variant={state.smartPhones.clicked && (state.smartPhones.freq === 'weekly') ? "contained" : "outlined"} className="mx-2" color="primary">
                Weekly
              </Button>
              <Button onClick={this.props.handleClick('rarely', 'smartPhones')} variant={state.smartPhones.clicked && (state.smartPhones.freq === 'rarely') ? "contained" : "outlined"} className="mx-2" color="secondary">
                Rarely
              </Button>
            </div>
          </div>}
          { state.tablets.count > 0 && <div className="my-3 col-sm-4">
            <Typography className="font-weight-bold my-4" variant="headline">
              Tablets
            </Typography>
            <div className="row">
              <Button onClick={this.props.handleClick('daily', 'tablets')} variant={state.tablets.clicked && (state.tablets.freq === 'daily') ? "contained" : "outlined"} className="mx-2" style={state.tablets.clicked && (state.tablets.freq === 'daily') ? {backgroundColor: 'black', color: 'white'}: {}}>
                Daily
              </Button>
              <Button onClick={this.props.handleClick('weekly', 'tablets')} variant={state.tablets.clicked && (state.tablets.freq === 'weekly') ? "contained" : "outlined"} className="mx-2" color="primary">
                Weekly
              </Button>
              <Button onClick={this.props.handleClick('rarely', 'tablets')} variant={state.tablets.clicked && (state.tablets.freq === 'rarely') ? "contained" : "outlined"} className="mx-2" color="secondary">
                Rarely
              </Button>
            </div>
          </div>}
          { state.laptops.count > 0 && <div className="my-3 col-sm-4">
            <Typography className="font-weight-bold my-4" variant="headline">
              Laptops
            </Typography>
            <div className="row">
              <Button onClick={this.props.handleClick('daily', 'laptops')} variant={state.laptops.clicked && (state.laptops.freq === 'daily') ? "contained" : "outlined"} className="mx-2" style={state.laptops.clicked && (state.laptops.freq === 'daily') ? {backgroundColor: 'black', color: 'white'}: {}}>
                Daily
              </Button>
              <Button onClick={this.props.handleClick('weekly', 'laptops')} variant={state.laptops.clicked && (state.laptops.freq === 'weekly') ? "contained" : "outlined"} className="mx-2" color="primary">
                Weekly
              </Button>
              <Button onClick={this.props.handleClick('rarely', 'laptops')} variant={state.laptops.clicked && (state.laptops.freq === 'rarely') ? "contained" : "outlined"} className="mx-2" color="secondary">
                Rarely
              </Button>
            </div>
          </div>}
          { state.smartHomeDevices.count > 0 && <div className="my-3 col-sm-4">
            <Typography className="font-weight-bold my-4" variant="headline">
              Smart Home Devices
            </Typography>
            <div className="row">
              <Button onClick={this.props.handleClick('daily', 'smartHomeDevices')} variant={state.smartHomeDevices.clicked && (state.smartHomeDevices.freq === 'daily') ? "contained" : "outlined"} className="mx-2" style={state.smartHomeDevices.clicked && (state.smartHomeDevices.freq === 'daily') ? {backgroundColor: 'black', color: 'white'}: {}}>
                Daily
              </Button>
              <Button onClick={this.props.handleClick('weekly', 'smartHomeDevices')} variant={state.smartHomeDevices.clicked && (state.smartHomeDevices.freq === 'weekly') ? "contained" : "outlined"} className="mx-2" color="primary">
                Weekly
              </Button>
              <Button onClick={this.props.handleClick('rarely', 'smartHomeDevices')} variant={state.smartHomeDevices.clicked && (state.smartHomeDevices.freq === 'rarely') ? "contained" : "outlined"}className="mx-2" color="secondary">
                Rarely
              </Button>
            </div>
          </div>}
        </div>
      </>
    )
  }
}
