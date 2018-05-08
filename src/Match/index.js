import React, { Component } from "react";
import Profile from "./Profile.js";
import SignUpScreen from "./SignUp.js";
import MatchScreen from "../Match/index.js"
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
  {
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo },
    SignUpScreen: { screen: SignUpScreen},
    MatchScreen: { screen: MatchScreen}
    
  },
  {
    initialRouteName: "Profile"
  }
));
