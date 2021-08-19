import React from 'react';

import { Card } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
//import FormHelperText from '@material-ui/core/FormHelperText';

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
          <h3>Altought connection with server worked, no data seems available, <a href="https://www.youtube.com/watch?v=bs2u4NLaxbI">wtf</a>.</h3>
        </div>
      );
    }
    
    const youtubers = _.filter(this.state.data, { qName: 'youtubers'});
    const watchers = _.filter(this.state.data, { qName: 'watchers'});
    return (
      <div style={styles}>
        <p> Answers received # CONTENT CREATORS: </p>
        <Contribute data={youtubers} kind="youtubers" />
        <p> Answers received # USERS: </p>
        <Contribute data={watchers} kind="watchers" />
      </div>
    );
  }
}

export default Answers;