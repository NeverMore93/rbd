import React, { Component } from 'react';
import { Box, Carousel, Paragraph, Image, Split, Label, Sidebar, Title, Menu, Anchor } from 'grommet';
import { Tabs } from 'antd';
// import 'antd/lib/tabs/style/css';
// import 'antd/dist/antd.css';


const TabPane = Tabs.TabPane;

export default class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  _showContent(key) {
    this.setState({
      contentKey: key
    });
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey='1' tabPosition={'left'} style={{ height: 220 }} >
          <TabPane tab='Tab 1' key='1'><Label>Content of tab 1</Label></TabPane>
          <TabPane tab='Tab 2' key='2'><Label>Content of tab 2</Label></TabPane>
          <TabPane tab='Tab 3' key='3'><Label>Content of tab 3</Label></TabPane>
          <TabPane tab='Tab 4' key='4'><Label>Content of tab 4</Label></TabPane>
        </Tabs>
      </div>
    );
  }
}
