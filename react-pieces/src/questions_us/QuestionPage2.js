import React from 'react';
import TextField from '@material-ui/core/TextField';

import {withStyles, makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';
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


export default function QuestionPage2() {

  const classes = useStyles();

  return (
  <div className={classes.root}>
  <FormControl component="fieldset">

 

    <h3 className=" pink">
   <br></br>
     We want to enable Youtubers in suggesting videos to their audience, replacing the ones suggested by Youtube's algorithm when watching the contents they upload.
    </h3>

    <div className="row entry">
      <h3 className="mb-2 "></h3>
        <div className="col-sm-8">
          <figure>
            <img width="100%" src="/images/youchoose_recommendations.svg" />
          </figure>
        </div>
      <div className="col-sm-4 position-relative">
        <p className="mt-4 mb-4">
        This is what users will see with Youchoose: when watchin videos, they will have a new colum alternative to the algorithmic reccomandations, with the videos and the external links youtubers choose for you.
        </p>
      </div>
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>2.1 What do you think of having videos recommendations made by Youtubers instead of having algorithm choosing for you?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={marks} id="21" />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>2.2What type of videos or external link would you like to get as suggestion made by youtubers? (e.g. wikipedia links, other videos from the same channel, scientific sources... ) </h3>
      <TextField
        id="22"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>2.3 Would you like to also have some recommendations from YouTubers on the homepage?</h3>
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={marks} id="23"/>
      <div className={classes.margin} />
    </div>


    <div className={classes.root}>
    <h3 className={classes.h2}>2.4 Imagine that some of the videos you see on Reddit will appear as recommendations on Youtube. How much do you like the idea of having, in the recommended section, some videos coming from your activity on other social media (e.g. Reddit, Twitter or Facebook)?</h3>
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} marks={marks} id="26"/>
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>2.5 Do you have any thoughts you want to share with us? </h3>
      <TextField
        id="27"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write them down here:"
        variant="filled"
      />
    </div>

    <div>
    <br />
    <br />
     <Button variant='outlined' color='secondary' size="large" onClick={clickOn} target-id="full-width-tab-2">
      Next
     </Button>  
    </div>


  </FormControl>
	</div> 
  );
}

/*  to add the IFRATE:   <iframe  width="100%" height="750" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCCHrDXWJ167PV5AnjpmTRa%2Ftabs%3Fnode-id%3D30%253A3619%26scaling%3Ddown-to-fit" allowfullscreen></iframe>  */
