import React, { Component } from "react";
import Home from "./Home.js";
import ChatScreen from "../ChatScreen/index.js";
import Profile from "../Profile/index.js";
import SideBar from "../SideBar/SideBar.js";
import Match from "../Match/index.js";
import SignUpScreen from "../SignUp/SignUp.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Home },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: Profile },
    SignUpScreen: { screen: SignUpScreen},
    Match: { screen: Match},

    
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
