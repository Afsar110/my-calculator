import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Mybutton(props) {
   const [buttonColor,setButtonColor]=useState("#fff");
   const handlePress=()=>{
    setButtonColor("#000");
    props.onPress && props.onPress(props.children);
   }
   const handleRelese=()=>{
    setButtonColor("#fff");
   }
  return (
        <TouchableOpacity style={styles.btn} onPressIn={handlePress} onPressOut={handleRelese}>
          <Text style={{...styles.btnText,color:buttonColor}}>{props.children}</Text>
          <StatusBar style="auto" />
        </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    btn: {
      backgroundColor: 5085100,
      flex:1,
      padding: 10,
      alignItems:"center",
      justifyContent:"center"
    },
    btnText: {
      fontSize: 50,
    },
  
  
  });
  export default Mybutton;
  

