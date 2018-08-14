import React, { Component } from 'react';
import { Box, Carousel, Card, Image, Heading, Label, Tiles, Tile } from 'grommet';
import img1 from './../../img/1.jpg';
import img2 from './../../img/2.jpg';
import img3 from './../../img/3.jpg';
import thumb1 from './../../img/thumb1.jpg';
import thumb2 from './../../img/thumb2.jpg';
import thumb3 from './../../img/thumb3.jpg';
import thumb4 from './../../img/thumb4.jpg';

export default class Home extends Component {
  render() {
    const imageStyle = { width: '80%', height: '300px' };
    const CarouselStyle = { width: '80%', height: '300px', marginTop: '20px' };
    return (
      <Box align={'center'} style={{ width: '100%' }}>
        <Box align={'center'} style={{ width: '100%' }}>
          <Carousel style={CarouselStyle}>
            <Image src={img1} style={imageStyle} />
            <Image src={img2} style={imageStyle} />
            <Image src={img3} style={imageStyle} />
          </Carousel>
        </Box>
        <Box align={'center'} style={{ padding: '30px' }}>
          <Tiles>
            <Tile style={{ padding: '30px' }}>
              <Card thumbnail={thumb1} heading='Sample Heading' label='Sample Label' description='Sample description providing more details.' />
            </Tile>
            <Tile style={{ padding: '30px' }}>
              <Card thumbnail={thumb2} heading='Sample Heading' label='Sample Label' description='Sample description providing more details.' />
            </Tile>
            <Tile style={{ padding: '30px' }}>
              <Card thumbnail={thumb3} heading='Sample Heading' label='Sample Label' description='Sample description providing more details.' />
            </Tile>
            <Tile style={{ padding: '30px' }}>
              <Card thumbnail={thumb4} heading='Sample Heading' label='Sample Label' description='Sample description providing more details.' />
            </Tile>
            <Tile style={{ padding: '30px' }}>
              <Card thumbnail={thumb1} heading='Sample Heading' label='Sample Label' description='Sample description providing more details.' />
            </Tile>
            <Tile style={{ padding: '30px' }}>
              <Card thumbnail={thumb2} heading='Sample Heading' label='Sample Label' description='Sample description providing more details.' />
            </Tile>
            <Tile style={{ padding: '30px' }}>
              <Card thumbnail={thumb3} heading='Sample Heading' label='Sample Label' description='Sample description providing more details.' />
            </Tile>
            <Tile style={{ padding: '30px' }}>
              <Card thumbnail={thumb4} heading='Sample Heading' label='Sample Label' description='Sample description providing more details.' />
            </Tile>
          </Tiles>
        </Box>

      </Box>
    );
  }
}

