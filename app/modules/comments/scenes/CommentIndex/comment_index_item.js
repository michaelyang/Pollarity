import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class CommentIndexItem extends Component {
  constructor(props) {
    super(props);
    this.time = this.timestamp();
    this.state = {
      butt: 0
    };
    this.onPress = this.onPress.bind(this);
  }

  timestamp() {
    const now = new Date(2018, 2, 27, 14);
    const posted = new Date(2018, 2, 27, 10);
    return ((now - posted) / 1000)/60/60;
  }

  onPress() {
    let butt = this.state.butt += 1;
    this.setState({butt: butt});
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.item}
        onPress={this.onPress}
        >
        <View>
          <Text style={styles.header}>{this.props.comment.author} - {this.time}h -- {this.state.butt}+</Text>
          <Text style={styles.body}>{this.props.comment.body}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

let styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "purple",
    paddingHorizontal: 3,
    paddingVertical: 5,
  },
  header: {
    color: 'grey',
    fontSize: 15,
    paddingLeft: 5
  },
  body: {
    color: 'black',
    fontSize: 17,
    paddingRight: 60,
    paddingLeft: 5
  }
});
