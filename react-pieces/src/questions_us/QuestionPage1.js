import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import _ from 'lodash';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';

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



export default function QuestionPage1() {

  const classes = useStyles();

  return (
  <div className={classes.root}>

    <br />
    <br />

    <h3 className="pink">
    <br></br>
      Your opinion about the videos recommended by Youtube's algorithm.
    </h3>

    <div className="row entry">
      <h3 className="mb-2 "></h3>
        <div className="col-sm-8">
          <figure>
            <img width="100%" src="/images/recommendedvideos.jpg" />
          </figure>
        </div>
      <div className="col-sm-4 position-relative">
        <p className="mt-4 mb-4">
          The videos listed in the right part of the image are examples of algorithmic recommendations.
        </p>
      </div>
    </div>
  
    <FormControl component="fieldset">

    <div className={classes.root}>
    <h3 className={classes.h2}>1.1 How much are these algorithmic suggestions useful for you as a user?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={marks} id="11" />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>1.2 How much do you understand how this algorithm works?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={marks} id="12" />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.3 What do you understand about the algorithm's logic?</h3>  
      <TextField
        id="13"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>1.4 How much can you control the videos recommended to you by the algorithm?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={marks} id="14"/>
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.5 Which strategies do you use to influence the algorithm? (e.g., liking channels, subscribing..)</h3>  
      <TextField
        id="15"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>1.6 How much is the algorithm bringing you to videos you do not like?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={marks} id="16"/>
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.7 If the algorithm has recommended you strange/bad/harmful videos, tell us more about that.</h3>  
      <TextField
        id="17"
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
      <Button variant='outlined' color='secondary' size="large" onClick={clickOn} target-id="full-width-tab-1">
        Next
      </Button>   
    </div>

    </FormControl>
  </div>  
  );
}


/* 
moving this in the page 3

<h3 className={classes.h2}>1.8 Do you know what shadow-banning is?</h3>
      <RadioGroup id="shadowban" aria-label="shadowban" name="shadowban1" >
        <FormControlLabel id="181" control={<Checkbox />} label="Yes" />
        <FormControlLabel id="182" control={<Checkbox />} label="No" />
        <FormControlLabel id="183" control={<Checkbox />} label="I heard about it, but I do not really know what it is." />
      </RadioGroup>


    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.9 Can you tell us if you know some channels that have been shadow-banned and how you/them find it out? </h3>  
      <TextField
        id="19"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

 */