import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import _ from 'lodash';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
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

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.0 How do you feel about YouTube recommendations?</h3>  
      <TextField
        id="10"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Tell us your feelings here:"
        variant="filled"
      />
    </div>


    <div className={classes.root}>
    <h3 className={classes.h2}>1.1 Are these algorithmic suggestions useful for you as a <b>user?</b></h3>  
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={null}
        marks={marks}
        id="11"
        min={1}
        max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>1.2 Are these algorithmic suggestions useful for you as a <b>content creator?</b></h3>  
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={null}
        marks={marks}
        id="12"
        min={1}
        max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>1.3 How often do you <b>understand</b> how this algorithm works?</h3>  
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={-1}
        marks={marks}
        id="13"
        min={1}
        max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.4 What do you understand about the algorithm's <b>logic</b>?</h3>  
      <TextField
        id="14"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>1.5 How much can you <b>control</b> the videos recommended to your audience by the algorithm?</h3>  
      <PrettoSlider 
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="15"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.6 Which strategies do you use to <b>influence</b> the algorithm and reach your audience?</h3>  
      <TextField
        id="16"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>1.7 Do you think the algorithm is <b>fairly</b> promoting your videos?</h3>  
      <PrettoSlider 
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks}
       id="17"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>
 
    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.8 When do you think the algorithm <b>favors</b> your content, and when do you think it <b>demotes</b> or censors it?</h3>  
      <TextField
        id="18"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Make some example here:"
        variant="filled"
      />
    </div>

    <h3 className={classes.h2}>1.9 There are <b>different types</b> of algorithmic recommendations on YouTube, not only the one described in the image at the top of this page.
     Which ones are more important / useful for you?</h3>
      <RadioGroup id="19" defaultValue="NO" aria-label="algos">
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