import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import ChatScreen from "../ChatScreen/index.js";
import ProfileScreen from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import MatchScreen from "../MatchScreen/index.js";
import SignUpScreen from "../SignUp/SignUp.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen },
    SignUpScreen: { screen: SignUpScreen},
    MatchScreen: { screen: MatchScreen},

    
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
