import React, { Component } from 'react';
import { Box, Carousel, Card, Image, Heading, Label } from 'grommet';
import img1 from './../../img/1.jpg';
import img2 from './../../img/2.jpg';
import img3 from './../../img/3.jpg';

export default class Home extends Component {
  render() {
    const imageStyle = { width: '80%', height: '300px' };
    const CarouselStyle = { width: '80%', height: '300px', marginTop: '20px' };
    return (
      <Box align={'center'} style={{ width: '100%' }}>
        <Carousel style={CarouselStyle}>
          <Image src={img1} style={imageStyle} />
          <Image src={img2} style={imageStyle} />
          <Image src={img3} style={imageStyle} />
        </Carousel>
      </Box>
    );
  }
}

