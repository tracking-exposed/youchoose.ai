import React from 'react';

import { Card } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import Contribute from './Contribute';

const styles = {
  width: '100%',
};

class Answers extends React.Component{

  constructor (props) {
    super(props);
    this.state = { status: 'fetching' };
  }

  componentDidMount () {
    fetch(this.props.url, { mode: 'cors' })
      .then(resp => resp.json())
      .then(data => this.setState({status: 'done', data }));
  }

  render () {

    if(!this.state || this.state.status == 'fetching')
      return (<div>Loading the most recent answers...</div>)

    console.log('Checking state', this.state);

    if(this.state.status !== 'done') {
      console.log("Incomplete info before render");
      return (
        <div style={styles}>
          <Card>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Server didn't return data, this might means the backend is down.
            </Alert>
          </Card>
        </div>
      );
    }

    if(!(this.state.data && this.state.data.length)) {
      return (
        <div style={styles}>
          <h4>
            Connection worked, no data available
          </h4>
        </div>
      );
    }
    
    const youtubers = _.filter(this.state.data, { qName: 'youtubers'});
    const watchers = _.filter(this.state.data, { qName: 'watchers'});
    return (
      <div style={styles}>
        <p> Answers from <b>CONTENT CREATORS</b></p>
        <Contribute data={youtubers} kind="youtubers" />
        < br />
        < br />
        <p> Answers from <b>USERS</b></p>
        <Contribute data={watchers} kind="watchers" />
      </div>
    );
  }
}

export default Answers;