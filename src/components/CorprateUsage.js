import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import * as images from '../assets/img/index'

export default class CUsage extends Component {

  render() {
    return (
      <>
        <div className="col-sm-12 my-5">
          <Typography className="font-weight-bold" variant="h5">How many of your staffs do the following?</Typography>
        </div>
        <div className="row text-left my-3 mx-auto justify-content-start align-items-end">
          <div className="col-sm-3 my-3 text-center">
            <Typography  className="font-weight-bold" variant="h6" color="primary">Video Conferencing</Typography>
            <div className="p-4 w-75 mx-auto">
              <img className="img-fluid" alt="video coferencing" src={images.video} />
            </div>
            <div>
              <TextField 
                name="videoConferencing"
                value={this.props.state.videoConferencing.count}
                fullWidth
                onChange={this.props.handleChange('videoConferencing')}
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
          <div className="col-sm-3 my-3 text-center">
            <Typography className="font-weight-bold" variant="h6" color="primary">Download Large Files</Typography>
            <div className="p-4 w-75 mx-auto">
              <img className="img-fluid" alt="download large files" src={images.large} />
            </div>
            <div>
              <TextField 
                name="downloadLargeFile"
                value={this.props.state.downloadLargeFile.count}
                fullWidth
                onChange={this.props.handleChange('downloadLargeFile')}
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
          <div className="col-sm-3 my-3 text-center">
            <Typography  className="font-weight-bold" variant="h6" color="primary">Email Services</Typography>
            <div className="p-4 w-75 mx-auto">
              <img className="img-fluid" alt="email" src={images.email} />
            </div>
            <div>
              <TextField 
                name="webEmailUsage"
                value={this.props.state.webEmailUsage.count}
                fullWidth
                onChange={this.props.handleChange('webEmailUsage')}
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
          <div className="col-sm-3 my-3 text-center">
            <Typography  className="font-weight-bold" variant="h6" color="primary">Media/File Sharing</Typography>
            <div className="p-4 w-75 mx-auto">
              <img className="img-fluid" alt="media file sharing " src={images.media} />
            </div>
            <div>
              <TextField 
                name="mediaFileSharing"
                value={this.props.state.mediaFileSharing.count}
                fullWidth
                onChange={this.props.handleChange('mediaFileSharing')}
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
          <div className="col-sm-3 my-3 text-center">
            <Typography  className="font-weight-bold" variant="h6" color="primary">Uploading Large Files</Typography>
            <div className="p-4 w-75 mx-auto">
              <img className="img-fluid" alt="uploading Large Files" src={images.upLarge} />
            </div>
            <div>
              <TextField 
                name="uploadingLargeFiles"
                value={this.props.state.uploadingLargeFiles.count}
                fullWidth
                onChange={this.props.handleChange('uploadingLargeFiles')}
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
          <div className="col-sm-3 my-3 text-center">
            <Typography  className="font-weight-bold" variant="h6" color="primary">Music Streaming</Typography>
            <div className="p-4 w-75 mx-auto">
              <img className="img-fluid" alt="streaming music" src={images.music} />
            </div>
            <div>
              <TextField 
                name="streamingMusic"
                value={this.props.state.streamingMusic.count}
                fullWidth
                onChange={this.props.handleChange('streamingMusic')}
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
          <div className="col-sm-3 my-3 text-center">
            <Typography  className="font-weight-bold" variant="h6" color="primary">VOIP</Typography>
            <div className="p-4 w-75 mx-auto">
              <img className="img-fluid" alt="voip" src={images.voip} />
            </div>
            <div>
              <TextField 
                name="voip"
                value={this.props.state.voip.count}
                fullWidth
                onChange={this.props.handleChange('voip')}
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
          <div className="col-sm-3 my-3 text-center">
            <Typography  className="font-weight-bold" variant="h6" color="primary">Video Streaming</Typography>
            <div className="p-4 w-75 mx-auto">
              <img className="img-fluid" alt="video streaming" src={images.videoStream} />
            </div>
            <div>
              <TextField 
                name="streamingVideo"
                value={this.props.state.streamingVideo.count}
                fullWidth
                onChange={this.props.handleChange('streamingVideo')}
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
      </>
    )
  }
}
