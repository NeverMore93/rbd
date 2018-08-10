import React, { Component } from 'react';
import Logo from 'grommet/components/icons/Grommet';
import { Box, Timestamp, Paragraph, Image, Split, Label, Sidebar, Title, Menu, Anchor, Header } from 'grommet';
import Clock from 'react-digital-clock';


export default class NavSidebar extends Component {
  render() {
    const anchorStyle = { color: 'white', fontSize: '40', fontWeight: 'normal', margin: '30px' };
    const anchorBackgroundStyle = { backgroundColor: 'blue' };
    const titleStyle = { fontSize: '250%' };
    const clockStyle = { color: 'rgba(52, 52, 52, 0.8)' };
    return (
      <Box direction='column' align={'center'} style={{ width: '100%' }}>
        <Box direction='row' align={'left'}>
          <Logo />
          <span style={titleStyle}>惠州市道路桥梁勘察设计院</span>
          <Clock style={clockStyle} />
        </Box>
        <Box direction='row' style={anchorBackgroundStyle}>
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
