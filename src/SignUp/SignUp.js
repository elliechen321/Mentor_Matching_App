import React from "react";
import { StatusBar } from "react-native";
import {
  AppRegistry,
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Thumbnail,
  View,
  Image,
  Form,
  Item,
  Label,
  Input
} from "native-base";

export default class HomeScreen extends React.Component {
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
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Address</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Occuptaion</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Languages</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Title</Label>
              <Input />
            </Item>
          </Form>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 30 }}
            onPress={() => this.props.navigation.navigate("SignUpScreen")}
          >
            <Text>Sign Up</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}