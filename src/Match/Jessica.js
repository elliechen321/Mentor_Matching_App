import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
         <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://static1.squarespace.com/static/572e050c4d088ea3a8f0ac9d/t/587451909de4bb0b7ed2f185/1484018070394/Acting+Headshots+Atlanta-2001.jpg?format=1500w'}} />
                <Body>
                  <Text>Jessica</Text>
                  <Text note>Front End Web Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://p.motionelements.com/stock-video/video-backgrounds/me7135943-abstract-black-white-web-background-loop-4k-4096x2304-a0120.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <Text> Industry: Web </Text>
            <Text></Text>
               <Text> Github: www.github.com/Audrey </Text>
               <Text></Text>
                  <Text> LinkedIn: www.linkedin.com/Jessica</Text>
                  <Text></Text>
                     <Text> Website: Jessica.com</Text>
                     <Text></Text>
                        <Text> Years Of Experience: 1</Text>
                        <Text></Text>
                           <Text> In hac habitasse platea dictumst. Praesent ut nisl sem. Quisque justo nisi, condimentum a scelerisque vel, blandit fermentum nunc. Nullam vel fringilla turpis, sit amet aliquet enim. Nunc gravida imperdiet fermentum. Ut cursus diam nec mauris tristique, eu vulputate eros gravida. Aenean felis tortor</Text>
                           <Text></Text>
                              <Button primary><Text> Request Match </Text></Button>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>82 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>9h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}