import React, { Component } from 'react';
import { Box, Table, TableRow, Image, Heading, Label } from 'grommet';

export default class About extends Component {
  render() {
    return (
      <Box align={'center'} style={{ width: '100%' }}>
        <TableRow>
          <td> 1 </td>
          <td> Alan </td>
          <td className='secondary'> plays accordion </td>
        </TableRow>
      </Box>
    );
  }
}

