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
        Button
                  } from 'native-base';
export default class ListThumbnailExample extends Component {
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
            <Title>User 1</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
