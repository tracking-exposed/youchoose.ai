import React from 'react';
import TextField from '@material-ui/core/TextField';

import {withStyles, makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

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


const marks2 = [
  {
    value: 1,
    label: 'Much worse',
  },
  {
    value: 2,
    //label: 'Somewhat worse',
  }, 
  {
    value: 3,
    label: 'About the same',
  },
  {
    value: 4,
    //label: 'Somewhat better',
  },
  {
    value: 5,
    label: 'Much better',
  },
];

const PrettoSlider = withStyles({
  root: {
    color: '#e33180',
    height: 20,
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


export default function QuestionPage2() {

  const classes = useStyles();

  return (
  <div className={classes.root}>
  <FormControl component="fieldset">

    <h3 className=" pink">
    <br></br>
    We want to enable Youtubers to suggest videos to their audience, replacing the ones suggested by Youtube's algorithm when watching the content they upload.
    </h3>

    <div className="row entry">
      <h3 className="mb-2 "></h3>
        <div className="col-sm-8">
          <figure>
            <img width="100%" src="/images/youchoose_recommendations.svg" />
          </figure>
        </div>
      <div className="col-sm-4 position-relative">
        <p className="mt-4 mb-4">
        This is what your audience will see with Youchoose: on your videos, they will have a new column alternative to the algorithmic recommendations, with the videos and external links you choose for them.
        </p>
      </div>
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>2.1 How much do you think this software could be <b>helpful</b> for you compared with standard Youtube suggestions? </h3>  
      <PrettoSlider 
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks2}
       id="21"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        id="22"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Tell us why or make some example here: "
        variant="filled"
      />
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>2.3 How much do you think this could be <b>interesting</b> for your audience compared with standard Youtube suggestions?</h3>
      <PrettoSlider
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks2}
       id="23"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>

    <div className={classes.root} noValidate autoComplete="off">
      <TextField
        id="24"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Tell us why or make some example here:"
        variant="filled"
      />
    </div>


    <h3 className=" pink">
    <br></br>
    To allow content-creators to select their recommendations, we can build two systems. <br></br>
     The first options is to ask content creators to upload the <b> links for recommendations in the video description,</b> which the extension can scrape directly.<br></br>
     The second is to create a <b> dedicated dashboard, </b> where content creators can log in to select their recommendations.
    </h3>

    <div className="row entry">
      <h3 className="mb-2 "></h3>
        <div className="col-sm-8">
          <figure>
            <img width="100%" src="/images/youchoose_dashboard.png" />
          </figure>
        </div>
      <div className="col-sm-4 position-relative">
        <p className="mt-4 mb-4">
          This is an example of the youtubers' dashboard. Here you can choose which videos to suggest to your audience.
        </p>
      </div>
    </div>

    <div className={classes.root}>
    <h3 className={classes.h2}>2.5 How much do you like the idea of having a personal <b>dashboard</b> compared with the idea of using the videos' <b>description</b> to declare which videos will be recommended to your audience?</h3>  
      <PrettoSlider 
       valueLabelDisplay="auto"
       aria-label="pretto slider"
       defaultValue={0}
       marks={marks2}
       id="25"
       min={1}
       max={5}
      />
      <div className={classes.margin} />
    </div>



    <div className={classes.root} noValidate autoComplete="off">
    <h3 className={classes.h2}>2.6 Do you have any <b>thoughts</b> about how the content creator interface could be developed to answer your needs? </h3>  
      <TextField
        id="26"
        style={{ margin: 10 }}
        fullWidth
        margin="normal"
        color='secondary'
        label="Write them down here:"
        variant="filled"
      />
    </div>

    <div>
    <br />
    <br />
     <Button variant='outlined' color='secondary' size="large" onClick={clickOn} target-id="full-width-tab-2">
      Next
     </Button>  
    </div>


  </FormControl>
	</div> 
  );
}

/*  to add the IFRATE:   <iframe  width="100%" height="750" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCCHrDXWJ167PV5AnjpmTRa%2Ftabs%3Fnode-id%3D30%253A3619%26scaling%3Ddown-to-fit" allowfullscreen></iframe>  */
