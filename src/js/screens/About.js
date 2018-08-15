import React, { Component } from 'react';
import { Box, Table, TableRow, Image, Heading, Label, Paragraph } from 'grommet';
import { Map, Marker } from 'react-amap';

export default class About extends Component {
  render() {
    return (
      <Box align={'center'} style={{ width: '100%' }}>
        <br />
        <br />
        <Box align={'center'} style={{ padding: '10px' }} >
          <span style={{ width: '60%', fontSize: 'x-large' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;惠州市道路桥梁勘察设计院位于广东省惠州市。惠州地处东江之滨，粤东门户，广东省历史名城，先后荣获“中国最具幸福感城市”、“中国优秀旅游城市”、“全国文明城市”等称号。南临南海大亚湾，与深圳、香港毗邻，开放包容，崇文厚德，华侨众多，为客家侨都。惠州属珠三角经济区，数码和石化是惠州的两大经济支柱，有TCL、德赛、华阳等大型本土国有（控股）企业集团以及侨兴、富绅等本土民营企业集团，并先后引进了英荷壳牌、索尼、松下、东风本田、通用、三星、LG、飞利浦和中海油、中国联想等国内外著名厂商在惠州建立生产和研发基地。惠州经济保持平稳快速发展，GDP增速已高居广东全省第二位。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司成立于1963年，原为广东省惠州市公路管理局下属单位，2005年改制成为有限责任公司。目前已具有公路行业（公路）专业甲级、工程勘察专业类工程测量甲级、市政行业（排水、道路、桥梁工程）专业乙级、工程勘察专业类岩土工程（勘察）乙级、工程咨询乙级资质，是惠州市唯一的公路工程勘察设计甲级单位。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司拥有一支专业齐全、素质优良的技术团队。现有职工92人，其中高级工程师42人，工程师41人，国家一级注册结构工程师5人，国家注册土木工程师（岩土）2人，国家注册公用设备工程师（给水排水）3人，国家注册电气工程师（供配电）2人，注册咨询（投资）工程师7人。具有勘察设计大型工程项目--高等级公路、大型桥梁、隧道的丰富经验。<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;仅近10年来，公司就承担了高速公路勘察设计项目3项共152公里，一级公路51项共1275公里，大跨度桥梁10余座，大型互通立交16座，市政道路20项共295公里，隧道8座共6.5公里。先后有众多项目获得省、市级优秀勘察设计奖项，树立了良好的公共形象。<br />
          </span>
        </Box>
        <br />
        <br />
        <Box align={'center'} style={{ width: '60%' }} direction='row'>
          <Box style={{ padding: '30px' }}>
            <Box><span style={{ fontSize: 'x-large' }}>联系人：周先生</span></Box>
            <Box><span style={{ fontSize: 'x-large' }}>地&nbsp;&nbsp;址：惠州市惠沙堤12号</span></Box>
            <Box><span style={{ fontSize: 'x-large' }}>邮&nbsp;&nbsp;编：516001</span></Box>
            <Box><span style={{ fontSize: 'x-large' }}>座&nbsp;&nbsp;机：0752-2112610</span></Box>
            <Box><span style={{ fontSize: 'x-large' }}>邮&nbsp;&nbsp;箱：281949851@qq.com</span></Box>
          </Box>
          <Box style={{ padding: '30px' }}>
            <Box><span style={{ fontSize: 'x-large' }}>统一社会信用代码： 91441300779216592L</span></Box>
            <Box><span style={{ fontSize: 'x-large' }}>企业类型：有限责任公司(自然人投资或控股)</span></Box>
            <Box><span style={{ fontSize: 'x-large' }}>成立日期：2001年12月07日</span></Box>
          </Box>
        </Box>
        <br />
        <br />
        <Box align={'center'} style={{ width: '60%', height: '300px' }}>
          <Map amapkey={'1a32e9e3c0dc855de08e7984bd74085e'} >
            <Marker position={'39.9087', '116.3975'} />
          </Map>
        </Box>
      </Box>
    );
  }
}

