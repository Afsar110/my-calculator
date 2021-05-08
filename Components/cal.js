import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import Mybutton from "./Button";
import Display from './Display';
const buttons=[[7,8,9,'/'],[4,5,6,'*'],[1,2,3,'-'],[0,'C','+',],['DEL','=']];
const operators = ['+','-','*','/'];
function Cal() {

const [currDisplay, setCurrDisplay] = useState([]);
const [history, setHistory] = useState('');

const displayClickHandler = (data) => {
  if(data === 'C'){
    setCurrDisplay([]);
    setHistory('');
  }else if(data === '='){
    resultHandler();
  }else if(data ==='DEL'){
    const oldData = [...currDisplay];
    oldData.pop();
    setCurrDisplay(oldData);
    oldData.length === 0 && setHistory('');
  }  else if(operators.includes(data) && operators.includes(currDisplay[currDisplay.length-1])) {
     const oldData = [...currDisplay];
     oldData.pop();
     oldData.push(data);
      setCurrDisplay(oldData);
    } else {
      setCurrDisplay(old=>[...old,data])
    }
}

const resultHandler = () => {
  const element = currDisplay.join('');
  let result=null;
  try{
 result = eval(element);
  } catch(e){
    ToastAndroid.show('Invalid operation',ToastAndroid.SHORT);
    console.log(e.toString());
  }
  if(result) {
  setHistory(currDisplay.join(''));
  setCurrDisplay([result])
  }
}
  return (
    <View style={styles.container}>
   <Display click= {displayClickHandler} history={history} >{currDisplay.join('')}</Display>
   {buttons.map((row,i)=> <View key={i} style={styles.row}>
     {row.map((element)=><Mybutton key={`${element} i`} onPress={displayClickHandler}>{element}</Mybutton>)}

     
   </View>
   )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
  },
ans:{
  fontSize:70
},
btn: {
  backgroundColor: 5085100,
  
  alignItems:"center",
  justifyContent:"center"
},
btnText: {
  fontSize: 70,
  
},

});

export default Cal;
