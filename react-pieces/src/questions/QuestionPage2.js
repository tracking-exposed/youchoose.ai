import React from 'react';
import TextField from '@material-ui/core/TextField';

import {withStyles, makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';

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


export default function QuestionPage2() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <FormControl component="fieldset">

    <h2 className="titlehp pink">
      [2/4] We want to enable content creators like you, to suggest videos to their audience replacing the videos suggested by Youtube's algorithm when watching the contents you uploaded.
    </h2>

    <div className="row entry">
      <h3 className="mb-2 "></h3>
        <div className="col-sm-8">
          <figure>
            <img width="100%" src="/images/recommendedvideos.jpg" />
          </figure>
        </div>
      <div className="col-sm-4 position-relative">
        <p className="mt-4 mb-4">
          Videos on the right side of the screen are the 'reccomended videos'.
        </p>
      </div>
    </div>


    <div className={classes.root}>
    <h3 className={classes.h2}>2.1 How much do you think this software could be useful for you? </h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>2.1-B Tell us why. </h3>  
      <TextField
        id="standard-secondary"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>2.2 How much do you think this could be interesting for your audience?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>2.2-B Tell us why. </h3>  
      <TextField
        id="standard-secondary"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    </FormControl>
	  </div> 
	  );
	}
