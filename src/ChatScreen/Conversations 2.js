import React, { Component } from "react";
import EnasChat from "./EnasChat.js";
import Conversations from "./Conversations.js";
import NineChat from "./NineChat.js";
import EricChat from "./EricChat.js";
import NewChat from "./NewChat.js";
import MattChat from "./MattChat.js";
import AnastasiiaChat from "./AnastasiiaChat.js";
import EllieChat from "./EllieChat.js";

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
            onPress={() => this.props.navigation.navigate("EnasChat")}
            >
              <Left>
                <Thumbnail source={{ uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png' }} />
              </Left>
              <Body>
                <Text>Enas</Text>
                <Text note>Let's Talk</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>

            </ListItem>
            <ListItem avatar
            onPress={() => this.props.navigation.navigate("EricChat")}
            >
              <Left>
                <Thumbnail source={{ uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png' }} />
              </Left>
              <Body>
                <Text>Eric</Text>
                <Text note>Let's Talk</Text>
              </Body>
              <Right>
                <Text note>2:31 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar
            onPress={() => this.props.navigation.navigate("MattChat")}
            >
              <Left>
                <Thumbnail source={{ uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png' }} />
              </Left>
              <Body>
                <Text>Matt</Text>
                <Text note>Lat's Talk</Text>
              </Body>
              <Right>
                <Text note>8:56 am</Text>
              </Right>
            </ListItem>
            <ListItem avatar
            onPress={() => this.props.navigation.navigate("AnastasiiaChat")}
            >
              <Left>
                <Thumbnail source={{ uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png' }} />
              </Left>
              <Body>
                <Text>Anastasiia</Text>
                <Text note>Let's Talk</Text>
              </Body>
              <Right>
                <Text note>11:01 am</Text>
              </Right>
            </ListItem>
            <ListItem avatar
            onPress={() => this.props.navigation.navigate("EllieChat")}
            >
              <Left>
                <Thumbnail source={{ uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png' }} />
              </Left>
              <Body>
                <Text>Ellie</Text>
                <Text note>Let's Talk</Text>
              </Body>
              <Right>
                <Text note>3:31 pm</Text>
              </Right>
            </ListItem>
           
          </List>
        </Content>
      </Container>
    );
  }
}
