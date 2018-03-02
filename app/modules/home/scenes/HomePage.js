import React from 'react';
import { Animated, StyleSheet, View, Text, StatusBar, Image, Button } from "react-native";
import { Scene, Router, ActionConst, Stack, Modal, Tabs } from 'react-native-router-flux';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import styles from './styles';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      selected: null,
      asked: true
    };
    this.swipeConfig = {
      velocityThreshold: 0.2,
      directionalOffsetThreshold: 80
    };
    this.question = this.question.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
    this.noAnswer = this.noAnswer.bind(this);
    this.goToResults = this.goToResults.bind(this);
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
    if (this.state.asked) {
      return (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {this.props.question.ques}
          </Text>
          <View style={{ flexDirection: 'row', padding: 20, justifyContent:'space-between' }}>
            <View style={[styles.choice, {backgroundColor: 'purple'}]}>
              <Text style={{ fontSize: 20, color: this.state.selected === 'A' ? 'red' : 'white' }}>{this.props.question.choiceA.text}</Text>
            </View>
            <View style={[styles.choice, {backgroundColor: 'blue'}]}>
              <Text style={{ fontSize: 20, color: this.state.selected === 'B' ? 'red' : 'white' }}>{this.props.question.choiceB.text}</Text>
            </View>
          </View>
          <Button
            onPress={this.noAnswer}
            title="No Answer"
            color="#FF553F"
          >
          </Button>
        </View>
      );
    } else {
      return (
        <View style={styles.questionContainer}>
          <Text> Thank you for answering. The next question will be posted tomorrow!
          </Text>
          <Button
            onPress={this.goToResults}
            title='Results'
            color='#FF553F'
            >
          </Button>
        </View>
      );
    }
  }

  goToResults() {
    
  }

  onSwipe(gestureName, gestureState) {
    console.log("swiped");
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        this.setState({selected: 'A'});

        setTimeout(()=>{
          this.setState({asked: false});
        }, 1000);
        break;
      case SWIPE_RIGHT:
        this.setState({selected: 'B'});
        setTimeout(()=>{
          this.setState({asked: false});
        }, 1000);
        break;
    }
  }

  noAnswer() {
    setTimeout(()=>{
      this.setState({asked: false});
    }, 1000);
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{
          opacity: fadeAnim,
          flex:1,
          backgroundColor: "#30425a",
        }}>
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          config={this.swipeConfig}
          >
          <StatusBar
            hidden={true}>
          </StatusBar>
          <Text style={styles.title}>Today's Question</Text>
          {this.question()}

        </GestureRecognizer>
      </Animated.View>
    );
  }
}
