
import React,{Component, useEffect} from 'react';
import { Image, StyleSheet, Text, View, Button ,ActivityIndicator} from 'react-native';
import { ScrollView, FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import {getData} from '../navigation/Database/ModulFirebase';
import {DataContent} from '../navigation/DataContent';
import {ButtonSaveStatus} from '../navigation/ButtonSaveStatus';
export class HomeScreen extends Component {
  constructor(prop){
    super(prop);
    this.leftIsScrolling = false;
    this.rigthIsScrolling = false;

    this.data=[];
    this.limit=117;
    this.state={
      datas:[],
      load:true,
      sort:"",
      loadMoreData:true,
      showFilter:false
    }
    this.count=0;
  }
  async componentDidMount(){
    if(this.data.length<=0){
      this.data= await getData();
      if(this.data.length>this.limit){
        var newData=[];
        for(var i=0;i<this.limit;i++){
          newData.push(this.data[i]);
        }
        this.setState({datas:newData});
      }
    }
    if(this.data.length>0){
      this.setState({load:false});
    }
  }
  
  render(){
    this.count++;
    {console.log(this.count)}
    if(this.state.load){
      return(<View style={[{flex:1, flexDirection:'row',backgroundColor:'#213335'},styles.textWhile]}>
        <Text style={[{margin:5,fontSize:20},styles.textWhile]} >              Periodic Table</Text>
        <ActivityIndicator size='large' color="#00ff00" />
      </View>);
    }
    return(
      <View style={{flex:1,backgroundColor:'#213335'}} >
      {/* Hearder       */}
      <View style={{flex:1, flexDirection:'row'}}>
        <Text style={[{flex:4,margin:5,fontSize:20},styles.textWhile]}>              Periodic Table</Text>
        <View style={{flex:1,flexDirection:'row',margin:5}}>

          {/* change screen */}
          <TouchableHighlight
          underlayColor={'#537791'}
          activeOpacity={0.6}
          onPress={()=>{
            this.props.navigation.navigate('Table')
            }}>
          
          <Image style={{width:30,height:30}}source={require('../assets/table.png')}/>
          </TouchableHighlight>

          {/* clear filter */}
          <Text style={{width:20}}></Text>
          <TouchableHighlight
          underlayColor={'#537791'}
          activeOpacity={0.8}
          onPress={()=>this.loadFirst()}
          >
            <Image style={{width:30,height:30}}
             source={require('../assets/clear.png')}
             />
          </TouchableHighlight>

            {/* filter */}
          <TouchableHighlight
          style={{width: 50}}
          underlayColor={'#537791'}
          activeOpacity={0.8}
          onPress={()=>this.changeStateFilter()}>
            <Text style={[styles.textFilt,styles.textWhile]}>Filter</Text>
          </TouchableHighlight>

        </View>
      </View>
      {/*TableContainer */}
      <View style={styles.container}>
        
        <ScrollView horizontal={true} directionalLockEnabled={true} >
          <View>
            {this.showHeaderTop()}
            <FlatList
              ref={scrollView => { this._rightView = scrollView; }}
              scrollEventThrottle={16}
              data={this.state.datas}
              renderItem={({item})=>(<DataContent item={item}/>)}
              keyExtractor={(item,index)=>index.toString()}
              onEndReachedThreshold={0,1}
              onEndReached={()=>this.loadMore()}
            />
          </View>
        </ScrollView>
      </View>
      {  this.FilterCPN()}
      </View>
    )
  }
  loadFirst(){
    this.setState({sort:""});
    this.setState({loadMoreData:true});
    if(this.data.length>=this.limit){
      var newData=[];
      for(var i=0;i<this.limit;i++){
        newData.push(this.data[i]);
      }
      this.setState({datas:newData});
    }
  }
  FilterCPN(){
    
    var temp=["alkali metal","halogen","lanthanoid","metalloid","noble gas","metal","non-metal","transition meltal","alkaline earth metal","post transition meltal"];
    var tempOxidation=['-4','-3','-2','-1','1','2','3','4','5','6','7','8'];
    var textFilt=[];
    var arrButton=[];
    temp.map(item=>{
      arrButton.push(
        <TouchableHighlight 
        style={{width:120}}
        onPress={()=>{
          var have=false;
          for(var i=0;i<textFilt.length;i++){
            if(textFilt[i]==item)
            {
              textFilt.splice(i,1);
              have=true;
              break;
            }
          }
          if(have==false) textFilt.push(item);
        }}>
        <ButtonSaveStatus  item={item} textFilt={textFilt}/>
        </TouchableHighlight>)
    })
    if(!this.state.showFilter) return null;
    else{
      return(
      <View style={{position:'absolute',right:10,top:40, height:300,width:500,backgroundColor:'#000',color:'#fff',padding:5,backgroundColor:'#324346'}}>
        <TouchableHighlight 
        onPress={()=>{
          if(textFilt.length>0){
            var newArr =this.data.filter((item)=>{
              if(textFilt.find(text=> {return text==item.groupBlock})!=undefined) return true;
              else if(textFilt.find(text=> {return item.oxidationStates.toString().lastIndexOf(', '+text)>=0||item.oxidationStates.toString().lastIndexOf(text+',')>=0})!=undefined) return true;
            })
            this.setState({datas:newArr});
          }
          this.changeStateFilter();
          this.setState({loadMoreData:false});
        }}>
          <ButtonSaveStatus  item={"Done"} />
        </TouchableHighlight>
        <Text style={{color:'#fff',fontSize:15}}>Classification</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around',margin:2}}>
          {arrButton[0]}
          {arrButton[1]}
          {arrButton[2]}
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',margin:2}}>
          {arrButton[3]}
          {arrButton[4]}
          {arrButton[5]}
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around' ,margin:2}}>
          {arrButton[6]}
          {arrButton[7]}
          {arrButton[8]}
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',margin:2}}>
          {arrButton[9]}
        </View>

        <Text style={{color:'#fff',fontSize:15}}>Oxidation states</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around',margin:2}}>
        {
          tempOxidation.map((item,index)=>(
            <TouchableHighlight key={index}
            style={{width:30}}
              onPress={()=>{
                var have=false;
                for(var i=0;i<textFilt.length;i++){
                  if(textFilt[i]==item){
                    textFilt.splice(i,1);
                    have=true;
                    break;
                  }
                }
                if(have==false) textFilt.push(item);
              }}>
              <ButtonSaveStatus item={item} textFilt={textFilt}/>
            </TouchableHighlight>))
        }
        </View>
      </View>
    )
    }
  }
  changeStateFilter(){
    this.setState({showFilter:!this.state.showFilter});
  }
  showHeaderTop(){
    var ListCol=[
      {
        Display:'Name',
        key:'name'
      },
      {
        Display:"Symbol",
        key:'symbol'
      },
      {
        Display:"Atomic Number",
        key:'atomicNumber'
      },
      {
        Display:"Atomic Mass",
        key:'atomicMass'
      },
      {
        Display:"Atomic Radius",
        key:'atomicRadius'
      },
      {
        Display:"Oxidation States",
        key:'oxidationStates'
      },
      {
        Display:"Boiling Point",
        key:'boilingPoint'
      },
      {
        Display:"Bonding Type",
        key:'bondingType'
      },
      {
        Display:"Cpk Hex Color",
        key:'cpkHexColor'
      },
      {
        Display:"Melting Poin",
        key:'meltingPoin'
      },
      {
        Display:"Standard State",
        key:'standardState'
      },
      {
        Display:"SyVanDerWaals Radiusmbol",
        key:'vanDerWaalsRadius'
      },
      {
        Display:"Year Discovered",
        key:'yearDiscovered'
      },
      {
        Display:"Density",
        key:'density'
      },
      {
        Display:"Electron Affinity",
        key:'electronAffinity'
      },
      {
        Display:"Electronegativity",
        key:'electronegativity'
      },
      {
        Display:"Electronic Configuration",
        key:'electronicConfiguration'
      },
      {
        Display:"Group Block",
        key:'groupBlock'
      },
      {
        Display:"Ion Radius",
        key:'ionRadius'
      },
      {
        Display:"Ionization Energy",
        key:'ionizationEnergy'
      }]
    return(
    <View style={styles.headerTop}>
      {
        ListCol.map((item,index)=>{
            return(
              <TouchableHighlight
              key={index}  
              activeOpacity={0.8}
              underlayColor="#1b6b15"
              onPress={()=>this.sortTitle(item.key)}
              >
              <Text 
                style={styles.row}
                >{item.Display}</Text>
              </TouchableHighlight>
        )})
      }
      </View>
    )
  }
  sortTitle(item){
    if(this.state.loadMoreData==true) this.setState({datas:this.data});
    if(this.state.sort!=item){
      this.setState({sort:item})
      this.setState({datas:this.state.datas.sort(this.compareValues(item))});  
    }
    else{
      this.setState({datas:this.state.datas.sort(this.compareValues(item,'desc'))});
      this.setState({sort:""})
    }
  }
  TitleHeader(key,title){
    return(<Text 
      onPress={()=>{
        if(this.state.sort!=key){
          this.setState({sort:key})
          this.setState({datas:this.state.datas.sort(this.compareValues(key))});  
        }
        else{
          this.setState({datas:this.state.datas.sort(this.compareValues(key,'desc'))});
          this.setState({sort:""})
        }
      }}
      style={styles.row}
      >{title}</Text>)
  }
  shouldComponentUpdate (){
    console.log(this.state.datas.length);
    return true;
  }
  loadMore(){
    var more=30;
    if(this.state.loadMoreData==false) return 0;
    if(this.state.datas.length==this.data.length) return 0;
    else if(this.state.datas.length+more<=this.data.length){
      var newData=[]
      for(var i=this.state.datas.length;i<this.state.datas.length+more;i++){
        newData.push(this.data[i]);
      }
      this.setState({datas:[...this.state.datas,...newData]})
    }
    else if(this.state.datas.length+more>this.data.length){
      var newData=[]
      for(var i=this.state.datas.length;i<this.data.length;i++){
        newData.push(this.data[i]);
      }
      this.setState({datas:[...this.state.datas,...newData]})
    }
  }
  compareValues(key='atomicNumber', order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
}
const styles = StyleSheet.create({
  textWhile:{color:'#fff'},
  container: { flex:10,flexDirection: 'row',margin:2 },
  headerTop:{flexDirection:"row",borderTopWidth:1,backgroundColor: '#537791'},
  header: { height: 30, backgroundColor: '#537791' },
  textData: { textAlign: 'center', fontWeight: '100' },
  textHeader: { textAlign: 'center', fontWeight: '100',color:'#fff' },
  textHeaderLeft: { textAlign: 'center',borderBottomColor:'#fff',borderBottomWidth:1,height:30, fontWeight: '100',color:'#fff' },
  row: { textAlign: 'center',width:150,borderRightWidth:1,borderRightColor:'#C1C0B9',height:30,lineHeight: 30,color:'#fff'},
  textFilt:{fontSize:15,height:30,textAlign:'center',lineHeight:30}
});