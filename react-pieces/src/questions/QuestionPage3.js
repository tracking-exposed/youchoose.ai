import React from 'react';
import TextField from '@material-ui/core/TextField';

import {withStyles, makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';
import FinalButtons from './FinalButtons';

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
    height: 8,
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

<div className={classes.root}>
    <h3 className={classes.h2}>3.1 How much do you like the idea of having a personal dashboard?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>3.1 How much do you like the idea of having a personal dashboard?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>3.2 How much  do you like the idea of using the video description to declare which videos will be recommended to your audience?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>3.3 Do you have any thoughts about how the content creator interface could be developed to answer your needs? </h3>  
      <TextField
        id="standard-secondary"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write them down here:"
        variant="filled"
      />
    </div>

    </FormControl>
    <FinalButtons from={3} />
	  </div> 
	  );
	}
