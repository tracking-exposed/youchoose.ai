import _ from 'lodash';

import React from 'react';

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '275ch',
  },
  h2: {
    paddingTop: '30px'
  }
}));

export default function QuestionPage5() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className="titlehp pink">
        Your answer has been submitted.
        Thanks for your help!
      </h2>
	  </div> 
	  )
	}
