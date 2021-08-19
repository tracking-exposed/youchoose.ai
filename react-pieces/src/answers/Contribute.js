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
              {keys.map((key) => (
                <TableCell align="right">{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.sessionId}>
                {keys.map((key) => (
                  <TableCell align="right">{row[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Contribute;