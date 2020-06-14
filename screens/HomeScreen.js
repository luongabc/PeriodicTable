import * as WebBrowser from 'expo-web-browser';
import React,{Component} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

import {getData} from '../navigation/Database/ModulFirebase';
import { Table, TableWrapper, Row,Col } from 'react-native-table-component';

export default class HomeScreen extends Component {
  constructor(prop){
    super(prop);
    this.leftIsScrolling = false;
    this.rigthIsScrolling = false;
    this.widthArr= [80, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150];
    this.heightArr=[];
    
    this.ListCol=[
      "Symbol",
      "Atomic Number",
      "Atomic Mass",
      "Atomic Radius",
      "Oxidation States",
      "Boiling Point",
      "Bonding Type",
      "Cpk Hex Color",
      "Density",
      "Electron Affinity",
      "Electronegativity",
      "Electronic Configuration",
      "Group Block",
      "Ion Radius",
      "Ionization Energy",
      "Melting Point",
      "Standard State",
      "VanDerWaals Radius",
      "Year Discovered",];
    this.state={
      datas:[],
      ListRow:[],
      arrShow:[],
      load:true,
      
    }
  }
  async componentDidMount(){
    var data=[];
    data= await getData();
    
    this.setState({datas:data});
    
    if(data.length>0){
      var listRows=[];
      data.map((elec)=>{
        listRows.push(elec.name);
      });
      this.setState({ListRow:listRows});
      
      var Rows=[];
      data.map((elec)=>{
        Rows.push([
          elec.symbol,
          elec.atomicNumber,
          elec.atomicMass,
          elec.atomicRadius,
          elec.oxidationStates,
          elec.boilingPoint,
          elec.bondingType,
          elec.cpkHexColor,
          elec.density,
          elec.electronAffinity,
          elec.electronegativity,
          elec.electronicConfiguration,
          elec.groupBlock,
          elec.ionRadius,
          elec.ionizationEnergy,
          elec.meltingPoint,
          elec.standardState,
          elec.vanDerWaalsRadius,
          elec.yearDiscovered,]);
      })
      this.setState({arrShow:Rows});
      this.setState({load:false});
    }
    
  }
  render(){
    if(this.state.load){
      return(<View style={{flex:1, flexDirection:'row'}}>
        <Text style={{margin:5,fontSize:20}} >Periodic Table</Text>
      </View>);
    }
    return(
      <View style={{flex:1}} >
      <View style={{flex:1, flexDirection:'row'}}>
        <Text style={{margin:5,fontSize:20}}>Periodic Table</Text>
      </View>
      <View style={styles.container}>
        <ScrollView style={{marginTop:40,width:120}}
          scrollEventThrottle={16}
          ref={scrollView => { this._leftView = scrollView; }}
          onScroll={e => {
            if (!this.leftIsScrolling) {
            this.rigthIsScrolling = true;
            var scrollY = e.nativeEvent.contentOffset.y;
            this._rightView.scrollTo({ y: scrollY });
          }
          this.leftIsScrolling = false;}
          }
        >
          <Table >
            <Col data={this.state.ListRow}  
              borderStyle	={ {borderWidth:1 , borderColor: '#C1C0B9'}} 
              style={{backgroundColor: '#537791',borderTopWidth:1,borderColor: '#C1C0B9'}}  
              textStyle={styles.textHeader}/>
          </Table>
        </ScrollView>
        <ScrollView horizontal={true} directionalLockEnabled={true} >
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={this.ListCol} widthArr={this.widthArr}  style={styles.header} textStyle={styles.textHeader}/>
            </Table>
            <ScrollView
              ref={scrollView => { this._rightView = scrollView; }}
              scrollEventThrottle={16}
              onScroll={e => {
                if (!this.rigthIsScrolling) {
                  this.leftIsScrolling = true;
                  var scrollY = e.nativeEvent.contentOffset.y;
                  this._leftView.scrollTo({ y: scrollY });
                }
                this.rigthIsScrolling = false;
              }}
              >
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  this.state.arrShow.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={this.widthArr}
                      heightArr={this.heightArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.textData}
                    />
                  ))
                }
              </Table>
            </ScrollView> 
          </View>
        </ScrollView>
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex:9,flexDirection: 'row', backgroundColor: '#537791',margin:2 },
  header: { height: 40, backgroundColor: '#537791' },
  textData: { textAlign: 'center', fontWeight: '100' },
  textHeader: { textAlign: 'center', fontWeight: '100',color:'#fff' },
  row: {  backgroundColor: '#E7E6E1' }
});