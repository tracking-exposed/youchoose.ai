import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Answers from './Answers';

const Zimplon = {
    fontFamily: 'Trex-Regular',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('Trex-Regular'),
        url('Trex-Regular.ttf') format('ttf')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Trex-Regular'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [Zimplon],
            },
        },
    },
});


const LOCALHOST_SERVER = 'http://localhost:9000';

function buildCSVlinks(subject) {
  if (window.location.origin.match(/localhost/))
    return `${LOCALHOST_SERVER}/api/v1/${subject}`;
  return `/api/v1/${subject}/`;
}

function main () {
    const key = window.location.hash ? window.location.hash.substr(1) : "";
    const JSONurl = buildCSVlinks('retrieveAnswers/' + key);
    if(!key.length) {
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <hr />
                <h1>Not found authorization key!<br />(Consider begging the server 🙏)</h1>
            </ThemeProvider>, document.getElementById('main')
        );
    } else {
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <h4>
                    <a href={buildCSVlinks('retrieveAnswersCSV/youtubers/' + key)} target="_blank">
                        [Youtubers] answers in CSV format
                    </a>
                    ― <a href={buildCSVlinks('retrieveAnswersCSV/watchers/' + key)} target="_blank">
                        [Users] answers in CSV format
                    </a>
                    ― <a href={buildCSVlinks('retrieveAnswers/' + key)} target="_blank">
                        mixed JSON </a>
                </h4>
                <Answers pkey={key} url={JSONurl}/>
            </ThemeProvider>, document.getElementById('main')
        );
    }
}

/* this is automatically called when 'js/generated/searches.js' */
main();
