import _ from 'lodash';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
     If you wants to stay updated leave us a contact.
    </h3>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>8.1 If you have any <b>suggestions</b> or advice... </h3>  
      <TextField
        id="81"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write them here:"
        variant="filled"
      />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>8.2 If you are interested in the project, leave here your <b>email</b>. We will send you <b> just one email</b>  updating you on the day we will lunch the tool. </h3>  
      <TextField
        id="82"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write it here:"
        variant="filled"
      />
    </div>

    <h3 className={classes.h2}>8.3 Let us know if you are available for an online <b>interview</b> (15 minutes max). We will use this time to tell you more about the tool, to think together about the possible future of this software and the community that will grow around it.</h3>
      <RadioGroup id="83" defaultValue="NO" aria-label="iscrizione" name="iscrizione">
        <FormControlLabel value="YES" control={<Radio />} label="Yes, you can contact me for an interview." />
        <FormControlLabel value="NO" control={<Radio />} label="No, thanks." />
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
