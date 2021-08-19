import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Contribute extends React.Component{

  constructor (props) {
    super(props)
  }

  render () {
    const kind = this.props.kind;
    const rows = this.props.data;
    const keys = _.uniq(_.flatten(_.map(rows, _.keys)));

    console.log(kind, rows, keys);

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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.sessionId}>
                <TableCell align="right">{row.reference}</TableCell>
                <TableCell align="right">{row['optIn']}</TableCell>
                <TableCell align="right" alt={row['lastUpdate']}>{row['timeago']}</TableCell>
                <TableCell align="right">{row['version']}</TableCell>
                <TableCell align="right">{row['11']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Contribute;