import React, { Component } from "react";
import { View } from "react-native";
import { AppRegistry } from 'react-native';
import App from './src/App';
import { Container, Content, Picker, Button, Text } from "native-base";
import Expo from "expo";

// homescreen
import HomeScreen from "./src/HomeScreen/index.js";

// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// Amplify
import config from './aws-exports' // this needs to be created or added by you, see README
import Amplify from 'aws-amplify'
Amplify.configure(config);

// App
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('main', () => ReduxApp);

export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <HomeScreen />;
  }
}
