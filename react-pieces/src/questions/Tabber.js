import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import sendData from './PaginatedSubmit';
import QuestionPage1 from './QuestionPage1';
import QuestionPage2 from './QuestionPage2';
import QuestionPage3 from './QuestionPage3';
import QuestionPage4 from './QuestionPage4';
import QuestionPage5 from './QuestionPage5';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper ,
    display: 'flex',
    height: '100%',
  /*lenght: '1000px',*/
  },
  tabs: {
    borderRight: `100px solid`, /*1px solid ${theme.palette.divider}*/
  },
}));


export default function FullWidthTabs() {
  const classes = useStyles();
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    sendData();
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
    <AppBar position="absolute" color="default">
      <Tabs
      /*  orientation="vertical" */
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
        /*className={classes.tabs}*/
      >
          <Tab label="Page One" {...a11yProps(0)} />
          <Tab label="Page Two" {...a11yProps(1)} />
          <Tab label="Page Three" {...a11yProps(2)} />
          <Tab label="Page Four" {...a11yProps(3)} />
          <Tab label="Page Five" {...a11yProps(4)} />
      </Tabs>
      </AppBar>
     <SwipeableViews
        axis={ /* theme.direction === 'rtl' ? 'x-reverse' : 'x' */ 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
       <TabPanel value={value} index={0} dir={'ltr' /* theme.direction */}><QuestionPage1 /></TabPanel>
       <TabPanel value={value} index={1} dir={'ltr' /* theme.direction */}><QuestionPage2 /></TabPanel>
       <TabPanel value={value} index={2} dir={'ltr' /* theme.direction */}><QuestionPage3 /></TabPanel>
       <TabPanel value={value} index={3} dir={'ltr' /* theme.direction */}><QuestionPage4 /></TabPanel>
       <TabPanel value={value} index={4} dir={'ltr' /* theme.direction */}><QuestionPage5 /></TabPanel>
    </SwipeableViews>
    </div>
  );
}
