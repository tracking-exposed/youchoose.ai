import React from 'react';
import Button from '@material-ui/core/Button';

export default function FinalButtons(props) {
  console.log(props);

  function clickOn(e) {
    const tid = e.currentTarget.getAttribute('target-id');
    e.preventDefault();
    document.getElementById(tid).click();
    document.getElementById(tid).scrollIntoView();
  }

  return (
    <div>
    <br />
    <br />
    <Button variant={props.from == "1" ? "link" : "contained" } onClick={clickOn} target-id="full-width-tab-0">
      1, on recommendations
    </Button>
    <Button variant={props.from == "2" ? "link" : "contained" } onClick={clickOn} target-id="full-width-tab-1">
      2, for youtubers
    </Button>
    <Button variant={props.from == "3" ? "link" : "contained" } onClick={clickOn} target-id="full-width-tab-2">
      3, to understand more
    </Button>
    <Button variant={props.from == "4" ? "link" : "contained" } onClick={clickOn} target-id="full-width-tab-3">
      4, on shadowban
    </Button>
    <Button variant="contained" onClick={clickOn} target-id="full-width-tab-4"
      color={props.from == "5" ? "secondary" : "" }>
      {props.from == "5" ? "Submit!" : "5, to finish" } 
    </Button>
  </div>
  );
}
