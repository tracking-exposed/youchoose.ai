import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';

class Contribute extends React.Component{

  constructor (props) {
    super(props)
  }

  render () {
    const rows = this.props.data;
    return (
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ref</TableCell>
              <TableCell align="right">optIn</TableCell>
              <TableCell align="right">lastUpdate</TableCell>
              <TableCell align="right">version</TableCell>
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
              <TableCell align="right">22</TableCell>
              <TableCell align="right">23</TableCell>
              <TableCell align="right">24</TableCell>
              <TableCell align="right">25</TableCell>
              <TableCell align="right">26</TableCell>
              <TableCell align="right">27</TableCell>
              <TableCell align="right">31</TableCell>
              <TableCell align="right">32</TableCell>
              <TableCell align="right">33</TableCell>
              <TableCell align="right">34</TableCell>
              <TableCell align="right">35</TableCell>
              <TableCell align="right">36</TableCell>
              <TableCell align="right">41</TableCell>
              <TableCell align="right">42</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.sessionId}>
                <TableCell align="right">{row.reference}</TableCell>
                <TableCell align="right">{row['optIn']}</TableCell>
                <TableCell align="right">{row['lastUpdate']}</TableCell>
                <TableCell align="right">{row['version']}</TableCell>
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
                <TableCell align="right">{row['22']}</TableCell>
                <TableCell align="right">{row['23']}</TableCell>
                <TableCell align="right">{row['24']}</TableCell>
                <TableCell align="right">{row['25']}</TableCell>
                <TableCell align="right">{row['26']}</TableCell>
                <TableCell align="right">{row['27']}</TableCell>
                <TableCell align="right">{row['31']}</TableCell>
                <TableCell align="right">{row['32']}</TableCell>
                <TableCell align="right">{row['33']}</TableCell>
                <TableCell align="right">{row['34']}</TableCell>
                <TableCell align="right">{row['35']}</TableCell>
                <TableCell align="right">{row['36']}</TableCell>
                <TableCell align="right">{row['41']}</TableCell>
                <TableCell align="right">{row['42']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Contribute;