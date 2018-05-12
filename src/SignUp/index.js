import React, { Component } from "react";
import Profile from "./Profile.js";
import SignUpScreen from "./SignUp.js";
import EditScreenOne from "../ProfileScreen/EditScreenOne.js";
import EditScreenTwo from "../ProfileScreen/EditScreenTwo.js";
import { StackNavigator } from "react-navigation";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
export default (DrawNav = StackNavigator(
  {
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo },
    SignUpScreen: { screen: SignUpScreen}
  },
  {
    initialRouteName: "Profile"
  }
));
