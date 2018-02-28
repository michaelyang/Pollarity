import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from "react-native";
import { Scene, Router, ActionConst, Stack, Modal, Tabs } from 'react-native-router-flux';
import styles from './styles';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.question = this.question.bind(this);
  }

  question() {
    if (this.props.currentUser.lastQuest !== this.props.ques.id) {
      return (
        <View>
          Heres da question space
        </View>
      );
    } else {
      return (
        <View>
          <Text> Already Answered Today, buddy
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}>
        </StatusBar>
        <Text style={styles.title}>Today's Question</Text>
        {this.question}
      </View>
    );
  }
}
