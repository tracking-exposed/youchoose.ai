import _ from 'lodash';
import React from 'react';
import Button from '@material-ui/core/Button';

const REDIRECT_PAGE_URL = "/thanks";

function sendData(a, b) {

  const textColl = _.map($("input[type='text']"), function(inputt, textOrder) {
    return {
      textOrder,
      id: inputt.id,
      value: inputt.value,
    };
  });

  const slidersColl = _.map($('[role="slider"]'), function(slider, sliderOrder) {
    return {
      value: slider.getAttribute('aria-valuenow'),
      id: slider.id,
      sliderOrder,
    };
  });

  /*
  const checked = _.first(_.compact(_.map($("input"), function(e) {
    if(!e.checked) return;
    return { 'inscribedBy': e.value };
  })));
  collection.push(checked);
  */

  const reference = { from: window.location.hash };

  const url = window.location.href.match(/localhost/) ?
    `${process.env.API_SERVER}/api/v1/recordAnswers`: '/api/v1/recordAnswers';
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
    body: JSON.stringify({ textColl, slidersColl, reference }) // body data type must match "Content-Type" header
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
