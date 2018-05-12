import React from "react";
import axios from "axios";
import { StatusBar, AsyncStorage, StyleSheet, TextInput, Alert } from "react-native";
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

export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      myKey: null
    }
   
  }
  

  
  // componentWillMount() {
  //   axios.get('http://10.55.110.251:3000/api/all').then(res => {
  //     console.log("AXIOS:", res.data)
  //   })
  // }
  
  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('588219858226492', {
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      
      // Get the user's name using Facebook's Graph API
      const endpoint = 'https://graph.facebook.com/me?fields=id,email,name,picture&access_token='
      const response = await fetch(endpoint.concat(token)).then(response => response.json());
      let userInfo = {
        facebook: response.id,
        fullName: response.name,
       
  
      };
      Alert.alert('You are successfully logged in!',
    'Please create your profile');
      
     
     
     
      await axios.post('http://10.55.110.251:/api/all', userInfo).then(res => {
        console.log("AXIOS:" + res.data)
      })
      
      console.log(response)
      console.log("hello")
    }
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@mySuperStore:key');
      this.setState({ myKey: value });
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
            <Title style={{ width: 500 }}>Mentor Match</Title>
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
         


        </Content>
        <Button
          full
          rounded
          primary
          style={{
            marginTop: 550,
            width: "80%",
            alignSelf: "center",
            position: "absolute"

          }}
          onPress={this.logIn}
         
        >
          <Text>Login with Facebook</Text>
        </Button>
        <Button
        full
        rounded
        primary
        style={{
          marginTop: 600,
          width: "80%",
          alignSelf: "center",
          position: "absolute"

        }}
        
         onPress={() => this.props.navigation.navigate('Profile')}
       
        >
        <Text>Create Profile</Text>
        </Button>
     
        
      </Container>
    )
  };
}
