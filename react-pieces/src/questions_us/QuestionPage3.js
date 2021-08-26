import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';

import PrettoSlider from '../questions/PrettoSlider';

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

export default function QuestionPage3() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <FormControl component="fieldset">

    <h3 className="pink">
    <br></br>
    One of the missions of our project is to make Youtube's algorithm more accountable.  <br></br>
    That's why we decided to develop a <b> Shadow-ban tester </b>  
    to better understand this kind of hidden punishment and to reveal it. <br></br>
    Shadow-ban is when a video is accessible on the platform, but no one gets those videos as recommendations, and the number of visualizations drops drastically.
    </h3>

    
    <h3 className={classes.h2}>7.1 Are you <b>aware</b> of this type of censorship? </h3>
      <RadioGroup id="71" aria-label="shadowban" >
      <FormControlLabel value="a" control={<Radio />} label="Yes" />
        <FormControlLabel value="b" control={<Radio />} label="No" />
        <FormControlLabel value="c" control={<Radio />} label="I heard about it, but I do not really know what it is." />
      </RadioGroup>
    
    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>7.2 Do you know any shadow banned <b>channel</b>?</h3>  
      <TextField
        id="72"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label=" List some name here:"
        variant="filled"
      />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>7.3 Can you tell us how you/others <b>find</b> it out?</h3>  
      <TextField
        id="73"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make same example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>7.4 How much do you want to help to <b>fight</b> this phenomenon?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks3}
       id="74"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <h3 className={classes.h2}>7.5 Would you be willing to <b>donate</b> anonimysed recommendation data to help us and your favorite youtubers expose shadow banning? (the process will be automated by a browser extension)</h3>
      <RadioGroup id="75" aria-label="shadowban" >
        <FormControlLabel value="a" control={<Radio />} label="Yes!" />
        <FormControlLabel value="b" control={<Radio />} label="No," />
        <FormControlLabel value="c" control={<Radio />} label="I would like to have more information before deciding." />
      </RadioGroup>

    <div>
      <br />
      <br />
      <Button variant='outlined' color='secondary' size="large" onClick={clickOn} target-id="full-width-tab-3">
        Next
      </Button>  
    </div>

    </FormControl>

	  </div> 
	  )
	}
