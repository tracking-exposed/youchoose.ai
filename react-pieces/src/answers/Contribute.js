import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/*11: "62"
  12: "77"
  13: "forcaccia"
  14: "31"
  15: "forcaccia "
  16: "66"
  17: "forcacciaforcaccia"
  18: "13"
  19: "forcaccia forcaccia forcaccia"
  21: "82"
  22: "forcaccia forcaccia"
  23: "16"
  24: "forcaccia forcaccia"
  25: "73"
  26: "31"
  27: "forcaccia"
  31: "74"
  32: "20"
  33: "69"
  34: "forcaccia "
  35: "forcaccia forcaccia"
  36: "37"
  41: "forcaccia"
  42: "forcaccia"
  fifth: Array(4) [ 1, 2, 3, … ]
  lastUpdate: "2021-07-30T12:18:17.543Z"
  optIn: true
  reference: "#web" */
class Contribute extends React.Component{

  constructor (props) {
    super(props)
  }

  render () {
    const rows = this.props.data;
    console.log(rows);
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ref</TableCell>
              <TableCell align="right">optIn</TableCell>
              <TableCell align="right">lastUpdate</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">12</TableCell>
              <TableCell align="right">13</TableCell>
              <TableCell align="right">14</TableCell>
              <TableCell align="right">15</TableCell>
              <TableCell align="right">16</TableCell>
              <TableCell align="right">17</TableCell>
              <TableCell align="right">18</TableCell>
              <TableCell align="right">19</TableCell>
              <TableCell align="right">21</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.sessionId}>
                <TableCell align="right">{row.reference}</TableCell>
                <TableCell align="right">{row['optIn']}</TableCell>
                <TableCell align="right">{row['lastUpdate']}</TableCell>
                <TableCell align="right">{row['11']}</TableCell>
                <TableCell align="right">{row['12']}</TableCell>
                <TableCell align="right">{row['13']}</TableCell>
                <TableCell align="right">{row['14']}</TableCell>
                <TableCell align="right">{row['15']}</TableCell>
                <TableCell align="right">{row['16']}</TableCell>
                <TableCell align="right">{row['17']}</TableCell>
                <TableCell align="right">{row['18']}</TableCell>
                <TableCell align="right">{row['19']}</TableCell>
                <TableCell align="right">{row['21']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Contribute;