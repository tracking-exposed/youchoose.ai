import _ from 'lodash';
import React from 'react';
import Button from '@material-ui/core/Button';

const REDIRECT_PAGE_URL = "/thanks";

function sendData(a, b) {

  const text = _.compact(_.map($("input[type='text']"), function(inputt, textOrder) {
    let value = inputt.value;
    if(!value) return null;
    return {
      textOrder,
      value
    };
  }));
  /*
  const checked = _.first(_.compact(_.map($("input"), function(e) {
    if(!e.checked) return;
    return { 'inscribedBy': e.value };
  })));
  collection.push(checked);
  */

  const collection = text;
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

export default function PaginatedSubmit() {

  return (
    <div className="row align-items-center justify-content-center">
      <br />
      <Button
        variant="contained" color="secondary"
        onClick={sendData}>
        Done! Send my answers!
      </Button>
      <h4>
        <br />
        Thanks for your help.
        Free software are made by community, you are now part of ours!
      </h4>
    </div>
  );
}
