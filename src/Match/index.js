import React, { Component } from "react";
import Profile from "../Profile/Profile.js";
import SignUpScreen from "../SignUp/SignUp.js";
import OscarProfile from '../Match/Oscar.js';
import LeslieProfile from '../Match/Leslie.js';
import PeterProfile from '../Match/Peter.js';
import JamesProfile from '../Match/James.js';
import JessicaProfile from '../Match/Jessica.js';
import MichaelProfile from '../Match/Michael.js';
import MeganProfile from '../Match/Megan.js';
import JustinProfile from '../Match/Justin.js';
import AudreyProfile from '../Match/Audrey.js';
import StephanieProfile from '../Match/Stephanie.js';
import Match from '../Match/Match.js';
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
  {
    Profile: { screen: Profile },
    SignUpScreen: { screen: SignUpScreen},
    OscarProfile: { screen: props => <OscarProfile {...props} /> },
    LeslieProfile: { screen: props => <LeslieProfile {...props} /> },
    PeterProfile: { screen: props => <PeterProfile {...props} /> },
    JamesProfile: { screen: props => <JamesProfile {...props} /> },
    JessicaProfile: { screen: props => <JessicaProfile {...props} /> },
    MichaelProfile: { screen: props => <MichaelProfile {...props} /> },
    MeganProfile: { screen: props => <MeganProfile {...props} /> },
    JustinProfile: { screen: props => <JustinProfile {...props} /> },
    AudreyProfile: { screen: props => <AudreyProfile {...props} /> },
    StephanieProfile: { screen: props => <StephanieProfile {...props} /> },
    Match: { screen: Match},

    
  },
  {
    initialRouteName: "Match"
  }
));
