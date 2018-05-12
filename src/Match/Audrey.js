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
                <Thumbnail source={{uri: 'https://www.smartheadshots.com/blog/photos/actor-headshots-1283.jpg'}} />
                <Body>
                  <Text>Audrey</Text>
                  <Text note>Web Designer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159__340.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
             <Text> Industry: Web </Text>
            <Text></Text>
               <Text> Github: www.github.com/Audrey 10</Text>
               <Text></Text>
                  <Text> LinkedIn: www.linkedin.com/Audrey</Text>
                  <Text></Text>
                     <Text> Website: Audrey.com</Text>
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
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}