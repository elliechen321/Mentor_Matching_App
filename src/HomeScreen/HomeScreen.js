import React from "react";
import { StatusBar, AsyncStorage,StyleSheet,TextInput, Alert } from "react-native";
import Expo from "expo";
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

  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('588219858226492', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,email,name&access_token=${token}`);
      const resJSON = await response.json()
      console.log(resJSON)
      console.log("hello")
    }
  }

  async getKey(){
    try {
      const value = await AsyncStorage.getItem('@mySuperStore:key');
      this.setState({myKey: value});
    }
    catch (error) {
      console.log("Error retrieving data " + error)
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
<<<<<<< HEAD
            style={styles.button}
            

             
          
=======
            style={{ marginTop: 30 }}
            onPress={this.logIn}     
>>>>>>> dcafe5ad66d1b03ce478ef2f2a541244f3d5477a
          >
            <Text>Login with Facebook</Text>
          </Button>
          {/* <Button
            full
            rounded
            dark
<<<<<<< HEAD
            style={styles.button}
            onPress={(value) => this.saveKey(value)}
=======
            style={{ marginTop: 30 }}
            //onPress={(value) => this.saveKey(value)}
>>>>>>> dcafe5ad66d1b03ce478ef2f2a541244f3d5477a
           
           
          >
            <Text>Sign Up</Text>
          </Button> */}

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