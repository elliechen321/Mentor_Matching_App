import axios from "axios";
import React, { Component } from "react";
import { 
  StatusBar, 
  PixelRatio,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  ImageBackground
  
 } from "react-native";
import {
  AppRegistry,
  Button,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Text,
  Left,
  Icon,
  Right,
  Thumbnail,
  View,
  Form,
  Item,
  Label,
  Input,
  ValidationMessage,
  Picker,
  Textarea,
 ListItem,
 Radio,
} from "native-base";
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import CameraRollPicker from 'react-native-camera-roll-picker';     
export default class Home extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      selected: undefined,
      // num: 0
   };

   }

   componentDidMount() {
     axios.get('https://graph.facebook.com/endpoint?key=value&access_token=app_id%7Capp_secret')
      .then(res => console.log(res))
   }


    onValueChange(value) {
        this.setState({
           selected: value,
          //  num:num,
          //  selected:images,    
        });
    }
     
  
  render() {
    return (
      <ImageBackground source={require('./img/cup.jpg')}
                  style={styles.backgroundImage}>
                  {this.props.children}

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
          
            <Title style={{fontSize:16,marginLeft:28, width:1000, height:22, color: '#000'}}>Let us find the perfect Match for You!</Title>
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
              <Label>Name</Label>
              <Input />
              </Item>
             
            <Picker
              mode="dropdown"
              placeholder="Choose the area of expertise"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Choose the area of expertise"
              textStyle={{ color: "#000" }}
              itemStyle={{
                backgroundColor: "#fff",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#000' }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Choose your area of expertise:" value="key0"  />
              <Picker.Item label="Web Development" value="key1" />
              <Picker.Item label="Mobile Development" value="key2" />
              <Picker.Item label="QA" value="key3" />
              <Picker.Item label="Data Scientist" value="key4" />
              <Picker.Item label="UI/UX Design" value="key5" />
            </Picker> 
            <Item floatingLabel last>
              <Label>Industry of specialization </Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>GitHub link</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>LinkedIn </Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Portfolio/Website</Label>
              <Input />
            </Item>
           
            
            <Item floatingLabel last>
              <Label>Years of experience</Label>
              <Input />
            </Item> 
            <Item floatingLabel last>
              <Label>Would you prefer to be a mentor?</Label>
              <Input />
            </Item> 
           <Textarea rowSpan={3.5} bordered placeholder="Tell us about yourself " />
          </Form>
           <Button
            full
            rounded
            blue
            style={{ marginTop: 26 }}
            onPress={() => this.props.navigation.navigate("Match")}
          >
            <Text>Submit</Text>
          </Button>

        </Content>
      </Container>
      </ImageBackground>
    );
  };
}

const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: null,
      height: 500,
    
  }
});






// import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,
// Title } from 'native-base';
// export default class CardImageExample extends Component {
//   render() {
//     return (
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
//             <Title>Profile</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//           <Card>
//             <CardItem>
//               <Left>
//                 <Thumbnail source={{uri: 'https://wa1.narvii.com/static/img/user-icon-placeholder.png'}} />
//                 <Body>
//                   <Text>Profile</Text>
//                   <Text note>User-1</Text>
//                 </Body>
//                 <Button info><Text> Edit Profile </Text></Button>
//               </Left>
//             </CardItem>
//             <CardItem cardBody>
//               <Image source={{uri: 'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/08/How-to-type-hidden-mac-keyboard-symbols.jpg'}} style={{height: 200, width: null, flex: 1}}/>
//             </CardItem>
//             <CardItem>
//               <Left>
//                 <Button transparent>
//                   <Icon active name="thumbs-up" />
//                   <Text>12 Likes</Text>
//                 </Button>
//               </Left>
//               <Body>
//                 <Button transparent>
//                   <Icon active name="chatbubbles" />
//                   <Text>4 Comments</Text>
//                 </Button>
//               </Body>
//               <Right>
//                 <Text>11h ago</Text>
//               </Right>
//             </CardItem>
//           </Card>
//           <Card>
//             <CardItem header bordered>
//               <Text>About Me</Text>
//             </CardItem>
//             <CardItem bordered>
//               <Body>
//                 <Text>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem velit. Cras in quam eu mauris tincidunt cursus. 
//                   Quisque semper at justo eu euismod.
//                    Mauris vitae tortor cursus, pretium orci vitae, egestas quam. Duis posuere elit sed dui hendrerit dignissim.
//                    Phasellus sit amet sem ornare, tristique lectus a, malesuada augue. Sed in malesuada dolor, sit amet viverra nulla.
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem header bordered>
//               <Text>Location</Text>
//             </CardItem>
//             <CardItem bordered>
//               <Body>
//                 <Text>
//                   Chicago Illinois
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem header bordered>
//               <Text>Occupation</Text>
//             </CardItem>
//             <CardItem bordered>
//               <Body>
//                 <Text>
//                   Director of Technology - Microsoft
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem header bordered>
//               <Text>Years of Experience</Text>
//             </CardItem>
//             <CardItem bordered>
//               <Body>
//                 <Text>
//                   10+
//                 </Text>
//               </Body>
//             </CardItem>
//           </Card>

//         </Content>
//       </Container>
//     );
//   }
// }