import React, { Component } from "react";
import EnasChat from "./EnasChat.js";
import EricChat from "./EricChat.js";
import AnastasiiaChat from "./AnastasiiaChat.js";
import EllieChat from "./EllieChat.js";
import MattChat from "./MattChat.js";
import Conversations from "./Conversations.js";
import NineChat from "./NineChat.js";
import NewChat from "./NewChat.js";
import testChat from "./testChat.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text, 
  Icon,
  Item,
  Footer,
  FooterTab,
  Label,
  StyleProvider
} from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    EnasChat: { screen: props => <EnasChat {...props} /> },
    EricChat: { screen: props => <EricChat {...props} /> },
    AnastasiiaChat: { screen: props => <AnastasiiaChat {...props} /> },
    EllieChat: { screen: props => <EllieChat {...props} /> },
    MattChat: { screen: props => <MattChat {...props} /> },
    Conversations: { screen: props => <Conversations {...props} /> },
    NewChat: { screen: props => <NewChat {...props} /> },
    // NineChat: { screen: props => <NineChat {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
          <Button style={{width:"100%"}}
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("NewChat")}
            >
              <Icon style={{marginLeft:25}} name="bowtie" />
              <Text style={{
            
            fontSize:15,
            marginLeft:5
          }}>NewChat</Text>
            </Button>
          <Button style={{
            marginLeft: 10,
            width:"100%",
           
          }}
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Conversations")}
            >
              <Icon name="briefcase" />
              <Text style={{
            width: "180%",
            marginLeft:170,
           
            fontSize:15
          }}>Conversations</Text>
            </Button>
            
            
            {/* <Button style={{
              width:"50%",
            marginRight: "10%",
           
          }}

              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("NineChat")}
            > */}
              {/* <Icon name="headset" />
              <Text>Settings</Text> */}
            {/* </Button>  */}
          </FooterTab>
        </Footer>
      );
    }
  }
));