import React, { Component } from 'react';
import { Box, Carousel, Paragraph, Image, Split, Label, Sidebar, Title, Menu, Anchor } from 'grommet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs/es';
import 'react-web-tabs/dist/react-web-tabs.css';

export default class Introduce extends Component {
  render() {
    return (
      <Box direction='row' align={'center'} style={{ width: '60%' }}>
        <Box style={{ width: '20%' }}>
          <Label>关于我们</Label>
          <Label>关于我们</Label>
          <Label>关于我们</Label>
        </Box>
        <Box style={{ width: '80%' }}>
          right
        </Box>
      </Box>
    );
  }
}
