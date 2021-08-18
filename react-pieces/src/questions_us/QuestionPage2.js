import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import _ from 'lodash';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
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


export default function QuestionPage2() {

  const classes = useStyles();

  return (
  <div className={classes.root}>
  <FormControl component="fieldset">

 

    <h3 className=" pink">
   <br></br>
     We want to enable Youtubers to suggest videos to their audience, replacing the ones suggested by Youtube's algorithm when watching the content they upload.
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
        This is what users will see with Youchoose: when watching videos, they will have a new column alternative to the algorithmic recommendations, with the videos and the external links Youtubers choose for you.
        </p>
      </div>
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>2.1 How much do you like the idea of having videos recommendations made by Youtubers instead of having algorithm choosing for you?</h3>  
      <PrettoSlider 
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="61"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <h3 className={classes.h2}>2.2 What type of videos or external links would you like to get as a suggestion made by Youtubers? </h3>
      <RadioGroup id="62" aria-label="suggestion type"  >
        <FormControlLabel value="a" control={<Checkbox />} label="Youtube videos from other channels." />
        <FormControlLabel value="b" control={<Checkbox />} label="Youtube videos from the same channels." />
        <FormControlLabel value="c" control={<Checkbox />} label="Wikipedia pages." />
        <FormControlLabel value="d" control={<Checkbox />} label="Divulgarive articles." />
        <FormControlLabel value="e" control={<Checkbox />} label="Scientific articles." />
        <FormControlLabel value="f" control={<Checkbox />} label="Tik Tok." />
        <FormControlLabel value="g" control={<Checkbox />} label="Other social media links." />
        <FormControlLabel value="h" control={<Checkbox />} label="Advertisment" />
      
      </RadioGroup>

      <div className={classes.root} noValidate autoComplete="off">
      <TextField
        id="63"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write other types of links you would like to have here"
        variant="filled"
      />
    </div>


    <h3 className={classes.h2}>2.3 Would you also like to have some recommendations from YouTubers on the homepage?</h3>
      <RadioGroup id="64" aria-label="cc recommendations"  >
        <FormControlLabel value="a" control={<Radio />} label="Yes." />
        <FormControlLabel value="b" control={<Radio />} label="No." />
      </RadioGroup>

    <div className={classes.root}>
    <h3 className={classes.h2}>2.4 Imagine that some of the videos you see on Reddit will appear as recommendations on Youtube. How much do you like the idea of having, in the recommended section, some videos coming from your activity on other social media (e.g., Reddit, Twitter, or Facebook)?</h3>
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="65"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>2.5 Do you have any thoughts you want to share with us? </h3>
      <TextField
        id="66"
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
