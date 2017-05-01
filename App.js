import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { routes } from 'constants';
import OrgsPage from './orgs/OrgsPage';

const AppNavigation = StackNavigator({
  Orgs: {screen: OrgsPage},
  AddOrg: {screen: AddOrgPage}
});

export default class App extends React.Component {
  render() {
    return <AppNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
