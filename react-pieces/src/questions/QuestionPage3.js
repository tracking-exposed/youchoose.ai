import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import _ from 'lodash';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

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

const marks = [
  {
    value: 0,
    label: 'Not at all',
  },
  {
    value: 100,
    label: 'Completly',
  },
];

const PrettoSlider = withStyles({
  root: {
    color: '#e33180',
    height: 20,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function QuestionPage3() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <FormControl component="fieldset">

    <h3 className="pink">
    <br></br>
    One of the missions of our project is to make Youtube's algorithm more accountable. <br></br>
    That's why we decided to develop a <b> Shadow-ban tester </b>  
    to better understand this kind of hidden punishment and to reveal it.
    </h3>

    <h3 className={classes.h2}>3.1 Do you know what shadow-ban is? </h3>
      <RadioGroup id="31" aria-label="shadowban">
        <FormControlLabel value="a" control={<Radio />} label="Yes" />
        <FormControlLabel value="b" control={<Radio />} label="No" />
        <FormControlLabel value="c" control={<Radio />} label="I heard about it, but I do not really know what it is." />
      </RadioGroup>

    <div className={classes.root}>
    <h3 className={classes.h2}>3.2 How much are you scared to be shadow-banned?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={marks} id="32" />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>3.3 How much are you interested in a tool that can measure the shadow-ban for a specific channel (shadow-ban tester)?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={marks} id="33" />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>3.4 Do you know of any case of shadow-ban that happened to you or other Youtubers?</h3>  
      <TextField
        id="34"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Could you list their channel here please?"
        variant="filled"
      />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>3.5 What is the evidence that you / other Youtubers provided about the cases? </h3>  
      <TextField
        id="35"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>


    <h3 className={classes.h2}>3.6 We plan to use collaborative data collections to spot shadow-ban: users will automatically communicate their recommended videos with us, and we will provide statistics about the shadow-ban. <br></br>
   Do you think your audience will be interested in help? </h3>
      <RadioGroup id="36" aria-label="datasharing">
        <FormControlLabel value="a" control={<Radio />} label="Yes" />
        <FormControlLabel value="b" control={<Radio />} label="No" />
      </RadioGroup>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>3.7 Could you please tell us some potential concerns about this help request that your audience could have? </h3>  
      <TextField
        id="37"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>


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
