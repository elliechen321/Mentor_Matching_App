import React, { Component } from 'react';
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
        Button,
        Item, 
        Input
                  } from 'native-base';
export default class SearchBarExample extends Component {
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
            <Title>New Conversation</Title>
          </Body>
          <Right />
        </Header>
        <Content searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}