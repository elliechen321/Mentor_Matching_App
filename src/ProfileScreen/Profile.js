import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,
Title } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
                <Body>
                  <Text>Profile</Text>
                  <Text note>User-1</Text>
                </Body>
                <Button info><Text> Edit Profile </Text></Button>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/08/How-to-type-hidden-mac-keyboard-symbols.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>About Me</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem velit. Cras in quam eu mauris tincidunt cursus. 
                  Quisque semper at justo eu euismod.
                   Mauris vitae tortor cursus, pretium orci vitae, egestas quam. Duis posuere elit sed dui hendrerit dignissim.
                   Phasellus sit amet sem ornare, tristique lectus a, malesuada augue. Sed in malesuada dolor, sit amet viverra nulla.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Location</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Chicago Illinois
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Occupation</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Director of Technology - Microsoft
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Years of Experience</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  10+
                </Text>
              </Body>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}