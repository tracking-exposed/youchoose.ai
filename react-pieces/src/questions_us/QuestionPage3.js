import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
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
    value: 1,
    label: 'Never',
  },
  {
    value: 2,
    label: 'Rarely',
  },
  {
    value: 3,
    label: 'Sometimes',
  },
  {
    value: 4,
    label: 'Often',
  },
  {
    value: 5,
    label: 'Always',
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
    One of the missions of our project is to make Youtube's algorithm more accountable.  <br></br>
    That's why we decided to develop a <b> Shadow-ban tester </b>  
    to better understand this kind of hidden punishment and to reveal it. <br></br>
    Shadow-ban is when a video is accessible on the platform, but no one gets those videos as recommendations, and the number of visualizations drops drastically.
    </h3>

    <div className={classes.root}>
    <h3 className={classes.h2}></h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="71"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>
    
    <h3 className={classes.h2}>3.1 Are you aware of this type of censorship? </h3>
      <RadioGroup id="72" aria-label="shadowban" >
      <FormControlLabel value="a" control={<Radio />} label="Yes" />
        <FormControlLabel value="b" control={<Radio />} label="No" />
        <FormControlLabel value="c" control={<Radio />} label="I heard about it, but I do not really know what it is." />
      </RadioGroup>
    
    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>3.2 Can you tell us if you know some channels that have been shadow-banned? </h3>  
      <TextField
        id="73"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label=" List some name here:"
        variant="filled"
      />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>3.3 Can you tell us how you/others find it out?</h3>  
      <TextField
        id="74"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make same example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>3.4 How much do you want to help to fight this phenomenon?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="75"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <h3 className={classes.h2}>3.5 We plan to use collaborative data collections to spot shadow-ban: users will automatically communicate their recommended videos with us, and we will provide statistics about the shadow-ban. <br></br>
    Are you interested in help collecting evidence by installing our browser extension?</h3>
      <RadioGroup id="76" aria-label="shadowban" >
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
