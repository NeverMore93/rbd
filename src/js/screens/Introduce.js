import React, { Component } from 'react';
import { Box, Carousel, Paragraph, Image, Split, Label, Sidebar, Title, Menu, Anchor } from 'grommet';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs/lib';

export default class Introduce extends Component {
  render() {
    return (
      <Box direction='row' align={'center'} style={{ width: '80%' }}>
        <Tabs defaultTab='vertical-tab-one' vertical>
          <TabList>
            <Tab tabFor='vertical-tab-one'>Tab 1</Tab>
            <Tab tabFor='vertical-tab-two'>Tab 2</Tab>
            <Tab tabFor='vertical-tab-three'>Tab 3</Tab>
          </TabList>
          <TabPanel tabId='vertical-tab-one'>
            <p>Tab 1 content</p>
          </TabPanel>
          <TabPanel tabId='vertical-tab-two'>
            <p>Tab 2 content</p>
          </TabPanel>
          <TabPanel tabId='vertical-tab-three'>
            <p>Tab 3 content</p>
          </TabPanel>
        </Tabs>
      </Box>

    );
  }
}
