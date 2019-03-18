import React, { Component } from 'react'
import { Typography, TextField } from '@material-ui/core';

export default class UserDevices extends Component {
  render() {
    return (
      <>
        <div className="col-sm-12 my-5">
          <Typography variant="h5">How many of these devices does your household own?</Typography>
        </div>
        <div className="row text-left my-3 mx-auto justify-content-center align-items-end">
          <div className="col-sm-4">
            <div className="my-3">
              <Typography variant="headline" className="my-4 font-weight-bold">
                Smart Tvs
              </Typography>
              <div>
                <TextField 
                  name="smartTvs"
                  value={this.props.state.smartTvs.count}
                  fullWidth
                  onChange={this.props.handleChange('smartTvs')}
                  type="number"
                  min={0}
                  style={{maxWidth: '250px'}}
                  max={this.props.state.noUsers}
                  inputProps={{
                    min: '0',
                    max: this.props.state.noUsers
                  }}
                />
              </div>
            </div>
            <div className="my-3">
              <Typography variant="headline" className="my-4 font-weight-bold">
                Gaming Console
              </Typography>
              <div>
                <TextField 
                  name="gamingConsole"
                  value={this.props.state.gamingConsole.count}
                  fullWidth
                  onChange={this.props.handleChange('gamingConsole')}
                  type="number"
                  min={0}
                  style={{maxWidth: '250px'}}
                  max={this.props.state.noUsers}
                  inputProps={{
                    min: '0',
                    max: this.props.state.noUsers
                  }}
                />
              </div>
            </div>
            <div className="my-3">
              <Typography variant="headline" className="my-4 font-weight-bold">
                Smart Phones
              </Typography>
              <div>
                <TextField 
                  name="smartPhones"
                  value={this.props.state.smartPhones.count}
                  fullWidth
                  onChange={this.props.handleChange('smartPhones')}
                  type="number"
                  min={0}
                  style={{maxWidth: '250px'}}
                  max={this.props.state.noUsers}
                  inputProps={{
                    min: '0',
                    max: this.props.state.noUsers
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="my-3">
              <Typography variant="headline" className="my-4 font-weight-bold">
                Tablets
              </Typography>
              <div>
                <TextField 
                  name="tablets"
                  value={this.props.state.tablets.count}
                  fullWidth
                  onChange={this.props.handleChange('tablets')}
                  type="number"
                  min={0}
                  style={{maxWidth: '250px'}}
                  max={this.props.state.noUsers}
                  inputProps={{
                    min: '0',
                    max: this.props.state.noUsers
                  }}
                />
              </div>
            </div>
            <div className="my-3">
              <Typography variant="headline" className="my-4 font-weight-bold">
                Laptops
              </Typography>
              <div>
                <TextField 
                  name="laptops"
                  value={this.props.state.laptops.count}
                  fullWidth
                  onChange={this.props.handleChange('laptops')}
                  type="number"
                  min={0}
                  style={{maxWidth: '250px'}}
                  max={this.props.state.noUsers}
                  inputProps={{
                    min: '0',
                    max: this.props.state.noUsers
                  }}
                />
              </div>
            </div>
            <div className="my-3">
              <Typography variant="headline" className="my-4 font-weight-bold">
                Smart Home Devices
              </Typography>
              <div>
                <TextField 
                  name="smartHomeDevices"
                  value={this.props.state.smartHomeDevices.count}
                  fullWidth
                  onChange={this.props.handleChange('smartHomeDevices')}
                  type="number"
                  min={0}
                  style={{maxWidth: '250px'}}
                  max={this.props.state.noUsers}
                  inputProps={{
                    min: '0',
                    max: this.props.state.noUsers
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
