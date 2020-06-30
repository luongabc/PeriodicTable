import React,{} from 'react';
import {Text} from 'react-native';

export function ButtonSaveStatus(pros){
    const [select,setSelect] = React.useState(false);
    return(<Text style={[{color:'#fff',height:20,fontSize:16,textAlign:'center'},select&& {backgroundColor:'#1b6b15'},!select&& {backgroundColor:'#132225'}]} 
        onPress={()=>{
            setSelect(!select);
      }}>{pros.item}</Text>)
}