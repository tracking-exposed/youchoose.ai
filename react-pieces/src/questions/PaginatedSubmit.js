import _ from 'lodash';

const randomInit = {};

export default function sendData(qName) {
  // qName is questionnaire name, as this code is invoked by any survey.

  if(!randomInit.number)
    randomInit.number = _.random(2, 0xffffff) * _.random(2, 0xfffff);

  /* cut off unanswered questions */
  const texts = _.compact(_.map($("input[type='text']"), function(inputt, textOrder) {
    if(!inputt.value || !inputt.value.length)
      return null;
    return {
      id: inputt.id,
      value: inputt.value,
    };
  }));

  const sliders = _.compact(_.map($('[role="slider"]'), function(slider, sliderOrder) {
    if(slider.getAttribute('aria-valuenow') == 0)
      return null;
    return {
      value: slider.getAttribute('aria-valuenow'),
      id: slider.parentElement.id,
    };
  }));

  const radios = document.querySelectorAll('input[type="radio"]');
  const radio = _.compact(_.map(radios, function(r) {
    if(!r.checked)
      return null;
    return {
      id: r.parentElement.parentElement.parentElement.parentElement.id,
      value: r.value,
    };
  }));

  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  const checkboxes = _.map(checked, function(cbox) {
    return {
      id: cbox.parentElement.parentElement.parentElement.parentElement.id,
      value: cbox.value
    };
  });

  const reference = { from: window.location.hash };
  const url = window.location.href.match(/localhost/) ?
    `${process.env.API_SERVER}/api/v1/recordAnswers`: '/api/v1/recordAnswers';

  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      qName,
      texts,
      radio,
      checkboxes,
      sliders,
      reference,
      sessionId: randomInit.number
    })
  }).then(function(responsed) {
    if(responsed.status !== 200) {
      console.error("error in post:", responsed)
    } else {
      console.log("success in post:", responsed);
    }
  });
}
