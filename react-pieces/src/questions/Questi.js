import _ from 'lodash';

import React from 'react';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

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

      <h2 className={classes.h2}>1. Per quale servizio lavori?</h2>  
      <TextField
        id="first"
        style={{ margin: 16 }}
        label="Se lavori, o hai lavorato, per più di un'azienda, puoi indicarle tutte"
        helperText="Questo ci è utile per capire quali sono le aziende più abusive, e valutare su quali concentrarci per prima"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <h2 className={classes.h2}>2. In che modo ti sei iscritto al servizio?</h2>
      <RadioGroup id="second" aria-label="iscrizione" name="iscrizione">
        <FormControlLabel id="viaapp" value="app" control={<Radio />} label="Iscrizione via App" />
        <FormControlLabel id="viameeting" value="incontro" control={<Radio />} label="Incontro personale con cooperativa e iscrizione presso il servizio" />
      </RadioGroup>

      <TextField
        id="followup"
        label="Questo ci è utile a capire se hai firmato qualcosa, o no."
        style={{ margin: 16 }}
        helperText="Nel caso tu avessi firmato qualcosa di specifico, per piacere descrivi l'accordo"
        fullWidth
        margin="normal"
        defaultValue="(puoi raccontare qualunque tipo di vincolo o obbligo che ti è stato dato)"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <h2 className={classes.h2}>
        3. Puoi fornire degli esempi di decisioni automatiche che hanno avuto un effetto significativo sul tuo lavoro o sulla tua vita?
      </h2>
      <p>
        Ad esempio: Valutazione media errata; Mancata assegnazione consegne; Sospensione account; Chiusura account.
        <br />
        Qualcosa che per la compagnia abbia il valore di una <b>sanzione</b>.
      </p>
      <TextField
        id="third"
        label="Descrivi il problema, e se ne hai conoscenza, anche quale comportamento è stato sanzionato"
        style={{ margin: 16 }}
        placeholder=""
        helperText="Anche un trattamento sfavorevole comparato ad altri colleghi può essere un elemento di interresse"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <h2 className={classes.h2}>
        4. Ti avevano informato dell'esistenza della sanzione? La compagnia ti ha comunicato qualcosa?
      </h2>
      <TextField
        id="fourth"
        label=""
        style={{ margin: 16 }}
        placeholder=""
        helperText="Ci interessa sapere se tu ed i tuoi colleghi erano adeguatamente informati prima che questo succedesse, e se la sanzione è inappellabile"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <h2 className={classes.h2}>
        5. Come potevi contestare la decisione?
      </h2>
      <TextField
        id="fifth"
        label="Ad esempio: tramite app, mandando una mail, chiamando il call-center, etc..."
        style={{ margin: 16 }}
        placeholder=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <h2 className={classes.h2}>
        6. Hai provato anche a contestare la sanzione in altri modi?
      </h2> 
      <TextField
        id="sixth"
        style={{ margin: 16 }}
        placeholder=""
        helperText="Anche se ne hai parlato ad un giornale, ad un avvocato o a dei sindacati, ci interessa sapere come è andata"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <h2 className={classes.h2}>
        7. L’azienda ha risposto alla tua richiesta?
      </h2> 
      <TextField
        id="seventh"
        style={{ margin: 16 }}
        placeholder=""
        helperText="Sia in modo ufficiale che non."
        fullWidth
        margin="normal"
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