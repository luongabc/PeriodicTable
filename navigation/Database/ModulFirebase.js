import {FirebaseApp} from './FirebaseConfig';

export const getData=()=>{
    var arr=[];
    FirebaseApp.database().ref("table").once('value').then(snapshot=>{
        arr=Object.values(snapshot.val());
        //console.log(arr);
        return arr;
    })
}