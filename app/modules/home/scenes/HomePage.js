import React from 'react';
import { Animated, StyleSheet, View, Text, StatusBar, Image } from "react-native";
import { Scene, Router, ActionConst, Stack, Modal, Tabs } from 'react-native-router-flux';
import styles from './styles';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      selected: null
    };
    this.question = this.question.bind(this);
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration:300,
      }
    ).start();                        // Starts the animation
  }

  question() {
    if (this.props.question.id) {
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {this.props.question.ques}
          </Text>
          <View style={{ flexDirection: 'row', padding: 20, justifyContent:'space-between' }}>
            <Text style={{ fontSize: 20, color: this.state.selected === 'A' ? 'red' : 'black' }}>{this.props.question.choiceA.text}</Text>
            <Text style={{ fontSize: 20, color: this.state.selected === 'B' ? 'red' : 'black' }}>{this.props.question.choiceB.text}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.questionContainer}>
          <Text> Already Answered Today, buddy
          </Text>
        </View>
      );
    }
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{
          opacity: fadeAnim,
          flex:1,
          backgroundColor: "#30425a",
        }}>
        <StatusBar
          hidden={true}>
        </StatusBar>
        <Text style={styles.title}>Today's Question</Text>
        {this.question()}
      </Animated.View>
    );
  }
}
