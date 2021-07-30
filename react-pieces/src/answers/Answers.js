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

const LOCALHOST_SERVER = 'http://localhost:10000';

function getSearchPatterns(paging) {
  if (paging) console.log("remember the paging is disabled");
  if (window.location.origin.match(/localhost/))
    return `${LOCALHOST_SERVER}/api/v2/search/keywords/`;
  return `/api/v2/search/keywords/`;
}

function getSearchesResults(term, paging) {
  if (paging) console.log("remember the paging is disabled");
  if (window.location.origin.match(/localhost/))
    return `${LOCALHOST_SERVER}/api/v2/searches/${term}/`;
  return `/api/v2/searches/${term}/`;
}

class Answers extends React.Component{

  constructor (props) {
    super(props);
    this.state = { status: 'fetching' };
  }

  componentDidMount () {
    const url = getSearchPatterns();
    fetch(url, { mode: 'cors' })
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

    const selist = _.get(this.state.data, 'selist');

    if(!(this.state.data && selist && selist.length > 1 )) {
      return (
        <div style={styles}>
          <Card>
            <h3>Altought connection with server worked, no data seems available, <a href="https://www.youtube.com/watch?v=bs2u4NLaxbI">wtf</a>.</h3>
          </Card>
        </div>
      );
    }
    
    const items = []

    for (const sevid of selist ) {
      // sevid.id it is a list temporarly ignored, maybe usable in advanced searches
      console.log(sevid);
      items.push(<Contribute {...sevid} />);
      items.push(<Divider variant="inset" component="li" />);
    }

    return (
      <div style={styles}>
        <Card>
          <FormHelperText>
            Recent Searches returned
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
