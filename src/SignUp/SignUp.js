import React, { Component } from "react";
import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'
import { createUser, confirmUserSignUp } from '../actions'
import { 
  StatusBar, 
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
  Image,
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

const initialState = {
  username: '',
  password: '',
  email: '',
  phone_number: '',
  authCode: ''
}

class SignUp extends Component <{}> {
  state = initialState

  onChangeText = (key, value) => {
    this.setState({
      [key]:value
    })
  }

  signUp(){
    const {username, password, email, phone_number} = this.state
    this.props.dispatchCreateUser (username,password,email, phone_number)
  }

  confirm() {
    const {authCode,username}=this.state
    this.props.dispatchCreateUser(username, authCode)
  }

  componentWillReceiveProps(nextProps){
    const {auth: {showSignUpConfirmationModal}} = nextProps
    if(!showSignInConfirmationModal && this.props.auth.showSignUpConfirmationModal){
      this.setState(initialState)
    }
  }

  render(){
    const { auth: {
      showSignUpConfirmationModal,
      isAuthenticating,
      signUpError,
      signUpErrorMessage
    }} = this.props
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
              <Input value={this.state.username} type='username'
              onChangeText={this.onChangeText}/> 
              
            </Item> 
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input value={this.state.password} secureTextEntry type='password'
              onChangeText={this.onChangeText}/>
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input value={this.state.email} type='email'
              onChangeText={this.onChangeText}/>
            </Item>
            <Item floatingLabel last>
              <Label>Phone Number</Label>
              <Input value={this.state.phone_number} type='phone_number'
              onChangeText={this.onChangeText}/>
            </Item>
            <Item floatingLabel last>
              <Label>Name</Label>
              <Input />
              </Item>
              <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={this.onActionsPress}
      >
      <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          {this.renderNavBar()}
          <CameraRollPicker
            maximum={10}
            imagesPerRow={4}
            callback={this.selectImages}
            selected={[]}
          />
        </Modal>
        {this.renderIcon()}
      </TouchableOpacity>
    );
  }
}
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
            title='Sign Up'
            onPress={this.signUp.bind(this)}
            isLoading={isAuthenticating}
          >
            <Text>Sign Up</Text>
          </Button>
          {
          showSignUpConfirmationModal && (
            <Modal>
              <View style={styles.modal}>
                <Input
                  placeholder="Authorization Code"
                  type='authCode'
                  keyboardType='numeric'
                  onChangeText={this.onChangeText}
                  value={this.state.authCode}
                  keyboardType='numeric'
                />
                <Button
                  title='Confirm'
                  onPress={this.confirm.bind(this)}
                  isLoading={isAuthenticating}
                />
              </View>
            </Modal>
          )
        }
        </Content>
      </Container>
    );
   }  
  }

  const mapStateToProps = state => ({
    auth: state.auth
  })
  
  const mapDispatchToProps = {
    dispatchConfirmUser: (username,authCode) => confirmUserSignUp(username, authCode),
    dispatchCreateUser: (username,password,email,phone_number) => createUser(username,password,email,phone_number)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

// export default class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected: undefined,
//     };
//   }


//   onValueChange(value) {
//     this.setState({
//       selected: value
//     });
//   }
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
//             <Title>HomeScreen</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//           <Form>
//             <Item floatingLabel> 
//               <Input value= {this.state.username} type='username' on>
//               <Label>Username</Label>
//               <Input/> 
              
//             </Item> 
//             <Item floatingLabel last>
//               <Label>Password</Label>
//               <Input />
//             </Item>
//             <Item floatingLabel last>
//               <Label>Name</Label>
//               <Input />
//             </Item>
            
//             <Item floatingLabel last>
//               <Label>Upload Photo</Label>
//               <Input />
//             </Item>
//             <Picker
//               mode="dropdown"
//               placeholder="Choose the area of expertise"
//               iosIcon={<Icon name="ios-arrow-down-outline" />}
//               placeholder="Choose the area of expertise"
//               textStyle={{ color: "#5cb85c" }}
//               itemStyle={{
//                 backgroundColor: "#d3d3d3",
//                 marginLeft: 0,
//                 paddingLeft: 10
//               }}
//               itemTextStyle={{ color: '#788ad2' }}
//               style={{ width: undefined }}
//               selectedValue={this.state.selected}
//               onValueChange={this.onValueChange.bind(this)}
//             >
//               <Picker.Item label="Choose your area of expertise:" value="key0" />
//               <Picker.Item label="Web Development" value="key1" />
//               <Picker.Item label="Mobile Development" value="key2" />
//               <Picker.Item label="QA" value="key3" />
//               <Picker.Item label="Data Scientist" value="key4" />
//               <Picker.Item label="UI/UX Design" value="key5" />
//             </Picker> 
//             <Item floatingLabel last>
//               <Label>Industry of specialization </Label>
//               <Input />
//             </Item>

//             <Item floatingLabel last>
//               <Label>GitHub link</Label>
//               <Input />
//             </Item>
//             <Item floatingLabel last>
//               <Label>LinkedIn </Label>
//               <Input />
//             </Item>

//             <Item floatingLabel last>
//               <Label>Portfolio/Website</Label>
//               <Input />
//             </Item>
           
            
//             <Item floatingLabel last>
//               <Label>Years of experience</Label>
//               <Input />
//             </Item> 
//            <Textarea rowSpan={3.5} bordered placeholder="Tell us about yourself " />
            /* <Picker
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
             
            </Picker> */
           
            /* <Picker
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
            </Picker> */
            /* <Item floatingLabel last>
              <Label>Choose the area of expertize</Label>
              <Input />
            </Item> */
//           </Form>
//            <Button
//             full
//             rounded
//             dark
//             style={{ marginTop: 26 }}
//             onPress={() => this.props.navigation.navigate("SignUpScreen")}
//           >
//             <Text>Sign Up</Text>
//           </Button>

//         </Content>
//       </Container>
//     );
//   }
// }
