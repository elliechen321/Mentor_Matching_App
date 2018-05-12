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
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/MFettes-headshot.jpg'}} />
                <Body>
                  <Text>Oscar</Text>
                  <Text note>Web Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/H8WuRINimqur8ud/technology-background-gear_rhfg-imn_thumbnail-full01.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <Text> Industry: Web </Text>
            <Text></Text>
               <Text> Github: www.github.com/Audrey </Text>
               <Text></Text>
                  <Text> LinkedIn: www.linkedin.com/Oscal</Text>
                  <Text></Text>
                     <Text> Website: Oscar.com</Text>
                     <Text></Text>
                        <Text> Years Of Experience:99</Text>
                        <Text></Text>
                           <Text> In hac habitasse platea dictumst. Praesent ut nisl sem. Quisque justo nisi, condimentum a scelerisque vel, blandit fermentum nunc. Nullam vel fringilla turpis, sit amet aliquet enim. Nunc gravida imperdiet fermentum. Ut cursus diam nec mauris tristique, eu vulputate eros gravida. Aenean felis tortor</Text>
                           <Text></Text>
                              <Button primary><Text> Request Match </Text></Button>
                              <Text> </Text>
                              <Button primary 
                              onPress={() => this.props.navigation.navigate("NewChat")}
                              ><Text> Message </Text></Button>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>51 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>4h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}