import React, { Component } from "react";
import Profile from "../Profile/Profile.js";
import SignUpScreen from "../SignUp/SignUp.js";
import Match from '../Match/Match.js';
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
  {
    Profile: { screen: Profile },
    SignUpScreen: { screen: SignUpScreen},
    Match: { screen: Match},
    
  },
  {
    initialRouteName: "Match"
  }
));
