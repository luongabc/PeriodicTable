import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
export class Filter extends Component {
    constructor(props){
        super(props)
    }

  render() {
      return(
        <View style={[{position:'relative',right:5,top:50,height:500,width:700,backgroundColor:'#000'},this.props.item.atomicNumber%2&&{backgroundColor: '#F7F6E7'}]}>
          
        </View>
      )
   }
}
const styles = StyleSheet.create({
    row: { textAlign: 'center',width:150,borderRightWidth:1,borderRightColor:'#C1C0B9',height:30,lineHeight: 30,}
  });