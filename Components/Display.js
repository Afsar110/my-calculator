import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Display (props) {
  
  return (<>
  {props.history ?<Text style={styles.history}>{props.history}</Text>:<></>}
  <Text style={styles.display}>{props.children}</Text></>)
}

const styles = StyleSheet.create({
  display: {
    fontSize: 60,
    padding: 20,
  },
  history:{
    fontSize: 50,
    padding: 20,
    opacity:0.8
  }
});
export default Display;
