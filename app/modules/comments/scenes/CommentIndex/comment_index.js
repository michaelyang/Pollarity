import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import CommentIndexItem from "../comment_index_item.js";
import PercentageCircle from 'react-native-percentage-circle';

export default class CommentIndex extends Component {
  constructor(props) {
    super(props);
  }


  headerGraph() {
    return (
      <View>
        <View style={styles.graph}>
          <PercentageCircle
            radius={100}
            percent={99}
            color={"purple"}
            bgcolor={"orange"}
            borderWidth={10}
            textStyle={{fontSize: 30}}
            >
          </PercentageCircle>
        </View>
        <Text style={styles.question}>Comments</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.question}>{this.props.question}</Text>
        <View style={styles.chartNames}>
          <Text style={styles.chartNameItem}>All</Text>
          <Text style={styles.chartNameItem}>MA</Text>
          <Text style={styles.chartNameItemSelected}>Male</Text>
          <Text style={styles.chartNameItem}>22-30</Text>
        </View>
        <View>
          <FlatList
            style={{marginBottom: 300}}
            data={this.props.comments}
            renderItem={({item}) => <CommentIndexItem comment={item}/>}
            ListHeaderComponent={this.headerGraph}
            />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  question: {
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "purple"
  },
  chartNames: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: "purple"
  },
  chartNameItem: {
    textAlign: 'center',
    fontSize: 20,
    width: "25%",
    height: "100%"
  },
  chartNameItemSelected: {
    width: "25%",
    height: "100%",
    textAlign: 'center',
    fontSize: 20,
    color: "white",
    backgroundColor: "purple"
  },
  graph: {
    alignItems: 'center',
    margin: 'auto',
    paddingVertical: 15
  }
});
