import _ from 'lodash';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';


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
    <h3 className={classes.h2}>5.1 How <b>often</b> do you watch recommended content?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="51"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>


    <div className={classes.root}>
    <h3 className={classes.h2}>5.2 How much are these algorithmic suggestions <b>useful</b> for you?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="52"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>5.3 How much do you <b>understand</b> how this algorithm works?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="53"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>5.4 What do you understand about the algorithm's <b>logic</b>?</h3>  
      <TextField
        id="54"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>5.5 How much can you <b>control</b> the videos recommended to you by the algorithm?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="55"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>5.6 Which <b>strategies</b> do you use to influence the algorithm? (e.g., liking channels, subscribing..)</h3>  
      <TextField
        id="56"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>5.7 How much is the algorithm bringing you to videos you <b>do not like</b>?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="57"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>5.8 What kind of recommendations would you like to see <b>less</b> of?</h3>  
      <TextField
        id="58"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>5.9 What kind of recommendations would you like to see <b>more</b> of?</h3>  
      <TextField
        id="59"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <h3 className={classes.h2}>5.A There are <b>different types</b> of algorithmic recommendations on YouTube, not only the one described in the image at the top of this page.
     Which ones are more important / useful for you?</h3>
      <RadioGroup id="5A" defaultValue="NO" aria-label="algos">
        <FormControlLabel value="a" control={<Checkbox />} label="Homepage recommendations." />
        <FormControlLabel value="b" control={<Checkbox />} label="Sidebar recommendations, next to the video player." />
        <FormControlLabel value="c" control={<Checkbox />} label="Autoplay." />
        <FormControlLabel value="d" control={<Checkbox />} label="Search bar results." />
      </RadioGroup>

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


