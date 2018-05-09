import React from "react";
import { StatusBar, AsyncStorage,StyleSheet,TextInput } from "react-native";

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
  Input,
 
} from "native-base";

export default class HomeScreen extends React.Component {
 

  constructor(props) {
    super(props);
    this.state = {
        myKey: null
    }
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({myKey: value});
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  async saveKey(value) {
   
    try {
     
      await AsyncStorage.setItem('@MySuperStore:key', value);
      console.log("Yess")
    } catch (error) {
      console.log("Error saving data" + error);
    }
    this.props.navigation.navigate("SignUpScreen");
  }
 

  async resetKey() {
    try {
      await AsyncStorage.removeItem('@MySuperStore:key');
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({myKey: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }

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
            <Title>MentorMatch</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {/* <Image
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
          /> */}
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input 
              value={this.state.myKey}
              onChangeText={(value) => this.saveKey(value)} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
              />
            </Item>
          </Form>
         <Button
            full
            rounded
            primary
            style={styles.button}
            

             
          
          >
            <Text>Log In</Text>
          </Button>
          <Button
            full
            rounded
            dark
            style={styles.button}
            onPress={(value) => this.saveKey(value)}
           
           
          >
            <Text>Sign Up</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: "#555555",
  },
  formButton: {
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "#555555",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});