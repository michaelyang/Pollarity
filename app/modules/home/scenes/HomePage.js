import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Scene, Router, ActionConst, Stack, Modal, Tabs } from 'react-native-router-flux';
import styles from './styles';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View >
        <Text >Pollarity</Text>
      </View>
    );
  }
}
