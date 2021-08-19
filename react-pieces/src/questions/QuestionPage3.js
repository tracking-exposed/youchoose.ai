import _ from 'lodash';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
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
    One of the missions of our project is to make Youtube's algorithm more accountable. <br></br>
    That's why we decided to develop a <b> Shadow-ban tester </b>  
    to better understand this kind of opaque censorship and to reveal it.
    </h3>

    <h3 className={classes.h2}>3.1 Do you know what <b>shadow-ban</b> is? </h3>
      <RadioGroup id="31" aria-label="shadowban">
        <FormControlLabel value="a" control={<Radio />} label="Yes" />
        <FormControlLabel value="b" control={<Radio />} label="No" />
        <FormControlLabel value="c" control={<Radio />} label="I heard about it, but I do not really know what it is." />
      </RadioGroup>

    <div className={classes.root}>
    <h3 className={classes.h2}>3.2 How much are you <b>scared</b> to be shadow-banned?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks3}
       id="32"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>3.3 How much are you <b>interested</b> in a tool that can detect when a channel is being shadow banned (shadow-ban tester)?</h3>  
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks3}
       id="33"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>3.4 Do you know of any <b>case</b> of shadow-ban that happened to you or other Youtubers?</h3>  
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
    <h3 className={classes.h2}>3.5 What is the <b>evidence</b> that you / other Youtubers provided about the cases? </h3>  
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
   Would you like to <b>ask your audience</b> for help? </h3>
      <RadioGroup id="36" aria-label="datasharing">
        <FormControlLabel value="a" control={<Radio />} label="Yes" />
        <FormControlLabel value="b" control={<Radio />} label="No" />
      </RadioGroup>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}></h3>  
      <TextField
        id="37"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="What are your main concern about this request?"
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
