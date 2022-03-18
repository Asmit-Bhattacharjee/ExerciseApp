import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Login from "./screens/Login";
import Dashboard from './screens/Dashboard'
import Exercise from './screens/Exercise'
import Motivation from './screens/Motivation'
import Studies from './screens/Studies'
import Rewards from './screens/Rewards'

export default class App extends React.Component {
  render() {
    return (
      <View >
        <AppNavigator />
      </View>
    );
  }
}
const AppSwitchNavigator = createSwitchNavigator({
  
  Dashboard: Dashboard,
  Exercise: Exercise,
  Motivation: Motivation,
  Studies: Studies,
  Rewards: Rewards,
});
const AppNavigator = createAppContainer(AppSwitchNavigator);
