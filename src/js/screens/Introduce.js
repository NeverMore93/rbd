import React, { Component } from 'react';
import { Box, Carousel, Paragraph, Image, Split, Label, Sidebar, Title, Menu, Anchor } from 'grommet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

export default class Introduce extends Component {
  render() {
    return (
      <Box direction='row' align={'center'} style={{ width: '80%' }}>
        <Tabs vertical={true} defaultTab='one' >
          <TabList>
            <Tab tabFor='one'>Tab 1</Tab>
            <Tab tabFor='two'>Tab 2</Tab>
            <Tab tabFor='three'>Tab 3</Tab>
          </TabList>
          <TabPanel tabId='one'>
            <p>Tab 1 content</p>
          </TabPanel>
          <TabPanel tabId='two'>
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel tabId='three'>
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
      </Box>

    );
  }
}
