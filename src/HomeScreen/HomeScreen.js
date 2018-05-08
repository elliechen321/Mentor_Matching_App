import React from "react"
import { StyleSheet, Text, View, Image, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, AsyncStorage } from "react-native"
import { androidClientId } from "./superSecretKey"
import Expo from "expo"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     username: '',
     password: '',
    }
  }
  componentDidMount() {
    this._loadInitialState().done();

  }
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }

  }
  render() {
    return(
<KeyboardAvoidingView behavior = 'padding' style={styles.wrapper}>
<View style={styles.container}>
<Text style={styles.header}>- LOGIN -</Text>
<TextInput
style={styles.TextInput} placeholder='Username'
onChangeText={ (username) => this.setState({username})}
underlineColorAndroid ='transparent'
/>
<TextInput
style={styles.TextInput} placeholder='Password'
onChangeText={ (password) => this.setState({password})}
underlineColorAndroid ='transparent'
/>
<TouchableOpacity
style={styles.btn}
onPress={this.login}>
<Text>Log in</Text>
</TouchableOpacity>
</View>
</KeyboardAvoidingView>
    );
  }
  login = () => {

   
    fetch('http://10.0.0.250:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })   
  })
       .then((response) => response.json())
       .then ((res => {
         if (res.success === true) {
              AsyncStorage.setItem('user', res.user);
              this.props.navigation.navigate('Profile');
         }
         else {
           alert(res.message);
         }
    
  }))
              .done();

  }
}
const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    fontWeight: 'bold',
    color: '#fff'
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  }
});

//   signIn = async () => {
//     try {
//       const result = await Expo.Google.logInAsync({
//         androidClientId: androidClientId,
//         scopes: ["profile", "email"]
//       })

//       if (result.type === "success") {
//         this.setState({
//           signedIn: true,
//           name: result.user.name,
//           photoUrl: result.user.photoUrl
//         })
//       } else {
//         console.log("cancelled")
//       }
//     } catch (e) {
//       console.log("error", e)
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         {this.state.signedIn ? (
//           <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
//         ) : (
//           <LoginPage signIn={this.signIn} />
//         )}
//       </View>
//     )
//   }
// }

// const LoginPage = props => {
//   return (
//     <View>
//       <Text style={styles.header}>Sign In With Google</Text>
//       <Button title="Sign in with Google" onPress={() => props.signIn()} />
//     </View>
//   )
// }

// const LoggedInPage = props => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome:{props.name}</Text>
//       <Image style={styles.image} source={{ uri: props.photoUrl }} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   header: {
//     fontSize: 25
//   },
//   image: {
//     marginTop: 15,
//     width: 150,
//     height: 150,
//     borderColor: "rgba(0,0,0,0.2)",
//     borderWidth: 3,
//     borderRadius: 150
//   }
// })


// import React, {
//   AsyncStorage,
//   Component,
//   ScrollView,
//   StyleSheet,
//   TouchableHighlight,
//   Text
// } from 'react-native'

// const t = require('tcomb-form-native')

// const Form = t.form.Form

// const User = t.struct({
//   email: t.String,
//   password:  t.String
// })

// const options = {
//   fields: {
//     email: {
//       autoCapitalize: 'none',
//       autoCorrect: false
//     },
//     password: {
//       autoCapitalize: 'none',
//       password: true,
//       autoCorrect: false
//     }
//   }
// }

// class HomeScreen extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       value: {
//         email: '',
//         password: ''
//       }
//     }
//   }

//   componentWillUnmount() {
//     this.setState = {
//       value: {
//         email: '',
//         password: null
//       }
//     }
//   }

//   _onChange = (value) => {
//     this.setState({
//       value
//     })
//   }
//   _handleAdd = () => {
//     const value = this.refs.form.getValue();
//     // If the form is valid...
//     if (value) {
//       const data = {
//         username: value.email,
//         password: value.password
//       }
//       // Serialize and post the data
//       const json = JSON.stringify(data)
//       fetch('http://localhost:3000/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         },
//         body: json
//       })
//       .then((response) => response.json())
//       .then((res) => {
//         if (res.error) {
//           alert(res.error)
//         } else {
//           AsyncStorage.setItem('jwt', res.token)
//           alert(`Success! You may now access protected content.`)
//           // Redirect to home screen
//           this.props.navigator.pop()
//         }
//       })
//       .catch(() => {
//         alert('There was an error logging in.');
//       })
//       .done()
//     } else {
//       // Form validation error
//       alert('Please fix the errors listed and try again.')
//     }
//   }

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <Form
//           ref='form'
//           options={options}
//           type={User}
//           value={this.state.value}
//           onChange={this._onChange}
//         />
//         <TouchableHighlight onPress={this._handleAdd}>
//           <Text style={[styles.button, styles.greenButton]}>Log In</Text>
//         </TouchableHighlight>
//       </ScrollView>
//     )
//   }
// };

// var styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     flexDirection: 'column'
//   },
//   button: {
//     borderRadius: 4,
//     padding: 20,
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#fff'
//   },
//   greenButton: {
//     backgroundColor: '#4CD964'
//   },
//   centering: {
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

// module.exports = HomeScreen



// import React from "react";
// import { StatusBar, AsyncStorage,StyleSheet,TextInput } from "react-native";

// import {
//   AppRegistry,
//   Button,
//   Text,
//   Container,
//   Card,
//   CardItem,
//   Body,
//   Content,
//   Header,
//   Title,
//   Left,
//   Icon,
//   Right,
//   Thumbnail,
//   View,
//   Image,
//   Form,
//   Item,
//   Label,
//   Input,
 
// } from "native-base";

// export default class HomeScreen extends React.Component {
 

//   constructor(props) {
//     super(props);
//     this.state = {
//         myKey: null
//     }
//   }

//   async getKey() {
//     try {
//       const value = await AsyncStorage.getItem('@MySuperStore:key');
//       this.setState({myKey: value});
//     } catch (error) {
//       console.log("Error retrieving data" + error);
//     }
//   }

//   async saveKey(value) {
   
//     try {
     
//       await AsyncStorage.setItem('@MySuperStore:key', value);
//       console.log("Yess")
//     } catch (error) {
//       console.log("Error saving data" + error);
//     }
//     this.props.navigation.navigate("SignUpScreen");
//   }
 

//   async resetKey() {
//     try {
//       await AsyncStorage.removeItem('@MySuperStore:key');
//       const value = await AsyncStorage.getItem('@MySuperStore:key');
//       this.setState({myKey: value});
//     } catch (error) {
//       console.log("Error resetting data" + error);
//     }
//   }

//   render() {
//     return (
// //       <View style={styles.container}>
// //       <Text style={styles.welcome}>
// //         Welcome to Demo AsyncStorage!
// //       </Text>

// //       <TextInput
// //         style={styles.formInput}
// //         placeholder="Enter key you want to save!"
// //         value={this.state.myKey}
// //         onChangeText={(value) => this.saveKey(value)}
// //         />

// //       <Button
// //         style={styles.formButton}
// //         onPress={this.getKey.bind(this)}
// //         title="Get Key"
// //         color="#2196f3"
// //         accessibilityLabel="Get Key"
// //       />

// //       <Button
// //         style={styles.formButton}
// //         onPress={this.resetKey.bind(this)}
// //         title="Reset"
// //         color="#f44336"
// //         accessibilityLabel="Reset"
// //       />

// //       <Text style={styles.instructions}>
// //         Stored key is = {this.state.myKey}
// //       </Text>


// //     </View>
// //   );
// // }
// // }
//       <Container>
//         <Header>
//           <Left>
//             <Button
//               transparent
//               onPress={() => this.props.navigation.navigate("DrawerOpen")}
//             >
//               <Icon name="menu" />
//             </Button>
//           </Left>
//           <Body>
//             <Title>HomeScreen</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//           <Form>
//             <Item floatingLabel>
//               <Label>Username</Label>
//               <Input 
//               value={this.state.myKey}
//         onChangeText={(value) => this.saveKey(value)} />
//             </Item>
//             <Item floatingLabel last>
//               <Label>Password</Label>
//               <Input
//               />
//             </Item>
//           </Form>
//          <Button
//             full
//             rounded
//             primary
//             style={{ marginTop: 30 }}
            

             
          
//           >
//             <Text>Log In</Text>
//           </Button>
//           <Button
//             full
//             rounded
//             dark
//             style={{ marginTop: 30 }}
//             onPress={(value) => this.saveKey(value)}
           
           
//           >
//             <Text>Sign Up</Text>
//           </Button>

//         </Content>
//       </Container>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     padding: 30,
//     flex: 1,
//     alignItems: 'stretch',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   formInput: {
//     paddingLeft: 5,
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#555555",
//   },
//   formButton: {
//     borderWidth: 1,
//     borderColor: "#555555",
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//     marginTop: 5,
//   },
// });