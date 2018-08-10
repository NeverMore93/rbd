import React, { Component } from 'react';
import { Box, Carousel, Paragraph, Image, Split, Label, Sidebar, Title, Menu, Anchor } from 'grommet';


export default class Introduce extends Component {
  render() {
    return (
      <Box align={'center'} style={{ width: '80%' }}>
        <Split>
          <Box justify='center' align='center' pad='medium'>
            Left Side
          </Box>
          <Box justify='center' align='center' pad='medium'>
            Right Side
          </Box>
        </Split>
      </Box>
    );
  }
}
