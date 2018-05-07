import React, { Component } from "react";
import LucyChat from "./LucyChat.js";
import JadeChat from "./JadeChat.js";
import NineChat from "./NineChat.js";
import testChat from "./testChat.js";
import { TabNavigator } from "react-navigation";
import { 
        Container, 
        Card,
        CardItem,
        Icon,
        Title, 
        Bodyutton,
        Header,
        Content,
        List,
        ListItem,
        Left,
        Body,
        Right,
        Text, 
        Thumbnail,
        Button
                  } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    const { navigate } = this.props.navigation;
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
            <Title>Conversations</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem avatar
            onPress={() => this.props.navigation.navigate("LucyChat")}
            >
              <Left>
                <Thumbnail source={{ uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png' }} />
              </Left>
              <Body>
                <Text>User 1</Text>
                <Text note>This is an example conversation between two users</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>

            </ListItem>
            <ListItem avatar
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Left>
                <Thumbnail source={{ uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png' }} />
              </Left>
              <Body>
                <Text>User 2</Text>
                <Text note>This is an example conversation between two users</Text>
              </Body>
              <Right>
                <Text note>2:31 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Left>
                <Thumbnail source={{ uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png' }} />
              </Left>
              <Body>
                <Text>User 3</Text>
                <Text note>This is an example conversation between two users</Text>
              </Body>
              <Right>
                <Text note>1:56 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Left>
                <Thumbnail source={{ uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png' }} />
              </Left>
              <Body>
                <Text>User 4</Text>
                <Text note>This is an example conversation between two users</Text>
              </Body>
              <Right>
                <Text note>11:01 am</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
