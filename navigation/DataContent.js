import React, { PureComponent } from 'react';
import {View,Text,StyleSheet} from 'react-native';
export class DataContent extends PureComponent {
    constructor(props){
        super(props)
    }
  render() {
      return(
        
        <View style={[{flexDirection:"row",borderBottomWidth:1,height:30,borderBottomColor:'#C1C0B9'},this.props.key%2&&{backgroundColor: '#F7F6E7'}]}>
          <Text style={styles.row}>{this.props.item.name}</Text>
          <Text style={styles.row}>{this.props.item.symbol}</Text>
          <Text style={styles.row}>{this.props.item.atomicNumber}</Text>
          <Text style={styles.row}>{this.props.item.atomicMass}</Text>
          <Text style={styles.row}>{this.props.item.atomicRadius}</Text>
          <Text style={styles.row}>{this.props.item.oxidationStates}</Text>
          <Text style={styles.row}>{this.props.item.boilingPoint}</Text>
          <Text style={styles.row}>{this.props.item.bondingType}</Text>
          <Text style={styles.row}>{this.props.item.cpkHexColor}</Text>
          <Text style={styles.row}>{this.props.item.meltingPoin}</Text>
          <Text style={styles.row}>{this.props.item.standardState}</Text>
          <Text style={styles.row}>{this.props.item.vanDerWaalsRadius}</Text>
          <Text style={styles.row}>{this.props.item.yearDiscovered}</Text>
          <Text style={styles.row}>{this.props.item.density}</Text>
          <Text style={styles.row}>{this.props.item.electronAffinity}</Text>
          <Text style={styles.row}>{this.props.item.electronegativity}</Text>
          <Text style={styles.row}>{this.props.item.electronicConfiguration}</Text>
          <Text style={styles.row}>{this.props.item.groupBlock}</Text>
          <Text style={styles.row}>{this.props.item.ionRadius}</Text>
          <Text style={styles.row}>{this.props.item.ionizationEnergy}</Text>
        </View>
      )
   }
}
const styles = StyleSheet.create({
    row: { textAlign: 'center',width:150,borderRightWidth:1,borderRightColor:'#C1C0B9',height:30,lineHeight: 30,color:'#fff'}
  });