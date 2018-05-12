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
                <Thumbnail source={{uri: 'https://kellywilliamsphotography.com/wp-content/uploads/2015/08/Corporate-Headshot-Dallas-TX-1-1024x683.jpg'}} />
                <Body>
                  <Text>Peter</Text>
                  <Text note>Senior Web Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://wallpapertag.com/wallpaper/full/1/a/1/350829-widescreen-website-background-1920x1080-windows-xp.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <Text> Industry: Web </Text>
            <Text></Text>
               <Text> Github: www.github.com/Audrey </Text>
               <Text></Text>
                  <Text> LinkedIn: www.linkedin.com/Peter</Text>
                  <Text></Text>
                     <Text> Website: Peter.com</Text>
                     <Text></Text>
                        <Text> Years Of Experience:11</Text>
                        <Text></Text>
                           <Text> In hac habitasse platea dictumst. Praesent ut nisl sem. Quisque justo nisi, condimentum a scelerisque vel, blandit fermentum nunc. Nullam vel fringilla turpis, sit amet aliquet enim. Nunc gravida imperdiet fermentum. Ut cursus diam nec mauris tristique, eu vulputate eros gravida. Aenean felis tortor</Text>
                           <Text></Text>
                              <Button primary><Text> Request Match </Text></Button>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>17 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}