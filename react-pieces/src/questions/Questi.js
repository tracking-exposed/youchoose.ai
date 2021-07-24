import _ from 'lodash';

import React from 'react';
import TextField from '@material-ui/core/TextField';

import {withStyles, makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

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

const idList = [
  'first',
  'second',
  'followup',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh'
];
const REDIRECT_PAGE_URL = "/thanks";

function sendData(a, b) {

  const collection = _.compact(_.map(idList, function(id) {
    let value = $("#" + id)[0].value;
    if(!value) return null;
    return {
      htmlId: id,
      value
    };
  }));
  const checked = _.first(_.compact(_.map($("input"), function(e) {
    if(!e.checked) return;
    return { 'inscribedBy': e.value };
  })));
  collection.push(checked);
  collection.push({ from: window.location.hash });
  console.log(collection);

  const url = window.location.href.match(/localhost/) ? 'http://localhost:12000/api/v1/recordAnswers' : '/api/v1/recordAnswers';
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'       // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(collection) // body data type must match "Content-Type" header
  }).then(function(responsed) {
    if(responsed.status !== 200) {
      console.error("error in post:", responsed)
    } else {
      console.log("success in post:", responsed);
      window.location = REDIRECT_PAGE_URL;
    }
  });
}

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



export default function Questi() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <FormControl component="fieldset">

    <div className={classes.root}>
    <h3 className={classes.h2}>1.1 Are these algorithmicsuggestions useful for you as a users?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>1.2 How much do you understand how this algorithm works?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.2-B What do you understand about the algorithm's logics?</h3>  
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
    <h3 className={classes.h2}>1.3 How much can you control the videos reccomended to your audience by the algorithm?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.3-B Which strategies you use to influence the algorithm?</h3>  
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
    <h3 className={classes.h2}>1.4 How much is the algorithm desciminating you as a youtuber? </h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.4-B If you have been penalized by the algorithm, tell use how and how you find it out.</h3>  
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
    <h3 className={classes.h2}>1.5 Do you know what shadow-banning is? </h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>1.5-B Can you tell us if you know some channels that have been shadow-banned and how you/them find it out? </h3>  
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


<hr class="MuiDivider-root"></hr>
<hr class="MuiDivider-root"></hr>

This goes to the second page (/q2/)

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


<hr class="MuiDivider-root"></hr>
<hr class="MuiDivider-root"></hr>

This goes to the third page (/q3/)

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



 <hr class="MuiDivider-root"></hr>
<hr class="MuiDivider-root"></hr>

This goes to the third page (/q4/)

    <div className={classes.root}>
    <h3 className={classes.h2}>4.1 Do you know what shadow-ban is?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>4.2 How much are you scared to be shadow-banned?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>4.3 How much are you interested in a shadow-ban tester?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>4.4 Do you know any case of shadow-ban happened to you or other youtubers?</h3>  
      <TextField
        id="standard-secondary"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Could you please list their channel here plase?"
        variant="filled"
      />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>4.5 What are the evidences that you / other youtubers provided about the cases? </h3>  
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
    <h3 className={classes.h2}>4.6 How much are you interested in a shadow-ban tester?</h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>4.7 We plan to use collaborative data collections (users will communicate us what recommended videos they see and we will provide statistics about the shadow-ban).
    How much do you think your audience will beinterested in help? </h3>  
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={50} marks={marks} />
      <div className={classes.margin} />
    </div>

<hr class="MuiDivider-root"></hr>
<hr class="MuiDivider-root"></hr>

This goes to the third page (/q5/)

    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>6.1 If you have any suggestions or advice... </h3>  
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

<div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>6.2 f you are interested in the project, leave here your email, we will send you <b> just one email</b>  updating you on the day we will lunch the tool. </h3>  
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

    <h3 className={classes.h2}>Tell us if you are available for an online interview (30 minutes max). We will use this time to tell you more about the tool, to think together about the possible future of this software and the community that will grow around it.</h3>
      <RadioGroup id="second" aria-label="iscrizione" name="iscrizione">
        <FormControlLabel id="1.2_1" value="1" control={<Radio />} label="Yes, you can contact me for an interview" />
        <FormControlLabel id="1.2_2" value="2" control={<Radio />} label="No thanks." />
      </RadioGroup>


    </FormControl>



	    <div className="row align-items-center justify-content-center">
	      <br />
	      <Button
	        variant="contained" color="primary" 
	        onClick={sendData}>
	        Done! Send my answers!
	      </Button>
	      <h4>
	        <br />
	        Thanks for your help.
          Free software are made by community, you are now part of ours!
	      </h4>
	    </div>
	    </div> 
	  );
	}
