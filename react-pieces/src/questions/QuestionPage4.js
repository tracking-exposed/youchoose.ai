import _ from 'lodash';

import React from 'react';
import TextField from '@material-ui/core/TextField';

import { makeStyles} from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio'

function clickOn(e) {
  const tid = e.currentTarget.getAttribute('target-id');
  e.preventDefault();
  document.getElementById(tid).click();
  document.getElementById(tid).scrollIntoView();
}

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

export default function QuestionPage4() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <FormControl component="fieldset">

    <h3 className="pink">
    <br></br>
    Last but not least: if you have any other suggestions you can write them here.
     If you want to stay updated, leave us a contact.
    </h3>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>4.1 If you have any suggestions or advice... </h3>  
      <TextField
        id="41"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write them here:"
        variant="filled"
      />
    </div>

<div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>4.2 If you are interested in the project, leave here your email. We will send you <b> just one email</b>  updating you on the day we will lunch the tool. </h3>  
      <TextField
        id="42"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write it here:"
        variant="filled"
      />
    </div>

    <h3 className={classes.h2}>4.3 Let us know if you are available for an online interview (30 minutes max). We will use this time to tell you more about the tool, to think together about the possible future of this software and the community that will grow around it.</h3>
      <RadioGroup id="optIn" aria-label="iscrizione" name="iscrizione">
        <FormControlLabel value="YES" control={<Radio />} label="Yes, you can contact me for an interview" />
      </RadioGroup>

    <div>
    <br />
    <br />
    <Button variant='outlined' color='secondary' size="large" onClick={clickOn} target-id="full-width-tab-4">
      Submit!
    </Button>   
    </div>


    </FormControl>
	  </div> 
	  )
	}
