import React, { Component } from 'react';
import Logo from 'grommet/components/icons/Grommet';
import { Box, Timestamp, Paragraph, Image, Split, Label, Sidebar, Title, Menu, Anchor, Header } from 'grommet';

export default class NavSidebar extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    const { date } = this.state;
    const anchorStyle = { color: 'white', fontSize: '40', fontWeight: 'normal', margin: '3px 10px 3px 10px', padding: '5px' };
    const anchorBackgroundStyle = { backgroundColor: 'blue' };
    const titleStyle = { fontSize: '250%', marginRight: '100px' };
    return (
      <Box direction='column' align={'center'} style={{ width: '100%', padding: '10px' }}>
        <Box direction='row' align={'center'} style={{ padding: '10px' }}>
          <Logo />
          <span style={titleStyle}>惠州市道路桥梁勘察设计院</span>
          <Timestamp value={date} />
        </Box>
        <Box direction='row' align={'center'} alignContent={'center'} style={anchorBackgroundStyle} >
          <Anchor key={'home'} path={'/home'} label={'网站首页'} style={anchorStyle} />
          <Anchor key={'introduce'} path={'/introduce'} label={'企业介绍'} style={anchorStyle} />
          <Anchor key={'about'} path={'/about'} label={'关于我们'} style={anchorStyle} />
          <Anchor key={'overview'} path={'/overview'} label={'公司概况'} style={anchorStyle} />
          <Anchor key={'announcement'} path={'/announcement'} label={'通知公告'} style={anchorStyle} />
        </Box>
      </Box>
    );
  }
}
