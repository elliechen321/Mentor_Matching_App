import React, { Component } from "react";
import ProfileScreen from "../ProfileScreen/Profile.js";
import SignUpScreen from "../SignUp/SignUp.js";
import MatchScreen from '../MatchScreen/index.js';
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
  {
    ProfileScreen: { screen: ProfileScreen },
    SignUpScreen: { screen: SignUpScreen},
    // MatchScreen: { screen: MatchScreen}
    
  },
  {
    initialRouteName: "ProfileScreen"
  }
));
