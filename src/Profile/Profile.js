import React, { Component } from "react";



import { 
  StatusBar, 
  PixelRatio,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity
  
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
      selected: [],
      num: 0
      
      

   };

   }
  //  getSelectedImages(images, current) {
  //   var num = images.length;

    // this.setState({
    //   num: num,
    //   selected: images,
    // });

  //   console.log(current);
  //   console.log(this.state.selected);
  // }
     onValueChange(value) {
        this.setState({
           selected: value,
           num:num,
           selected:images,
      
        
        
        });
     }
     
    
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    // ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);
    
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   }
    //   else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   }
    //   else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   }
    //   else {
    //     let source = { uri: response.uri };
    
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
    //     this.setState({
    //       avatarSource: source
    //     });
    //   }
    // });
     
   
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
          <Body style={{ width:100 }}>
            <Title style={{fontSize:5,paddingLeft:5, width:100}}>Please answer couple questions and we will find the right match for you!</Title>
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
              {/* <View style={styles.container}>
        <TouchableHighlight>
          <Image
            source={require('../assets/addPhoto.png')} />
        </TouchableHighlight>
      </View> */}
              {/* <View style={styles.content}>
          <Text style={styles.text}>
            <Text style={styles.bold}> {this.state.num} </Text> images has been selected
          </Text>
        </View> */}
       
              
              
              {/* <View style={styles.container}>
              <Text style={{marginTop:20}}>
              {this.state.num} Images selected
              </Text>

             <CameraRollPicker
             callback={this.myImages.bind(this)}
            />
            </View> */}
            


             
            {/* </Item> */}
            
            {/* <Item floatingLabel last>
          
           
              <Label>Upload Photo</Label>
              <Input /> 
            </Item> */}
            <Picker
              mode="dropdown"
              placeholder="Choose the area of expertise"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Choose the area of expertise"
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Choose your area of expertise:" value="key0" />
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
            {/* <Picker
              mode="dropdown"
              placeholder="Years of experience"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Years of experience"
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Years of experience:" value="Years" />
              <Picker.Item label="<1" value="<1" />
              <Picker.Item label="1-3" value="1-3" />
              <Picker.Item label="3-5" value="3-5" />
              <Picker.Item label="5-10" value="5-10" />
              <Picker.Item label=">10" value=">10" />
             
            </Picker> */}
           
            {/* <Picker
              mode="dropdown"
              placeholder="Industry of specialization"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Industry of specialization"
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Industry of specialization:" value="Industry" />
              <Picker.Item label="Fintech" value="Fintech" />
              <Picker.Item label="Medicine" value="Medicine" />
              <Picker.Item label="Data/analytics" value="Data" />
              <Picker.Item label="Ecommerce" value="Ecommerce" />
              <Picker.Item label="Marketing/digital media" value="Marketing" />
              <Picker.Item label="IoT" value="IoT" />
              <Picker.Item label="Machine learning" value="Machine" />
            </Picker> */}
            {/* <Item floatingLabel last>
              <Label>Choose the area of expertize</Label>
              <Input />
            </Item> */}  
          </Form>
           <Button
            full
            rounded
            dark
            style={{ marginTop: 26 }}
            onPress={() => this.props.navigation.navigate("MatchScreen")}
          >
            <Text>Sign Up</Text>
          </Button>

        </Content>
      </Container>
    );
  };
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });





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