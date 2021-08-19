import _ from 'lodash';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import PrettoSlider from './PrettoSlider';

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

const marksyears = [
  {
    value: 1,
    label: '< 1 year',
  },
  {
    value: 2,
    label: '1-3 years',
  },
  {
    value: 3,
    label: '> 3 years',
  },
];

const marks3 = [
  {
    value: 1,
    label: 'Not at all',
  },
  {
    value: 2,
    //label: 'Only a little',
  },
  {
    value: 3,
    label: 'To some extent',
  },
  {
    value: 4,
    //label: 'Rather much',
  },
  {
    value: 5,
    label: 'Very much',
  },
];

export default function QuestionPage4() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <FormControl component="fieldset">

    <h3 className="pink">
    <br></br>
    Last but not least: some general questions about you
    and if you want to stay updated, leave us a contact.
    </h3>

    <div className={classes.root}>
    <h3 className={classes.h2}>4.1 How <b>long</b> have you been a Youtuber?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marksyears}
       id="41"
       min={1}
       max={3}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>4.2 What's your <b>channel</b> about? </h3>  
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

<div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>4.3 If you are interested in the project, leave here your email. We will send you <b> just one email</b>  updating you on the day we will lunch the tool. </h3>  
      <TextField
        id="43"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write it here:"
        variant="filled"
      />
    </div>

    <h3 className={classes.h2}>4.4 Let us know if you are available for an online <b>interview</b> (30 minutes max). We will use this time to tell you more about the tool, to think together about the possible future of this software and the community that will grow around it.</h3>
      <RadioGroup id="44" aria-label="iscrizione" name="iscrizione">
        <FormControlLabel value="YES" control={<Radio />} label="Yes, you can contact me for an interview." />
        <FormControlLabel value="NO" control={<Radio />} label="No, thanks." />
      </RadioGroup>

      <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>4.5 If you could <b>change</b> one thing about website/product what would it be and why? </h3>  
      <TextField
        id="45"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write them here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>4.6 How likely is it that you could <b>recommend</b> our product/website to a friend or colleague?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks3}
       id="46"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>


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
