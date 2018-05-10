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
            <Title>Mentor Match</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Thumbnail
        square
            source={{
              uri:
                "https://i.imgur.com/v3x5i5T.png"
            }}
            style={{
              height: 600,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Thumbnail
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://i.imgur.com/66gJs7L.png"
            }}
          /> 

         <Button
            full
            rounded
            primary
            style={{ 
              marginTop: 450,
              width: "80%",
              alignSelf: "center",
              position: "absolute"

            }}
            onPress={() => this.props.navigation.navigate("EditScreenOne")}
          >
            <Text>Log In With Facebook</Text>
            </Button>
          

        </Content>
      </Container>
    );
  }
}