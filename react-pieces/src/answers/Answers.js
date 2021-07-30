import moment from 'moment';
import React from 'react';

import { Card } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import FormHelperText from '@material-ui/core/FormHelperText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import Contribute from './Contribute';

const styles = {
  width: '400px',
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

    console.log('X: props status', this.props, this.state);

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
    
    const items = []

    for (const answer of this.state.data) {
      // sevid.id it is a list temporarly ignored, maybe usable in advanced searches
      console.log(answer);
      items.push(<Contribute {...answer} />);
      items.push(<Divider variant="inset" component="li" />);
    }

    return (
      <div style={styles}>
        <Card>
          <FormHelperText>
            Recent Answers received
          </FormHelperText>
          <List>
            {items}
          </List>
        </Card>
      </div>
    );
  }
}

export default Answers;
