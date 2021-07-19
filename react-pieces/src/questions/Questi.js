import _ from 'lodash';

import React from 'react';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

export default function Questi() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <FormControl component="fieldset">
      <h4 className={classes.h2}>1.1 Are these suggestions usefull for you?</h4>  
      <TextField
        id="first"
        style={{ margin: 16 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />


      <h4 className={classes.h2}>1.2 How much do you understand how it works?</h4>
      <RadioGroup id="second" aria-label="iscrizione" name="iscrizione">
        <FormControlLabel id="1.2_1" value="1" control={<Radio />} label="Not really" />
        <FormControlLabel id="1.2_2" value="2" control={<Radio />} label="Somehow" />
        <FormControlLabel id="1.2_7" value="6" control={<Radio />} label="A lot" />
      </RadioGroup>

      <TextField
        id="followup"
        label="If there is something specif you understand/don't understand, you can write it here."
        style={{ margin: 16 }}
        fullWidth
        margin="normal"
        defaultValue="I understand the algorithm when...."
        InputLabelProps={{
          shrink: true,
        }}
      />
        
    </FormControl>



	    <div className="row align-items-center justify-content-center">
	      <br />
	      <Button
	        variant="contained" color="primary" 
	        onClick={sendData}>
	        Fatto, Invia le risposte!
	      </Button>
	      <h4>
	        <br />
	        * Le informazioni saranno conservate per un tempo massimo di 6 mesi, non sono associate ad alcun dato personale, ed il loro scopo è di definire verso quali aziende concentrare i nostri sforzi.
	      </h4>
	    </div>
	    </div> 
	  );
	}
