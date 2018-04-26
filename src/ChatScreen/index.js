import React, { Component } from "react";
import LucyChat from "./LucyChat.js";
import JadeChat from "./JadeChat.js";
import NineChat from "./NineChat.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    LucyChat: { screen: props => <LucyChat {...props} /> },
    JadeChat: { screen: props => <JadeChat {...props} /> },
    NineChat: { screen: props => <NineChat {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("LucyChat")}
            >
              <Icon name="bowtie" />
              <Text>New Chat</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("JadeChat")}
            >
              <Icon name="briefcase" />
              <Text>Conversations</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("NineChat")}
            >
              <Icon name="headset" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));