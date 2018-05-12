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
                <Thumbnail source={{uri: 'http://liketherazor.com/wp-content/uploads/2014/08/2_Jordan-Ogletree-Chris-Gillett-Houston-Headshot-Photographer.jpg'}} />
                <Body>
                  <Text>Michael</Text>
                  <Text note>Senior Web Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://managementsystems.fi/wp-content/uploads/2014/05/1360103186_abstract-green-nature-web-background.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <Text> Industry: Web </Text>
            <Text></Text>
               <Text> Github: www.github.com/Audrey 2</Text>
               <Text></Text>
                  <Text> LinkedIn: www.linkedin.com/Michael</Text>
                  <Text></Text>
                     <Text> Website: Michael.com</Text>
                     <Text></Text>
                        <Text> Years Of Experience: 2</Text>
                        <Text></Text>
                           <Text> In hac habitasse platea dictumst. Praesent ut nisl sem. Quisque justo nisi, condimentum a scelerisque vel, blandit fermentum nunc. Nullam vel fringilla turpis, sit amet aliquet enim. Nunc gravida imperdiet fermentum. Ut cursus diam nec mauris tristique, eu vulputate eros gravida. Aenean felis tortor</Text>
                           <Text></Text>
                              <Button primary><Text> Request Match </Text></Button>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>24 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>7h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}